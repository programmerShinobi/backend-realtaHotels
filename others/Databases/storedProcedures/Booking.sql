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