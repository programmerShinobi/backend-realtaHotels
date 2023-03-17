CREATE OR REPLACE PROCEDURE booking.InsertBooking(
    p_boor_user_id int,
    p_boor_hotel_id int,
    p_boor_order_number varchar (20),
    p_boor_order_date date,
    p_boor_arrival_date date,
    p_boor_total_room smallInt,
    p_boor_total_guest smallInt,
    p_boor_discount int,
    p_boor_total_tax int,
    p_boor_total_amount  int,
    p_boor_down_payment  int,
    p_boor_pay_type  varchar (2),
    p_boor_is_paid  varchar (2), 
    p_boor_type  varchar (15),
    p_boor_cardnumber varchar (25),
    p_boor_member_type varchar (15),
    p_boor_status varchar (15),
    p_borde_checkin date,
    p_borde_Checkout date,
    p_borde_adults int,
    p_borde_kids int,
    p_borde_price int,
    p_borde_extra int,
    p_borde_discount int,
    p_borde_tax int,
    p_borde_subtotal int,
    p_borde_faci_id int,
	p_soco_spof_id int
)
LANGUAGE plpgsql
AS $$
DECLARE 
    boor_id_val int; --Tambah ini
	borde_id_val int;
	cur_date date := p_borde_checkin;
BEGIN
    INSERT INTO booking.booking_orders(
        boor_user_id,
        boor_hotel_id,
        boor_order_number,
        boor_order_date,
        boor_arrival_date,
        boor_total_room,
        boor_total_guest,
        boor_discount,
        boor_total_tax,
        boor_total_amount,
        boor_down_payment,
        boor_pay_type,
        boor_is_paid,
        boor_type,
        boor_cardnumber,
        boor_member_type,
        boor_status
    )
    VALUES (
        p_boor_user_id,
        p_boor_hotel_id,
        p_boor_order_number,
        p_boor_order_date,
        p_boor_arrival_date,
        p_boor_total_room,
        p_boor_total_guest,
        p_boor_discount,
        p_boor_total_tax,
        p_boor_total_amount,
        p_boor_down_payment,
        p_boor_pay_type,
        p_boor_is_paid,
        p_boor_type,
        p_boor_cardnumber,
        p_boor_member_type,
        p_boor_status
    )RETURNING boor_id INTO boor_id_val; --Tambah Ini

    INSERT INTO booking.booking_order_detail(
        border_boor_id,
        borde_faci_id,
        borde_checkin,
        borde_checkout,
        borde_adults,
        borde_kids,
        borde_price,
        borde_extra,
        borde_discount,
        borde_tax,
        borde_subtotal
    )
    VALUES (
        boor_id_val,
        p_borde_faci_id,
        p_borde_checkin,
        p_borde_Checkout,
        p_borde_adults,
        p_borde_kids,
        p_borde_price,
        p_borde_extra,
        p_borde_discount,
        p_borde_tax,
        p_borde_subtotal
    )RETURNING borde_id INTO borde_id_val;
	
	INSERT INTO booking.special_offer_coupons(
		soco_borde_id,
		soco_spof_id
	)
	VALUES (
		borde_id_val,
		p_soco_spof_id
	);
	
	WHILE cur_date < p_borde_checkout LOOP
        cur_date := cur_date + 1;
		INSERT INTO booking.user_breakfeast(
            usbr_borde_id,
            usbr_modified_date,
            usbr_total_vacant
        )
        VALUES (
            borde_id_val,
            cur_date,
            p_boor_total_guest
        );
    END LOOP;
COMMIT;
END;$$;


-- proceducere insert 2 tabel fac hotel
CREATE OR REPLACE PROCEDURE hotel.insert_facility_and_price_history(
  IN faci_name character varying(125),
  IN faci_description character varying(225),
  IN faci_max_number integer,
  IN faci_measure_unit character varying(15),
  IN faci_room_number character varying(6),
  IN faci_startdate timestamp,
  IN faci_endate timestamp,
  IN faci_low_price money,
  IN faci_hight_price money,
  IN faci_rate_price money,
  IN faci_discount money,
  IN faci_tax_rate money,
  IN faci_modified_date timestamp,
  IN faci_hotel_id integer,
  IN faci_cagro_id integer
)
LANGUAGE plpgsql
AS $$
DECLARE
  faci_id integer;
