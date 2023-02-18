create schema booking;

create table booking.special_offers (
	spof_id serial,
	spof_name varchar(55),
	spof_description varchar(255),
	spof_type varchar(50),
	spof_discount money,
	spof_start_date timestamp,
	spof_end_date timestamp,
	spof_min_qty int,
	spof_max_qty int,
	spof_modified_date timestamp,
	constraint pk_spof_id primary key (spof_id)
);

create table booking.booking_order_detail(
	border_boor_id int unique,
	borde_id serial unique,
	borde_checkin timestamp,
	borde_checkout timestamp,
	borde_adults int,
	borde_kids int,
	borde_price money,
	borde_extra money,
	borde_discount money,
	borde_tax money,
	borde_subtotal money,
	borde_faci_id int,
	constraint pk_boor_borde_id primary key (border_boor_id, borde_id),
	constraint fk_borde_faci_id foreign key (borde_faci_id) references hotel.facilities(faci_id) on delete cascade on update cascade
);


create table booking.special_offer_coupons(
	soco_id serial,
	soco_borde_id int,
	soco_spof_id int,
	constraint pk_soco_id primary key (soco_id),
	constraint fk_soco_borde_id foreign key (soco_borde_id) references booking.booking_order_detail(borde_id) on delete cascade on update cascade, 
	constraint fk_soco_spof_id foreign key (soco_spof_id) references booking.special_offers(spof_id) on delete cascade on update cascade
);

create table booking.user_breakfeast(
	usbr_borde_id int,
	usbr_modified_date timestamp,
	usbr_total_vacant smallInt,
	
	constraint pk_borde_modified_id primary key (usbr_borde_id, usbr_modified_date),
	constraint fk_usbr_borde_id foreign key (usbr_borde_id) references booking.booking_order_detail(borde_id) on delete cascade on update cascade
);

create table booking.booking_order_detail_extra(
	boex_id serial,
	boex_price money,
	boex_qty smallInt,
	boex_subtotal money,
	boex_measure_unit varchar(50),
	boex_borde_id int,
	boex_prit_id int,
	constraint pk_boex_id primary key (boex_id),
	constraint fk_boex_borde_id foreign key (boex_borde_id) references booking.booking_order_detail(borde_id) on delete cascade on update cascade,
	constraint fk_boex_prit_id foreign key (boex_prit_id) references master.price_items(prit_id) on delete cascade on update cascade
);


create table booking.booking_orders(
	boor_id serial,
	boor_order_number varchar(20) unique,
	boor_order_date timestamp,
	boor_arrival_date timestamp,
	boor_total_room smallInt,
	boor_total_guest smallInt,
	boor_discount money,
	boor_total_tax money,
	boor_total_amount money,
	boor_down_payment money,
	boor_pay_type char(2),
	boor_is_paid char(2),
	boor_type varchar(15),
	boor_cardnumber varchar(25),
	boor_member_type varchar(15),
	boor_status varchar(15),
	boor_user_id int,
	boor_hotel_id int,

	constraint pk_boor_id primary key (boor_id),
	constraint fk_boor_user_id foreign key (boor_user_id) references users.users(user_id) on delete cascade on update cascade,
	constraint fk_boor_hotel_id foreign key (boor_hotel_id) references hotel.hotels(hotel_id) on delete cascade on update cascade
);

