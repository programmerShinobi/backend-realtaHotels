-- create database hotel_realta
-- ===========SCHEMA MODULE MASTER ==============
create schema master;
-- Regions Table
create table master.regions(
	region_code serial,
	region_name varchar(35) unique,
	constraint region_code_pk primary key (region_code)
);

-- country table
create table master.country(
	country_id serial,
	country_name varchar(55) unique,
	country_region_id int,
	constraint country_id_pk primary key (country_id),
	constraint country_region_id_fk foreign key (country_region_id) references master.regions (region_code)
);

-- provinces table
create table master.provinces(
	prov_id serial,
	prov_name varchar(85),
	prov_country_id int,
	constraint prov_id_pk primary key (prov_id),
	constraint prov_country_id_fk foreign key (prov_country_id) references master.country (country_id)
);

-- address table 
create table master.address(
	addr_id serial,
	addr_line1 varchar(225),
	addr_line2 varchar(225),
	addr_postal_code varchar(5),
	addr_spatial_location json,
	addr_prov_id int,
	constraint addr_id primary key (addr_id),
	constraint addr_prov_id_fk foreign key (addr_prov_id) references master.provinces (prov_id)
);

-- category_grup table
create table master.category_group(
	cagro_id serial,
	cagro_name varchar(25) unique,
	cagro_description varchar (255),
	cagro_type varchar(25),
	cagro_icon varchar(255),
	cagro_icon_url varchar(255),
	constraint cagro_id_pk primary key (cagro_id)
);


-- policy table
create table master.policy(
	poli_id serial,
	poli_name varchar(55),
	poli_description varchar(255),
	constraint poli_id_pk primary key (poli_id)
);

-- policy_category_group

create table master.policy_category_group(
	poca_poli_id serial PRIMARY KEY,
	poca_cagro_id int,
	constraint poca_poli_id_fk foreign key (poca_poli_id) references master.policy (poli_id),
	constraint poca_cagro_id_fk foreign key (poca_cagro_id) references master.category_group (cagro_id)

);


-- price_items
create table master.price_items(
	prit_id serial,
	prit_name varchar(55) unique,
	prit_price money,	
	prit_description varchar (255),
	prit_type varchar(25),
	prit_modified_date timestamp DEFAULT now(),
	constraint prit_id_pk primary key (prit_id)
);

-- members table

create table master.members(
	memb_name varchar(15),
	memb_description varchar(100),
	constraint memb_name primary key (memb_name)
);

-- service_task table
create table master.service_task(
	seta_id serial,
	seta_name varchar(85) unique,
	seta_seq smallint,
	constraint seta_id_pk primary key(seta_id)
);

-- ===========SCHEMA MODULE USERS ==============
CREATE SCHEMA users;

-- RUN 1

-- CREATE TABLE roles
CREATE TABLE users.roles(
	role_id SERIAL,
	role_name VARCHAR(35),
	CONSTRAINT pk_role_id PRIMARY KEY (role_id)
);

-- CREATE TABLE users
CREATE TABLE users.users(
	user_id SERIAL,
	user_full_name VARCHAR(55),
	user_type VARCHAR(15),
	user_company_name VARCHAR(255),
	user_email VARCHAR(256),
	user_phone_number VARCHAR(25),
	user_isverified INT DEFAULT NULL,
	user_modified_date TIMESTAMP DEFAULT now(),
	CONSTRAINT pk_user_id PRIMARY KEY (user_id),
	CONSTRAINT u_user_phone_number UNIQUE (user_phone_number),
	CONSTRAINT u_user_email UNIQUE (user_email)
);