BEGIN
  INSERT INTO hotel.facilities (
    faci_name,
    faci_description,
    faci_max_number,
    faci_measure_unit,
    faci_room_number,
    faci_startdate,
    faci_endate,
    faci_low_price,
    faci_hight_price,
    faci_rate_price,
    faci_discount,
    faci_tax_rate,
    faci_modified_date,
    faci_hotel_id,
    faci_cagro_id
  )
  VALUES (
    faci_name,
    faci_description,
    faci_max_number,
    faci_measure_unit,
    faci_room_number,
    faci_startdate,
    faci_endate,
    faci_low_price,
    faci_hight_price,
    faci_rate_price,
    faci_discount,
    faci_tax_rate,
    faci_modified_date,
    faci_hotel_id,
    faci_cagro_id
  )
  RETURNING hotel.facilities.faci_id INTO faci_id;

  INSERT INTO hotel.facility_price_history (
    faph_faci_id,
    faph_startdate,
    faph_enddate,
    faph_low_price,
    faph_high_price,
    faph_discount,
    faph_tax_rate,
    faph_modified_date
  )
  VALUES (
    faci_id,
    faci_startdate,
    faci_endate,
    faci_low_price,
    faci_hight_price,
    faci_discount,
    faci_tax_rate,
    faci_modified_date
  );
END;
$$;

-- prosedur menampilakn adreess

    CREATE VIEW hotel.adsress AS
	select (a.addr_id)hotel_addr_id, concat(a.addr_line1,' ',p.prov_name,' ',c.country_name,' ',r.region_name)place 
	from master.address a
	join master.provinces p on a.addr_prov_id = p.prov_id
	join master.country c on p.prov_country_id = c.country_id
	join master.regions r on r.region_code = c.country_region_id
;
-- 	end



CREATE OR REPLACE FUNCTION humanresource.getAllEmployee () 
    RETURNS TABLE (
        user_full_name VARCHAR,
        emp_id integer,
		emp_national_id varchar(25),
		emp_birth_date timestamp,
		emp_marital_status char(1),
		emp_gender char(1),
		emp_hire_date timestamp,
		emp_salaried_flag char(1),
		emp_vacation_hours smallint,
		emp_sickleave_hours smallint,
		emp_current_flag smallint,
		emp_photo varchar(225),
		emp_modified_date timestamp,
		emp_emp_id integer,
		emp_joro_id integer,
		emp_user_id integer
		
)
AS $$
BEGIN
    RETURN QUERY SELECT u.user_full_name, e.* FROM humanresource.employee e
	JOIN users.users u ON e.emp_user_id = u.user_id
	ORDER BY e.emp_id ASC
	;

END; $$ 
LANGUAGE 'plpgsql';

-- INSERT EMPLOYEE
CREATE OR REPLACE PROCEDURE humanresource.insertemployee(
	in emp_national_id varchar(25), 
	in emp_birth_date timestamp,
	in emp_marital_status varchar(1),
	in emp_gender varchar(1),
	in emp_hire_date timestamp,
	in emp_salaried_flag varchar(1),
	in emp_vacation_hours integer,
	in emp_sickleave_hours integer,
	in emp_current_flag integer,
	in emp_photo varchar(225),
	in emp_emp_id integer,
	in emp_joro_id integer,
	in ephi_rate_salary integer,
	in ephi_pay_frequence integer,
	in edhi_start_date timestamp,
	in edhi_end_date timestamp,
	in edhi_dept_id integer,
	in edhi_shift_id integer,
	in user_id integer
)
LANGUAGE plpgsql
AS $$
DECLARE
  emp_id integer;
  woro_id integer;
	
