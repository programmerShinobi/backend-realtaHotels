----------------------- Function and Stored Procedure -----------------------
-----------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION payment.getEntityId()
RETURNS int
AS $$

BEGIN
	RETURN (
		SELECT setval('payment."entities_entity_id_seq"',
					  (SELECT COALESCE(MAX(entity_id), 0) FROM payment.entities) + 1
		)
	);

END; $$
LANGUAGE plpgsql;

----

CREATE OR REPLACE FUNCTION payment.getTransactionNumber(transactionID int, transactionType text, transactionDate text DEFAULT NOW())
RETURNS text
AS $$
BEGIN
	RETURN CONCAT(TransactionType, '#', TO_CHAR(transactionDate::date, 'YYYYMMDD'), '-', TO_CHAR(TransactionID, 'FM0000'));
END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertPaymentGateaway (
	Code	text,
	Name	text
)
AS $$

DECLARE
	ID int;
	
BEGIN
	ID := payment.getEntityId();
	INSERT INTO payment.entities(entity_id)
		VALUES (ID);
	INSERT INTO payment.payment_gateaway(paga_entity_id, paga_code, paga_name)
		VALUES (ID, Code, Name);
	
END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertBank(
	Code	text,
	Name	text
)
AS $$

DECLARE
	ID int;
	
BEGIN
	ID := payment.getEntityId();
	INSERT INTO payment.entities(entity_id)
		VALUES (ID);
	INSERT INTO payment.bank(bank_entity_id, bank_code, bank_name)
		VALUES (ID, Code, Name);

END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertUserAccount (
	UserID			int,
	AccountType		text,
	CardHolderName	text,
	SecuredKey		text,
	Balance			numeric,
	EntityName		text,
	AccountNumber	text DEFAULT NULL,
	ExpMonth		int DEFAULT NULL,
	ExpYear			int DEFAULT NULL
)
AS $$

DECLARE
	EntityID 	int;

BEGIN
	IF LOWER(AccountType) NOT LIKE 'fintech' THEN 
		EntityID := (
			SELECT bank_entity_id
			FROM payment.bank
			WHERE bank_name = EntityName
		);
		
	ELSEIF LOWER(EntityName) = 'goto' THEN
		EntityID := (
			SELECT paga_entity_id
			FROM payment.payment_gateaway
			WHERE paga_code = '256'
		);
		AccountNumber := CONCAT(522, (
			SELECT user_phone_number
			FROM users.users
			WHERE user_id = UserID
		))::text;
		
	ELSEIF LOWER(EntityName) = 'dompet realta' THEN
		EntityID := (
			SELECT paga_entity_id
			FROM payment.payment_gateaway
			WHERE paga_code = '255'
		);
		AccountNumber := CONCAT(225, (
			SELECT user_phone_number
			FROM users.users
			WHERE user_id = UserID
		))::text;
		Balance := 0;

	END IF;

	INSERT INTO payment.user_accounts(
		usac_user_id,
		usac_entity_id,
		usac_account_number,
		usac_expmonth,
		usac_expyear,
		usac_saldo,
		usac_type,
		usac_card_holder_name,
		usac_secured_key
	) VALUES (
		UserID,
		EntityID,
		AccountNumber,
		ExpMonth,
		ExpYear,
		Balance,
		AccountType,
		CardHolderName,
		SecuredKey
	);
END; $$
LANGUAGE plpgsql;

-----------------------------------------------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertBookingPaymentTransaction (
	UserID			  int, 
	OrderID			  text,
	Amount			  int,
	SourceNumber	numeric,
	TargetNumber	numeric
) 
AS $$

DECLARE
	-- Extract the type of an order.
	OrderType text = SUBSTRING(OrderID, '(.*)#');
    TransactionDate text := (SELECT SUBSTRING(OrderID, '#(.*)-'))::date; -- Extract order date from order number 'MENUS#..' or 'BO#..'
	
	-- Transaction's variable.
	TransactionType text;
	TransactionID int := (SELECT COALESCE(MAX(patr_id) + 1, 1) FROM payment.payment_transaction);
    TransactionNumber text;
	TransactionNumberRef text := FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 15))::text;
	
	-- Next transaction's variables.
	NextTransactionID int := TransactionID + 1;
	NextTransactionNumber text;
	NextTransactionNumberRef text := FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 15))::text;
	
	Debit int := 0;
	Credit int := 0;
	Note text;

	HotelFacilityName text;
	HotelName text;

    RealtaUserID int := (
        SELECT DISTINCT "userId" FROM payment.user_payment_methods WHERE "accountNumber" = TargetNumber::text
    );