-- RUN 2
-- CREATE TABLE user_members
CREATE TABLE users.user_members(
	usme_user_id INT PRIMARY KEY,
	usme_memb_name VARCHAR(15),
	usme_promote_date TIMESTAMP,
	usme_points INT,
	usme_type VARCHAR(15),
	CONSTRAINT fk_usme_user_id FOREIGN KEY (usme_user_id)
		REFERENCES users.users(user_id) 
			ON DELETE CASCADE
			ON UPDATE CASCADE,
	CONSTRAINT fk_useme_memb_name FOREIGN KEY (usme_memb_name)
		REFERENCES master.members(memb_name)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- CREATE TABLE user_profiles
CREATE TABLE users.user_profiles(
	uspro_id SERIAL PRIMARY KEY,
	uspro_national_id VARCHAR(20),
	uspro_birth DATE,
	uspro_photo TEXT DEFAULT 'user.png',
	uspro_job_title VARCHAR(50),
	uspro_marital_status CHAR(1),
	uspro_gender CHAR(1),
	uspro_addr_id INT,
	uspro_user_id INT,
	FOREIGN KEY (uspro_addr_id)
		REFERENCES master.address(addr_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE,
	FOREIGN KEY (uspro_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- CREATE TABLE user_roles
CREATE TABLE users.user_roles(
	usro_user_id INT,
	usro_role_id INT,
	CONSTRAINT pk_usro_user_id PRIMARY KEY (usro_user_id),
	CONSTRAINT fk_usro_user_id FOREIGN KEY (usro_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE,
	CONSTRAINT fk_usro_role_id FOREIGN KEY (usro_role_id)
		REFERENCES users.roles(role_id)
			ON DELETE RESTRICT
			ON UPDATE CASCADE
);


-- CREATE TABLE user_password
CREATE TABLE users.user_password(
	uspa_user_id INT PRIMARY KEY,
	uspa_passwordHash VARCHAR(128),
	uspa_passwordSalt VARCHAR(10),
	CONSTRAINT fk_uspa_user_id FOREIGN KEY (uspa_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- CREATE TABLE user_bonus_points
CREATE TABLE users.user_bonus_points(
	ubpo_id SERIAL PRIMARY KEY,
	ubpo_user_id INT,
	ubpo_total_points INT,
	ubpo_bonus_type CHAR(1),
	ubpo_create_on TIMESTAMP,
	FOREIGN KEY (ubpo_user_id)
		REFERENCES users.users(user_id)
			ON DELETE CASCADE
			ON UPDATE CASCADE
);

-- ===========SCHEMA MODULE HOTEL ==============
create schema hotel;

create table hotel.hotels(
	hotel_id serial,
	hotel_name varchar(85),
	hotel_description varchar(500),
	hotel_rating_star smallint,
	hotel_phonenumber varchar(25),
	hotel_modified_date timestamp DEFAULT now(),
	hotel_addr_id int,
	constraint hotel_id_pk primary key (hotel_id),
	constraint fk_hotel_addr_id foreign key (hotel_addr_id)references master.address(addr_id)
);

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
	faci_modified_date timestamp DEFAULT now(),
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
	constraint facility_photos_pk primary key(fapho_id),
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
	constraint facility_price_history_pk primary key(faph_id),
	constraint fk_faph_faci_id foreign key (faph_faci_id)references hotel.facilities(faci_id),
	constraint fk_user_faci_id foreign key (faph_user_id)references users.users(user_id)

);


create table hotel.hotel_reviews(
	hore_id serial,
	hore_user_review varchar(125),
	hore_rating int,
	hore_created_on timestamp,
	hore_user_id int,
	hore_hotel_id int,
	constraint hore_id_pk primary key (hore_id),
	constraint fk_hore_user_id foreign key (hore_user_id)references users.users(user_id),
	constraint fk_hore_hotel_id foreign key (hore_hotel_id)references hotel.hotels(hotel_id)
);

-- ===========SCHEMA MODULE RESTO ==============
-- BUAT DB, LALU BUAT SCHEMA bernama resto
-- Karena per-schema, maka perhatikan lagi yang di constraintnya tuh harus ke referensi di schemanya, bukan ke public
-- dari skema users, ga usah di compile kalau SCHEMA USERS sudah dibuat

CREATE SCHEMA resto;

CREATE TABLE resto.order_menus(
	orme_id 			SERIAL,
	orme_order_number 	VARCHAR(20),
	orme_order_date 	TIMESTAMP,
	orme_total_item 	SMALLINT,
	orme_total_discount MONEY, 		--DIMINTANYA SMALLMONEY TP GAADA
	orme_total_amount 	MONEY,
	orme_pay_type 		CHAR(2),
	orme_cardnumber 	VARCHAR(25),
	orme_is_paid 		CHAR(2),
	orme_modified_date TIMESTAMP DEFAULT now(),
	orme_user_id 		INT,
	CONSTRAINT pk_orme_id PRIMARY KEY (orme_id),
	CONSTRAINT fk_orme_user_id FOREIGN KEY (orme_user_id) REFERENCES users.users (user_id)
	ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE resto.resto_menus(
	reme_faci_id 		INT,
	reme_id 			SERIAL,
	reme_name 			VARCHAR(55),
	reme_description 	VARCHAR(255),
	reme_price 			MONEY,
	reme_status 		VARCHAR(15), --AVAILABLE | EMPTY
	reme_modified_date 	TIMESTAMP,
	CONSTRAINT pk_resto_menus PRIMARY KEY (reme_id),
	CONSTRAINT fk_reme_faci_id FOREIGN KEY (reme_faci_id) REFERENCES hotel.facilities(faci_id)
	ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE resto.order_menu_detail(
	omde_id 		SERIAL,
	orme_price 		MONEY,
	orme_qty 		SMALLINT,
	orme_subtotal 	MONEY,
	orme_discount 	MONEY,
	omde_orme_id 	INT,
	omde_reme_id 	INT ,
	CONSTRAINT pk_omde_id PRIMARY KEY (omde_id),
	CONSTRAINT fk_omde_orme_id FOREIGN KEY (omde_orme_id) REFERENCES resto.order_menus (orme_id),
	CONSTRAINT fk_omde_reme_id FOREIGN KEY (omde_reme_id) REFERENCES resto.resto_menus (reme_id)
	ON DELETE CASCADE ON UPDATE CASCADE
);


CREATE TABLE resto.resto_menu_photos(
	remp_id 				SERIAL,
	remp_thumbnail_filename VARCHAR(50),
	remp_photo_filename 	VARCHAR(50),
	remp_primary 			BIT, --[0=NOT PRIMARY, 1=PRIMARY]
	remp_url 				VARCHAR(255),
	remp_reme_id 			INT,
	CONSTRAINT pk_remp_id PRIMARY KEY (remp_id),
	CONSTRAINT fk_remp_reme_id FOREIGN KEY (remp_reme_id) REFERENCES resto.resto_menus (reme_id)
);


-- ===========SCHEMA MODULE HUMANRESOURCE ==============
-- MODULE HUMANRESOURCE
CREATE SCHEMA humanresource;

CREATE TABLE humanresource.job_role(
	joro_id serial primary key,
	joro_name varchar(55) unique,
	joro_modified_date timestamp DEFAULT now()
);

CREATE TABLE humanresource.employee(
	emp_id serial primary key,
	emp_national_id varchar(25) unique,
	emp_birth_date timestamp,
	emp_marital_status char(1),
	emp_gender char(1),
	emp_hire_date timestamp,
	emp_salaried_flag char(1),
	emp_vacation_hours smallint,
	emp_sickleave_hours smallint,
	emp_current_flag smallint,
	emp_photo varchar(225),
	emp_modified_date timestamp DEFAULT now(),
	emp_emp_id integer,
	emp_joro_id integer,
	foreign key (emp_emp_id) references humanresource.employee(emp_id) on delete cascade on update cascade,
	foreign key (emp_joro_id) references humanresource.job_role(joro_id) on delete cascade on update cascade
);

CREATE TABLE humanresource.shift(
	shift_id serial primary key,
	shift_name varchar(25) unique,
	shift_start_time timestamp unique,
	shift_end_time timestamp unique
);

CREATE TABLE humanresource.department(
	dept_id serial primary key,
	dept_name varchar(50),
	dept_modified_date timestamp	DEFAULT now()
);

CREATE TABLE humanresource.employee_department_history(
	edhi_id serial,
	edhi_emp_id integer,
	edhi_start_date timestamp,
	edhi_end_date timestamp,
	edhi_modified_date timestamp DEFAULT now(),
	edhi_dept_id integer,
	edhi_shift_id integer,
	primary key(edhi_id),
	foreign key (edhi_emp_id) references humanresource.employee (emp_id)
	on delete cascade on update cascade,
	foreign key (edhi_dept_id) references humanresource.department (dept_id)
	on delete cascade on update cascade,
	foreign key (edhi_shift_id) references humanresource.shift (shift_id)
	on delete cascade on update cascade
);



CREATE TABLE humanresource.employee_pay_history(
	ephi_emp_id integer,
	ephi_rate_change_date date,
	ephi_rate_salary money,
	ephi_pay_frequence smallint,
	ephi_modified_date timestamp	DEFAULT now(),
	primary key(ephi_rate_change_date),
	foreign key (ephi_emp_id) references humanresource.employee(emp_id)
	on delete cascade on update cascade
);

CREATE TABLE humanresource.work_orders(
	woro_id serial primary key,
	woro_start_date timestamp,
	woro_status varchar(15),
	woro_user_id integer,
	foreign key (woro_user_id) references users.users(user_id) on delete cascade on update cascade
);

CREATE TABLE humanresource.work_order_detail(
	wode_id serial primary key,
	wode_task_name varchar(255),
	wode_status varchar(15),
	wode_start_date timestamp,
	wode_end_date timestamp,
	wode_notes varchar(255),
	wode_emp_id integer,
	wode_seta_id integer,
	wode_faci_id integer,
	wode_woro_id integer,
	foreign key (wode_emp_id) references humanresource.employee(emp_id) on delete cascade on update cascade,
	foreign key (wode_seta_id) references master.service_task(seta_id) on delete cascade on update cascade,
	foreign key (wode_faci_id) references hotel.facilities(faci_id) on delete cascade on update cascade,
	foreign key (wode_woro_id) references humanresource.work_orders(woro_id) on delete cascade on update cascade
);

-- ===========SCHEMA MODULE PURCHASING ==============
create schema purchasing;

create table purchasing.vendor(
	vendor_id serial,
	vendor_name varchar(55),
	vendor_active integer,
	vendor_priority integer,
	vendor_register_date timestamp,
	vendor_weburi varchar(1024),
	vendor_modified_date timestamp DEFAULT now(),
		
	constraint vendor_id_pk primary key (vendor_id)
);

create table purchasing.stocks(
	stock_id serial,
	stock_name varchar(255),
	stock_description varchar(255),
	stock_quantity smallint,
	stock_reorder_point smallint,
	stock_used smallint,
	stock_scrap smallint,
	stock_price money,
	stock_standar_cost money,
	stock_size varchar(25),
	stock_color varchar(15),
	stock_modified_date timestamp DEFAULT now(),
	
	constraint stock_id_pk primary key (stock_id)
);

create table purchasing.stock_photo(
	spho_id serial,
	spho_thumbnail_filename varchar(50),
	spho_photo_filename varchar(50),
	spho_primary integer,
	spho_url varchar(255),
	spho_stock_id integer,
	
	constraint spho_id_pk primary key (spho_id),
	constraint spho_stock_id_fk foreign key (spho_stock_id) references purchasing.stocks(stock_id) on update cascade on delete cascade
);

create table purchasing.purchase_order_header(
	pohe_id serial,
	pohe_number varchar(20) unique,
	pohe_status smallint,
	pohe_order_date timestamp,
	pohe_subtotal money,
	pohe_tax money,
	pohe_total_amount money,
	pohe_refund money,
	pohe_arrival_date timestamp,
	pohe_pay_tipe varchar(2),
	pohe_emp_id integer,
	pohe_vendor_id integer,
	
	constraint pohe_id_pk primary key (pohe_id),
	constraint pohe_vendor_id_fk foreign key (pohe_vendor_id) references purchasing.vendor(vendor_id),
	constraint pohe_emp_id_fk foreign key (pohe_emp_id) references humanresource.employee(emp_id)
);

create table purchasing.purchase_order_detail(
	pode_pohe_id integer,
	pode_id serial,
	pode_order_qty smallint,
	pode_price money,
	pode_line_total money,
	pode_received_qty decimal,
	pode_rejected_qty decimal,
	pode_stocked_qty decimal,
	pode_modified_date timestamp DEFAULT now(),
	
	constraint pode_id_pk primary key (pode_id),
	constraint pode_pohe_id_fk foreign key (pode_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade

);

alter table purchasing.purchase_order_detail add column pode_stock_id integer;

create table purchasing.stock_detail(
	stod_stock_id integer,
	stod_id serial,
	stod_barcode_number varchar(225) unique,
	stod_status varchar(2),
	stod_notes varchar(1024),
	stod_faci_id int,
	stod_pohe_id integer,
	constraint stod_id_pk primary key (stod_id),
	constraint stod_stoc_id_fk foreign key (stod_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade,
	constraint stod_pohe_id_fk foreign key (stod_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade,
	constraint stod_faci_id_fk foreign key (stod_faci_id) references hotel.facilities(faci_id) on delete cascade on update cascade
);




-- ===========SCHEMA MODULE BOOKING ==============
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
	spof_modified_date timestamp DEFAULT now(),
	constraint pk_spof_id primary key (spof_id)
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

create table booking.booking_order_detail(
	border_boor_id int,
	borde_id serial,
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
	
	constraint pk_boor_borde_id primary key (borde_id),
	constraint fk_borde_boor_id foreign key (border_boor_id) references booking.booking_orders(boor_id)on delete cascade on update cascade,
	constraint fk_borde_faci_id foreign key (borde_faci_id) references hotel.facilities(faci_id) on delete cascade on update cascade
);

create table booking.user_breakfeast(
	usbr_borde_id int,
	usbr_modified_date timestamp DEFAULT now(),
	usbr_total_vacant smallInt,
	constraint pk_borde_modified_id primary key (usbr_modified_date),
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

create table booking.special_offer_coupons(
	soco_id serial,
	soco_borde_id int,
	soco_spof_id int,
	constraint pk_soco_id primary key (soco_id),
	constraint fk_soco_borde_id foreign key (soco_borde_id) references booking.booking_order_detail(borde_id) on delete cascade on update cascade, 
	constraint fk_soco_spof_id foreign key (soco_spof_id) references booking.special_offers(spof_id) on delete cascade on update cascade
);
-- ===========SCHEMA MODULE PAYMENT ==============
CREATE SCHEMA payment;

CREATE TABLE payment.entities (
	entity_id serial PRIMARY KEY
);

CREATE TABLE payment.bank (
	bank_entity_id int PRIMARY KEY,
	bank_code varchar(10) UNIQUE,
	bank_name varchar(55) UNIQUE,
	bank_modified_date timestamp DEFAULT now(),
	CONSTRAINT bank_entity_id_fk FOREIGN KEY (bank_entity_id) REFERENCES payment.entities(entity_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE payment.payment_gateaway (
	paga_entity_id int PRIMARY KEY,
	paga_code varchar(10) UNIQUE,
	paga_name varchar(55) UNIQUE,
	paga_modified_date timestamp DEFAULT now(),
	CONSTRAINT paga_entity_id FOREIGN KEY (paga_entity_id) REFERENCES payment.entities(entity_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE payment.user_accounts (
	usac_entity_id int,
	usac_user_id int,
	usac_account_number varchar(25) UNIQUE,
	usac_saldo numeric,
	usac_type varchar(15), -- debet | cc | payment
	usac_expmonth smallint,
	usac_expyear smallint,
  	usac_modified_date timestamp DEFAULT now(),
	CONSTRAINT user_accounts_pk PRIMARY KEY (usac_entity_id, usac_user_id),
	CONSTRAINT usac_entity_id_fk FOREIGN KEY (usac_entity_id) REFERENCES payment.entities(entity_id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT usac_user_id_fk FOREIGN KEY (usac_user_id) REFERENCES users.users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE payment.payment_transaction (
	patr_id serial PRIMARY KEY,
	patr_trx_number varchar(55) UNIQUE,
	patr_debet numeric,
	patr_credit numeric,
	patr_type char(3),
	patr_note varchar(255),
	patr_modified_date timestamp DEFAULT now(),
	patr_order_number varchar(55), 
	patr_trx_number_ref varchar(55) UNIQUE,
	patr_source_id int,
	patr_target_id int,
	patr_user_id int,
  	CONSTRAINT patr_user_id_fk FOREIGN KEY (patr_user_id) REFERENCES users.users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);