BEGIN

	INSERT INTO humanresource.employee 
	(emp_national_id, emp_birth_date, emp_marital_status, emp_salaried_flag,
	emp_vacation_hours, emp_joro_id, emp_hire_date, emp_gender,
	emp_current_flag, emp_sickleave_hours, emp_photo, emp_modified_date, emp_emp_id, emp_user_id) VALUES 
	(emp_national_id, emp_birth_date, emp_marital_status, emp_salaried_flag,
	emp_vacation_hours, emp_joro_id, emp_hire_date, emp_gender,
	emp_current_flag, emp_sickleave_hours, emp_photo, now(), 1, user_id)  
	RETURNING humanresource.employee.emp_id INTO emp_id;
	
	INSERT INTO humanresource.work_orders( woro_start_date, woro_user_id) 
	VALUES (now(), user_id) RETURNING humanresource.work_orders.woro_id INTO woro_id;
	
	INSERT INTO humanresource.work_order_detail( wode_emp_id, wode_woro_id)
	VALUES (emp_id, woro_id );
	
	INSERT INTO humanresource.employee_pay_history(ephi_emp_id,	ephi_rate_change_date ,ephi_rate_salary, ephi_pay_frequence)
	VALUES(emp_id, now(), ephi_rate_salary, ephi_pay_frequence);
	
	INSERT INTO humanresource.employee_department_history(edhi_emp_id, edhi_start_date, edhi_end_date, edhi_dept_id, edhi_shift_id)
	VALUES(emp_id, edhi_start_date, edhi_end_date, edhi_dept_id, edhi_shift_id);
END;
$$;

-- UPDATE EMPLOYEE
CREATE OR REPLACE PROCEDURE humanresource.updateemployee(
	in input_emp_birth_date timestamp,
	in input_emp_marital_status varchar(1),
	in input_emp_gender varchar(1),
	in input_emp_hire_date timestamp,
	in input_emp_salaried_flag varchar(1),
	in input_emp_vacation_hours integer,
	in input_emp_sickleave_hours integer,
	in input_emp_current_flag integer,
	in input_emp_photo varchar(225),
	in input_emp_emp_id integer,
	in input_emp_joro_id integer,
	in input_emp_user_id integer,
	in input_emp_id integer
)
LANGUAGE plpgsql
AS $$
DECLARE

BEGIN

	UPDATE humanresource.employee SET 
	emp_birth_date = input_emp_birth_date, 
	emp_marital_status = input_emp_marital_status, 
	emp_gender = input_emp_gender,
	emp_hire_date = input_emp_hire_date, 
	emp_salaried_flag = input_emp_salaried_flag,
	emp_vacation_hours = input_emp_vacation_hours,
	emp_sickleave_hours = input_emp_sickleave_hours, 
	emp_current_flag = input_emp_current_flag, 
	emp_photo = input_emp_photo, 
	emp_emp_id = input_emp_emp_id,
	emp_joro_id = input_emp_joro_id, 
	emp_user_id = input_emp_user_id,
	emp_modified_date = now()
	WHERE humanresource.employee.emp_id = input_emp_id;
END;
$$;

-- GET EMPLOYEE PAY HISTORY
CREATE OR REPLACE FUNCTION humanresource.getAllEmployeePayHistory (in input_emp_id integer) 
    RETURNS TABLE (
    ephi_emp_id integer,
	ephi_rate_change_date timestamp,
	ephi_rate_salary money,
	ephi_pay_frequence smallint,
	ephi_modified_date timestamp
		
)
AS $$
BEGIN
    RETURN QUERY SELECT eph.* FROM humanresource.employee_pay_history eph
	JOIN humanresource.employee e ON e.emp_id = eph.ephi_emp_id
	WHERE eph.ephi_emp_id = input_emp_id
	;

END; $$ 
LANGUAGE 'plpgsql';

-- GET EMPLOYEE DEPARTMENT HISTORY
CREATE OR REPLACE FUNCTION humanresource.getAllEmployeeDepartmentHistory (in input_emp_id integer) 
    RETURNS TABLE (
    edhi_start_date timestamp,
	edhi_end_date timestamp,   
	dept_name varchar(50)
)
AS $$
BEGIN
    RETURN QUERY SELECT edh.edhi_start_date, edh.edhi_end_date, d.dept_name 
	FROM humanresource.employee_department_history edh 
	JOIN humanresource.department d ON edh.edhi_dept_id = d.dept_id
	WHERE edh.edhi_emp_id = input_emp_id
	;

END; $$ 
LANGUAGE 'plpgsql';

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


create or replace function purchasing.getPO()
returns table(
	poheid int,
	ponumber varchar,
	orderdate date,
	vendortarget varchar,
	linetotal bigint,
	totalamount money,
	pohestatus int
)
 as $$
 	begin
		return query
			SELECT distinct pohe_id, pohe_number, pohe_order_date, vendor_name, count( pode_order_qty) line_total, pohe_total_amount, pohe_status
			from purchasing.purchase_order_header pohe
			join purchasing.purchase_order_detail pode on pohe.pohe_id = pode.pode_pohe_id
			join purchasing.vendor vend on pohe.pohe_vendor_id = vend.vendor_entity_id
			group by pohe_id, vendor_name
			order by pohe_number;
		end;$$
		language plpgsql;
		
