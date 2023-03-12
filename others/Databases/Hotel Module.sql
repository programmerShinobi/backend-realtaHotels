create schema hotel;

create table hotel.facilities(
faci_id serial,
	faci_name varchar(155),
	faci_description varchar(255),
	faci_max_number int,
	faci_measure_unit varchar(15),
	faci_room_number varchar(6) unique,
	faci_startdate timestamp,
	faci_endate timestamp,
	faci_low_price money,
	faci_hight_price money,
	faci_rate_price money,
	faci_discount money,
	faci_tax_rate money,
	faci_modified_date timestamp,
	faci_cagro_id int,
	faci_hotel_id int,
	constraint faci_id_pk primary key (faci_id),
	constraint fk_faci_cagro_id foreign key(faci_cagro_id)references master.category_group(cagro_id),
	constraint fk_faci_hotel_id foreign key(faci_hotel_id)references hotel.hotels(hotel_id)
);


create table hotel.facility_photos(
	fapho_faci_id int,
	fapho_id serial,
	fapho_thumbnail_filename varchar(50),
	fapho_photo_filename varchar(50),
	fapho_primary bit,
	fapho_url varchar(255),
	fapho_modifield_date timestamp,
	constraint facility_photos_pk primary key(fapho_faci_id,fapho_id),
	constraint fk_fapho_faci_id foreign key(fapho_faci_id)references hotel.facilities(faci_id)
);



create table hotel.facility_price_history(
	faph_faci_id int,
	faph_id serial,
	faph_startdate timestamp,
	faph_enddate timestamp,
	faph_low_price money,
	faph_high_price money,
	faph_discount money,
	faph_tax_rate money,
	faph_modified_date timestamp,
	faph_user_id int,
	constraint facility_price_history_pk primary key(faph_faci_id,faph_id),
	constraint fk_faph_faci_id foreign key (faph_faci_id)references hotel.facilities(faci_id),
	constraint fk_user_faci_id foreign key (faph_user_id)references users.users(user_id)

);

create table hotel.hotels(
hotel_id serial,
	hotel_name varchar(85),
	hotel_description varchar(500),
	hotel_rating_star smallint,
	hotel_phonenumber varchar(25),
	hotel_modified_date timestamp,
	hotel_addr_id int,
	constraint hotel_id_pk primary key (hotel_id),
	constraint fk_hotel_addr_id foreign key (hotel_addr_id)references master.address(addr_id)
);


create table hotel.hotel_reviews(
hore_id serial,
	hore_user_review varchar(125),
	hore_rating bit,
	hore_created_on timestamp,
	hore_user_id int,
	hore_hotel_id int,
	constraint hore_id_pk primary key (hore_id),
	constraint fk_hore_user_id foreign key (hore_user_id)references users.users(user_id),
	constraint fk_hore_hotel_id foreign key (hore_hotel_id)references hotel.hotels(hotel_id)
);
