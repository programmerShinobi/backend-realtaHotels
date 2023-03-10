CREATE VIEW booking.getBookingInvoice 
AS 
SELECT users.user_id, 
users.user_full_name, 
users.user_phone_number, 
usme.usme_memb_name, 
usme.usme_promote_date, 
usme.usme_points,
boor.boor_id,
boor.boor_order_number,
boor.boor_order_date,
boor.boor_is_paid,
boor.boor_pay_type,
boor.boor_total_room,
boor.boor_total_amount,
borde.borde_checkin,
borde.borde_checkout,
borde.borde_adults,
borde.borde_kids,
borde.borde_price,
borde.borde_discount,
borde.borde_subtotal,
hotels.hotel_name,
faci.faci_name,
patr.patr_id,
patr.patr_modified_date,
(
	select "sourcePaymentName"
	from payment.user_transactions
	where "orderNumber" = boor.boor_order_number
) "payment_Type",
(
	CASE
	WHEN boor.boor_is_paid = 'P'
	THEN 'Paid'
	WHEN boor.boor_is_paid = 'DP'
	THEN 'Down Payment'
	WHEN boor.boor_is_paid = 'R'
	THEN 'Refund'
	END
) AS "boor_paid"
FROM users.users users
JOIN users.user_members usme
ON users.user_id = usme.usme_user_id
JOIN booking.booking_orders boor
ON users.user_id = boor.boor_user_id
JOIN booking.booking_order_detail borde
ON boor.boor_id = borde.border_boor_id
JOIN hotel.facilities faci
ON borde.borde_faci_id = faci.faci_id
JOIN hotel.hotels hotels
ON boor.boor_hotel_id = hotels.hotel_id
JOIN payment.payment_transaction patr
ON boor.boor_order_number = patr.patr_order_number