create or replace function purchasing.getVendorProductId ()
returns table(
	vendId int,
	stockName varchar,
	stockQuantity int,
	stockRemain int,
	stockPrice money
) as $$

	declare 
		search_cursor cursor
			for select vend.vendor_entity_id, sto.stock_name, venpro.vepro_qty_stocked,venpro.vepro_qty_remaining, venpro.vepro_price
				from purchasing.vendor_product venpro
				join purchasing.stocks sto on venpro.vepro_stock_id = sto.stock_id
				join purchasing.vendor vend on venpro.vepro_vendor_id = vend.vendor_entity_id
				group by vend.vendor_entity_id, sto.stock_name ,venpro.vepro_id
				order by sto.stock_name asc;
				
	begin
		open search_cursor;
		loop
			fetch next from search_cursor into
				vendId,
				stockName,
				stockQuantity,
				stockRemain,
				stockPrice;
			exit when not found;
			return next;
		end loop;
		
		close search_cursor;
	
	end;$$
	language plpgsql;
	
	
create or replace function purchasing.getPurchaseOrderNumber (transactionid int, inputDate text default now() )
returns text 
	as $$
		begin
			return concat('PO-',to_char(inputDate::date,'YYYYMMDD'),'-',TO_CHAR(transactionid,'000'));
		end;$$
	language plpgsql;
	

create or replace procedure  purchasing.purchaseOrder (
	subtotal int,
	tax int,
	total int,
	vendor_id int
)
as $$
	declare
	
		header_id integer := (select coalesce (max(pohe_id), 1)from purchasing.purchase_order_header);
		purchasingNumber text := purchasing.getPurchaseOrderNumber(header_id,'now');
		
	begin
		insert into purchasing.purchase_order_header(pohe_number,
													 pohe_status,
													 pohe_order_date,
													 pohe_subtotal, 
													 pohe_tax, 
													 pohe_total_amount, 
													 pohe_vendor_id)
		values (purchasingNumber,
				1,
				now(),
				subtotal,
				tax,
				total,
				vendor_id);
	end;$$
	language plpgsql;

create or replace procedure purchasing.insertVendorProduct(
	stocks_name varchar,
	product_quantity int,
	product_remaining int,
	product_price int,
	id_vendor int
)
	language plpgsql
	as $$
		declare
			vendor_id int;
			stocks_id int;
		begin
			insert into purchasing.stocks(stock_name,stock_quantity,stock_reorder_point)
			values (stocks_name, 0,0)
			
			returning stock_id into stocks_id;
			
			insert into purchasing.vendor_product(vepro_qty_stocked,vepro_qty_remaining, vepro_price, vepro_stock_id, vepro_vendor_id)
			values (product_quantity,product_remaining,product_price,stocks_id,id_vendor);
			
		end;$$;

create or replace function purchasing.purchaseorderdetail()
returns table(
	podeid int,
	stockname varchar,
	stockquantity int,
	stockprice money,
	receiveqty int,
	rejectqty int,
	linetotal money
)
as $$
	begin
		return query
			select pode_id, stock_name, pode_order_qty, pode_price, pode_received_qty, pode_rejected_qty, pode_line_total
			from purchasing.purchase_order_detail pode
			join purchasing.stocks stock on pode.pode_stock_id = stock.stock_id
			group by pode_id, stock_name
			order by pode_id;
		end;$$
		language plpgsql;

create or replace procedure purchasing.purchaseOrderinsert(
	vendor_id int,
	subtotal int,
	tax int,
	amount int,
	stockquantity int[],
	stockprice int[],
	stocklinetotal int[],
	stocksid int[]
)
as $$
	declare
		head_id int := (select coalesce (max(pohe_id),1) from purchasing.purchase_order_header);
		headers_id integer;
		purchasing_number text := purchasing.getPurchaseOrderNumber(head_id, 'now');
		i int;
	begin 
		insert into purchasing.purchase_order_header(pohe_number, pohe_status, pohe_order_date, pohe_subtotal, pohe_tax, pohe_total_amount, pohe_vendor_id)
		values (purchasing_number,1, 'now',subtotal,tax,amount,vendor_id)
		
		returning pohe_id into headers_id;
		
		for i in 1..array_length(stocksid, 1) loop
			insert into purchasing.purchase_order_detail(pode_pohe_id, pode_order_qty, pode_price, pode_line_total, pode_stock_id)
			values(headers_id, stockquantity[i], stockprice[i], stocklinetotal[i],stocksid[i]);
			end loop;
	end;$$
	language plpgsql;

	
