CREATE VIEW payment.user_payment_methods
AS (
	SELECT
		acc.usac_user_id 	userID,
		u.user_full_name 	fullName,
		acc.usac_type		paymentType,
		(
			CASE
				WHEN acc.usac_type <> 'Dompet Realta'
				THEN b.bank_name
			ELSE
				dr.paga_name
			END
		) AS "paymentName",
		acc.usac_account_number		accountNumber,
		acc.usac_card_holder_name			cardHolderName,
		acc.usac_saldo				balance,
		acc.usac_expmonth			expMonth,
		acc.usac_expyear			expYear
	FROM payment.user_accounts acc
	LEFT JOIN payment.payment_gateaway dr on acc.usac_entity_id = dr.paga_entity_id
	LEFT JOIN payment.bank b on acc.usac_entity_id = b.bank_entity_id
	LEFT JOIN users.users u on acc.usac_user_id = u.user_id
)

-- View: Order menu + facility name + hotel name
CREATE VIEW hotel.order_per_faci_and_hotel
AS (
	SELECT
		o.orme_order_number,
		d.omde_id,
		o.orme_total_amount,
		o.orme_pay_type,
		o.orme_cardnumber,
		o.orme_is_paid,
		m.reme_name,
		f.faci_name,
		h.hotel_name
	FROM resto.order_menu_detail d
	JOIN resto.order_menus o ON o.orme_id = d.omde_orme_id
	JOIN resto.resto_menus m ON m.reme_id = d.omde_reme_id
	JOIN hotel.facilities f ON f.faci_id = m.reme_faci_id
	JOIN hotel.hotels h ON f.faci_hotel_id = h.hotel_id
	ORDER BY o.orme_id
)