BEGIN
	CASE
		WHEN OrderType = 'MENUS'
			THEN
				TransactionType := 'ORM';
				Credit := Amount;
				HotelFacilityName := (
					SELECT DISTINCT "facilityName" FROM resto.order_per_faci_and_hotel WHERE "orderNumber" = OrderID
				);
				HotelName := (
					SELECT DISTINCT "hotelName" FROM resto.order_per_faci_and_hotel WHERE "orderNumber" = OrderID
				);
				Note := CONCAT('Resto payment ', OrderID, ' at ', HotelFacilityName, ', ', HotelName);
				
				-- Update status in resto's `order_menus` table.
				UPDATE resto.order_menus SET orme_is_paid = 'P' WHERE orme_order_number = OrderID;

		WHEN OrderType = 'BO'
			THEN
				TransactionType := 'TRB';
				Credit := Amount;
				HotelName := (
					SELECT hotel_name
					FROM booking.booking_orders bo
					JOIN hotel.hotels h ON bo.boor_hotel_id = h.hotel_id
					WHERE boor_order_number = OrderID
				);
				Note := CONCAT('Room booking ', OrderID, ' at ', HotelName);
				
				-- Update status in booking's `booking_orders` table
				UPDATE booking.booking_orders SET boor_is_paid = 'P' WHERE boor_order_number = OrderID;
	END CASE;
	
	TransactionNumber := payment.getTransactionNumber(TransactionID, TransactionType, TransactionDate);
	NextTransactionNumber := payment.getTransactionNumber(NextTransactionID, TransactionType, TransactionDate);
	-- Update user's balance
	UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric - Amount) WHERE usac_account_number = SourceNumber::text;
	-- Update Realta's balance
	UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric + Amount) WHERE usac_account_number = TargetNumber::text;
	
	INSERT INTO payment.payment_transaction (
		patr_user_id,
		patr_id,
		patr_trx_number,
		patr_type,
		patr_note,
		patr_order_number,
		patr_source_id,
		patr_target_id,
		patr_trx_number_ref,
		patr_debet,
		patr_credit
	) VALUES (
		UserID,
		TransactionID,
		TransactionNumber,
		TransactionType,
		Note,
		OrderID,
		SourceNumber,
		TargetNumber,
		TransactionNumberRef,
		Debit, 
		Credit 
	);

	INSERT INTO payment.payment_transaction (
		patr_user_id,
		patr_id,
		patr_trx_number,
		patr_type,
		patr_note,
		patr_order_number,
		patr_source_id,
		patr_target_id,
		patr_trx_number_ref,
		patr_debet,
		patr_credit
	) VALUES (
		RealtaUserID,
		NextTransactionID,
		NextTransactionNumber,
		TransactionType,
		Note,
		OrderID,
		SourceNumber,
		TargetNumber,
		NextTransactionNumberRef,
		Credit, 
		Debit 
	);
END; $$ 
LANGUAGE plpgsql;
 
--------------------------------------

CREATE OR REPLACE PROCEDURE payment.InsertPaymentTransaction(
	TrxUserID			int,
	TransactionType		text,
	Amount				numeric,
	SourceNumber		text,
	TargetNumber		text
)
AS $$

DECLARE
	TransactionID int := (SELECT COALESCE(MAX(patr_id) + 1, 1) FROM payment.payment_transaction);
	TransactionNumber text := payment.getTransactionNumber(TransactionID, TransactionType);
	TransactionNumberRef text := FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 15))::text;

	NextTransactionID int := TransactionID + 1;
	NextTransactionNumber text := payment.getTransactionNumber(NextTransactionID, TransactionType);
	NextTransactionNumberRef text := FLOOR(RANDOM() * POWER(CAST(10 as BIGINT), 15))::text;

	PaymentName text := (
		SELECT "paymentName" FROM payment.user_payment_methods WHERE "accountNumber" = SourceNumber
	);
	Credit int := 0;
	Debit int := 0;
	OrderNumber text;
	Note text;

    RealtaUserID int := (
        SELECT DISTINCT "userId" FROM payment.user_payment_methods WHERE "fullName" = 'Realta Group'
    );

BEGIN
	-- Top up
	IF TransactionType = 'TP' THEN
		Debit := Amount;
		OrderNumber := CONCAT(REPLACE(PaymentName, ' ', ''), '_', TO_CHAR(NOW()::date, 'YYYYMMDD'), TransactionNumberRef);
		Note := CONCAT('Dompet Realta top up from ', PaymentName, ', ', SourceNumber); 
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric - Amount) WHERE usac_account_number = SourceNumber;
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric + Amount) WHERE usac_account_number = TargetNumber;
		
	-- Refund
	ELSEIF TransactionType = 'RF' THEN
		Debit := Amount;
		OrderNumber := CONCAT('RFND', '_', TO_CHAR(NOW()::date, 'YYYYMMDD'), TransactionNumberRef);
		Note := CONCAT('Refund to ', TargetNumber);
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric + Amount) WHERE usac_account_number = TargetNumber;
		-- Update Realta's account balance.
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric - Amount) WHERE usac_account_number = SourceNumber;
		
	-- Repayment: user pays to Realta Group
	ELSE
		Credit := Amount;
		OrderNumber := CONCAT('RPYM', '_', TO_CHAR(NOW()::date, 'YYYYMMDD'), TransactionNumberRef);
		Note := CONCAT('Repayment from ', PaymentName, SourceNumber);
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric - Amount) WHERE usac_account_number = SourceNumber;
		-- Update realta's account balance.
		UPDATE payment.user_accounts SET usac_saldo = (usac_saldo::numeric + Amount) WHERE usac_account_number = TargetNumber;
	END IF;
	
	INSERT INTO payment.payment_transaction (
		patr_user_id,
		patr_id,
		patr_trx_number,
		patr_type,
		patr_note,
		patr_source_id,
		patr_target_id,
		patr_trx_number_ref,
		patr_debet,
		patr_credit,
		patr_order_number
	) VALUES (
		TrxUserID,
		TransactionID,
		TransactionNumber,
		TransactionType,
		Note,
		SourceNumber::numeric,
		TargetNumber::numeric,
		TransactionNumberRef,
		Debit,
		Credit,
		OrderNumber
	);
	
	INSERT INTO payment.payment_transaction (
		patr_user_id,
		patr_id,
		patr_trx_number,
		patr_type,
		patr_note,
		patr_source_id,
		patr_target_id,
		patr_trx_number_ref,
		patr_debet,
		patr_credit,
		patr_order_number
	) VALUES (
		RealtaUserID,
		NextTransactionID,
		NextTransactionNumber,
		TransactionType,
		Note,
		SourceNumber::numeric,
		TargetNumber::numeric,
		NextTransactionNumberRef,
		Credit,
		Debit,
		OrderNumber
	);
END; $$
LANGUAGE plpgsql;