create or replace function purchasing.getstockdetail()
returns table(
	detailid int,
	stockid int,
	stodbarcode text,
	stodstatus int,
	stod_notes text,
	ponumber text,
	faciloc text
)
language plpgsql
as $$
	begin
		return
		query
			select stod_id, stod_stock_id, stod_barcode_number,stod_status,stod_notes,pohe_number,faci_name
			from purchasing.stock_detail stod
			join purchasing.purchase_order_header pohe on stod.stod_pohe_id = pohe.pohe_id
			join hotel.facilities faci on stod.stod_faci_id = faci.faci_id;

		end;$$;

----------------------------------------------------------- PAYMENT ------------------------------------------------------------------
-- USER'S PAYMENT METHOD
---- Columns:
---- - userId
---- - fullName
---- - paymentType
---- - paymentName
---- - accountNumber
---- - cardHolderName
---- - balance
---- - expMonth
---- - expYear
---- - securedKey

CREATE VIEW payment.user_payment_methods
AS (
	SELECT
		acc.usac_user_id 	"userId",
		u.user_full_name 	"fullName",
		acc.usac_type		"paymentType",
		(
			CASE
				WHEN acc.usac_type <> 'Fintech'
				THEN b.bank_name
			ELSE
				dr.paga_name
			END
		) AS "paymentName",
		acc.usac_account_number		"accountNumber",
		acc.usac_card_holder_name	"cardHolderName",
		acc.usac_saldo				"balance",
		acc.usac_expmonth			"expMonth",
		acc.usac_expyear			"expYear",
		acc.usac_secured_key		"securedKey"
	FROM payment.user_accounts acc
	LEFT JOIN payment.payment_gateaway dr on acc.usac_entity_id = dr.paga_entity_id
	LEFT JOIN payment.bank b on acc.usac_entity_id = b.bank_entity_id
	LEFT JOIN users.users u on acc.usac_user_id = u.user_id
);

-----------------------------------------------------------------------

-- USER'S TRANSACTIONS
---- Columns:
---- - transactionId
---- - transactionNumber
---- - trxDate (DD Mon YYYY)
---- - trxTime (HH:MI AM|PM)
---- - status
---- - debit
---- - credit
---- - transactionType
---- - transactionNote
---- - orderNumber
---- - sourceNumber (issuer account number)
---- - sourcePaymentName (issuer payment account type)
---- - targetNumber (beneficiary account number)
---- - targetPaymentName (beneficiary payment account type)
---- - transactionRef (transaction's reference number)
---- - userId
---- - userFullName

CREATE OR REPLACE VIEW payment.user_transactions AS (
	SELECT 
		p.patr_id 				"transactionId",
		p.patr_trx_number 		"transactionNumber",
		TO_CHAR(patr_modified_date, 'DD Mon YYYY') "trxDate",
		TO_CHAR(patr_modified_date, 'HH12:MI AM') "trxTime",
		(
			CASE
				WHEN p.patr_type = 'ORM'
				THEN (
					SELECT orme_is_paid
					FROM resto.order_menus
					WHERE orme_order_number = p.patr_order_number
				)
				WHEN p.patr_type = 'TRB'
				THEN (
					SELECT boor_is_paid
					FROM booking.booking_orders
					WHERE boor_order_number = p.patr_order_number
				)
				ELSE 'Completed'
			END
		) AS "status",
		p.patr_debet			"debit",
		p.patr_credit			"credit",	
		p.patr_type				"transactionType",
		p.patr_note				"transactionNote",
		p.patr_order_number		"orderNumber",
		p.patr_source_id		"sourceNumber",
		(
			-- TODO: Tambahin buat outside Top Up & Orders
			SELECT "paymentName"
			FROM payment.user_payment_methods
			WHERE "accountNumber" = p.patr_source_id::text
		) "sourcePaymentName",
		p.patr_target_id		"targetNumber",
		(
			-- TODO: Tambahin buat outside Top Up & Orders
			CASE
				WHEN p.patr_type = 'TP'
				THEN (
					SELECT "paymentName" 
					FROM payment.user_payment_methods
					WHERE "accountNumber" = p.patr_target_id::text
					)
				ELSE 'Realta Group'
			END
		) "targetPaymentName",
		p.patr_trx_number_ref	"transactionRef",
		p.patr_user_id			"userId",
		u.user_full_name		"userFullName",
		p.patr_modified_date	"timestamp"
	FROM payment.payment_transaction p
	JOIN users.users u ON u.user_id = p.patr_user_id
);

-----------------------------------------------------------------------

-- RESTO ORDER PER FACILITY AND HOTEL
---- Columns:
---- - orderNumber
---- - orderMenuDetailId
---- - totalAmount
---- - paymentType
---- - cardNumber
---- - isPaid
---- - restaurantName
---- - facilityName
---- - hotelName

SELECT 
	o.orme_order_number		"orderNumber",
    d.omde_id				"orderMenuDetailId",
    o.orme_total_amount		"totalAmount",
    o.orme_pay_type			"paymentType",
    o.orme_cardnumber		"cardNumber",
    o.orme_is_paid			"isPaid",
    m.reme_name				"restaurantName",
    f.faci_name				"facilityName",
    h.hotel_name			"hotelName"
	FROM resto.order_menu_detail d
	JOIN resto.order_menus o ON o.orme_id = d.omde_orme_id
	JOIN resto.resto_menus m ON m.reme_id = d.omde_reme_id
	JOIN hotel.facilities f ON f.faci_id = m.reme_faci_id
	JOIN hotel.hotels h ON f.faci_hotel_id = h.hotel_id
ORDER BY o.orme_id;

--------------------------------------------------------------------------------------------------------------------

CREATE VIEW booking.getBookingInvoice 
AS 
 SELECT users.user_id,
    users.user_full_name,
    users.user_phone_number,
    usme.usme_memb_name,
    usme.usme_promote_date,
    usme.usme_points,
    usme.usme_type,
    boor.boor_id,
    boor.boor_order_number,
    boor.boor_order_date,
    boor.boor_is_paid,
    boor.boor_pay_type,
    boor.boor_total_room,
    boor.boor_total_amount,
    boor.boor_status,
    borde.borde_checkin,
    borde.borde_checkout,
    borde.borde_adults,
    borde.borde_kids,
    borde.borde_price,
    borde.borde_discount,
    borde.borde_subtotal,
    boex.boex_id,
    boex.boex_price,
    boex.boex_subtotal,
    prit.prit_name,
    hotel.hotel_name,
    faci.faci_name
   FROM users.users users
     JOIN users.user_members usme ON users.user_id = usme.usme_user_id
     JOIN booking.booking_orders boor ON users.user_id = boor.boor_user_id
     JOIN booking.booking_order_detail borde ON boor.boor_id = borde.border_boor_id
     JOIN booking.booking_order_detail_extra boex ON borde.borde_id = boex.boex_id
     JOIN master.price_items prit ON boex.boex_prit_id = prit.prit_id
     JOIN hotel.hotels hotel ON boor.boor_id = hotel.hotel_id
     JOIN hotel.facilities faci ON borde.borde_faci_id = faci.faci_id
  WHERE usme.usme_type::text = 'default'::text;

--view hotel 
    CREATE VIEW hotel.card_hotel AS 
	 SELECT h.hotel_id,
    h.hotel_name,
    h.hotel_description,
    h.hotel_rating_star,
    h.hotel_phonenumber,
    faci_group.faci_hotelall,
    faci_group_lprice.faci_lowprice,
    faci_group_hprice.faci_hightprice,
    string_agg(photo_hotel.url::text, ','::text) AS url,
    alamat.provices,
    alamatcity.city,
    addrees.place,
    faci_room_group.faci_hotelroom
   FROM hotel.hotels h
     JOIN ( SELECT facilities.faci_hotel_id,
            string_agg(facilities.faci_name::text, ', '::text) AS faci_hotelall
           FROM hotel.facilities
          GROUP BY facilities.faci_hotel_id) faci_group ON h.hotel_id = faci_group.faci_hotel_id
     JOIN ( SELECT facilities.faci_hotel_id,
            string_agg(concat(' ', facilities.faci_low_price), '- '::text) AS faci_lowprice
           FROM hotel.facilities
          WHERE facilities.faci_cagro_id = 2
          GROUP BY facilities.faci_hotel_id) faci_group_lprice ON h.hotel_id = faci_group_lprice.faci_hotel_id
     JOIN ( SELECT facilities.faci_hotel_id,
            string_agg(concat(' ', facilities.faci_hight_price), '- '::text) AS faci_hightprice
           FROM hotel.facilities
          WHERE facilities.faci_cagro_id = 2
          GROUP BY facilities.faci_hotel_id) faci_group_hprice ON h.hotel_id = faci_group_hprice.faci_hotel_id
     JOIN ( SELECT f.faci_hotel_id AS hotel_id,
            f.faci_cagro_id,
            f.faci_name,
            ph.fapho_url AS url,
            ph.fapho_primary
           FROM hotel.facility_photos ph
             JOIN hotel.facilities f ON ph.fapho_faci_id = f.faci_id
          WHERE ph.fapho_primary = '1'::"bit" AND f.faci_cagro_id = 2) photo_hotel ON h.hotel_id = photo_hotel.hotel_id
     JOIN ( SELECT facilities.faci_hotel_id,
            string_agg(facilities.faci_name::text, ', '::text) AS faci_hotelroom
           FROM hotel.facilities
          WHERE facilities.faci_cagro_id = 2
          GROUP BY facilities.faci_hotel_id) faci_room_group ON h.hotel_id = faci_room_group.faci_hotel_id
     JOIN ( SELECT a.addr_id AS hotel_prov_id,
            p.prov_name AS provices
           FROM master.address a
             JOIN master.provinces p ON a.addr_prov_id = p.prov_id
             JOIN master.country c ON p.prov_country_id = c.country_id
             JOIN master.regions r ON r.region_code = c.country_region_id) alamat ON h.hotel_addr_id = alamat.hotel_prov_id
     JOIN ( SELECT a.addr_id AS hotel_city_id,
            a.addr_line2 AS city
           FROM master.address a
             JOIN master.provinces p ON a.addr_prov_id = p.prov_id
             JOIN master.country c ON p.prov_country_id = c.country_id
             JOIN master.regions r ON r.region_code = c.country_region_id) alamatcity ON h.hotel_addr_id = alamatcity.hotel_city_id
     JOIN ( SELECT a.addr_id AS hotel_addr_id,
            concat(a.addr_line1, ' ', a.addr_line2, ' ', p.prov_name, ' ', c.country_name, ' ', r.region_name) AS place
           FROM master.address a
             JOIN master.provinces p ON a.addr_prov_id = p.prov_id
             JOIN master.country c ON p.prov_country_id = c.country_id
             JOIN master.regions r ON r.region_code = c.country_region_id) addrees ON h.hotel_addr_id = addrees.hotel_addr_id
  GROUP BY h.hotel_id, faci_group.faci_hotelall, faci_group_lprice.faci_lowprice, faci_group_hprice.faci_hightprice, alamat.provices, alamatcity.city, addrees.place, faci_room_group.faci_hotelroom;


    CREATE VIEW hotel.user_review AS
	select hr.hore_hotel_id, u.user_full_name, u.user_email, hr.hore_user_review, hr.hore_created_on, hr.hore_rating
  	from hotel.hotel_reviews hr
	join users.users u
	on hr.hore_user_id = u.user_id;


-- procedur faci all hotel

    CREATE VIEW hotel.faci_allhotel AS
	select *
	from hotel.hotels h join hotel.facilities f 
	on h.hotel_id = f.faci_hotel_id
	join (select fapho_faci_id, string_agg(fapho_url,',')as fapho_url
			from hotel.facility_photos group by fapho_faci_id) fap
	on f.faci_id = fap.fapho_faci_id
	where faci_cagro_id = 2;


-- end

CREATE OR REPLACE PROCEDURE booking.InsertBooking(
    p_boor_user_id int,
    p_boor_hotel_id int,
    p_boor_order_number varchar (20),
    p_boor_order_date date,
    p_boor_arrival_date date,
    p_boor_total_room smallInt,
    p_boor_total_guest smallInt,
    p_boor_discount int,
    p_boor_total_tax int,
    p_boor_total_amount  int,
    p_boor_down_payment  int,
    p_boor_pay_type  varchar (2),
    p_boor_is_paid  varchar (2), 
    p_boor_type  varchar (15),
    p_boor_cardnumber varchar (25),
    p_boor_member_type varchar (15),
    p_boor_status varchar (15),
    p_borde_checkin date,
    p_borde_Checkout date,
    p_borde_adults int,
    p_borde_kids int,
    p_borde_price int,
    p_borde_extra int,
    p_borde_discount int,
    p_borde_tax int,
    p_borde_subtotal int,
    p_borde_faci_id int,
	p_soco_spof_id int
)
LANGUAGE plpgsql
AS $$
DECLARE 
    boor_id_val int; --Tambah ini
	borde_id_val int;
	cur_date date := p_borde_checkin;
BEGIN
    INSERT INTO booking.booking_orders(
        boor_user_id,
        boor_hotel_id,
        boor_order_number,
        boor_order_date,
        boor_arrival_date,
        boor_total_room,
        boor_total_guest,
        boor_discount,
        boor_total_tax,
        boor_total_amount,
        boor_down_payment,
        boor_pay_type,
        boor_is_paid,
        boor_type,
        boor_cardnumber,
        boor_member_type,
        boor_status
    )
    VALUES (
        p_boor_user_id,
        p_boor_hotel_id,
        p_boor_order_number,
        p_boor_order_date,
        p_boor_arrival_date,
        p_boor_total_room,
        p_boor_total_guest,
        p_boor_discount,
        p_boor_total_tax,
        p_boor_total_amount,
        p_boor_down_payment,
        p_boor_pay_type,
        p_boor_is_paid,
        p_boor_type,
        p_boor_cardnumber,
        p_boor_member_type,
        p_boor_status
    )RETURNING boor_id INTO boor_id_val; --Tambah Ini

    INSERT INTO booking.booking_order_detail(
        border_boor_id,
        borde_faci_id,
        borde_checkin,
        borde_checkout,
        borde_adults,
        borde_kids,
        borde_price,
        borde_extra,
        borde_discount,
        borde_tax,
        borde_subtotal
    )
    VALUES (
        boor_id_val,
        p_borde_faci_id,
        p_borde_checkin,
        p_borde_Checkout,
        p_borde_adults,
        p_borde_kids,
        p_borde_price,
        p_borde_extra,
        p_borde_discount,
        p_borde_tax,
        p_borde_subtotal
    )RETURNING borde_id INTO borde_id_val;
	
	INSERT INTO booking.special_offer_coupons(
		soco_borde_id,
		soco_spof_id
	)
	VALUES (
		borde_id_val,
		p_soco_spof_id
	);
	
	WHILE cur_date < p_borde_checkout LOOP
        cur_date := cur_date + 1;
		INSERT INTO booking.user_breakfeast(
            usbr_borde_id,
            usbr_modified_date,
            usbr_total_vacant
        )
        VALUES (
            borde_id_val,
            cur_date,
            p_boor_total_guest
        );
    END LOOP;
COMMIT;
END;$$
;
CREATE OR REPLACE FUNCTION purchasing.getphotoforstocks(
	)
    RETURNS TABLE(stocksid integer, stockname character varying, stockdesc character varying, photourl character varying, stockedqty integer, stockreorder integer, stockprice character varying, vendorid integer, vendorname character varying) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
 	declare
		stock_cursor cursor
			for select distinct sto.stock_id, sto.stock_name, sto.stock_description, spho.spho_url,vepro.vepro_qty_stocked,sto.stock_reorder_point, vepro.vepro_price, vepro.vepro_vendor_id, vend.vendor_name 
				from purchasing.stocks sto
				full join purchasing.stock_photo spho on sto.stock_id = spho.spho_stock_id
				full join purchasing.vendor_product vepro on sto.stock_id = vepro.vepro_stock_id
				full join purchasing.vendor vend on vepro.vepro_vendor_id = vend.vendor_entity_id
				where spho.spho_primary = '1'
				group by sto.stock_id, sto.stock_name, spho.spho_url, vepro.vepro_qty_stocked, vepro.vepro_price, vepro.vepro_vendor_id, vend.vendor_name;
	
	begin
		open stock_cursor;
			loop
				fetch next from stock_cursor into
					stocksId,
					stockname,
					stockDesc,
					photoUrl,
					stockedqty,
					stockreorder,
					stockprice,
					vendorid,
					vendorname;
				exit when not found;
				return next;
			end loop;
			close stock_cursor;
			end;
$BODY$;

		
