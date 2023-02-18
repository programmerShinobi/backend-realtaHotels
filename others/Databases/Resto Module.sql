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
	orme_pay_type 		NCHAR(2),
	orme_cardnumber 	VARCHAR(25),
	orme_is_paid 		NCHAR(2),
	orme_modified_date TIMESTAMP,
	orme_user_id 		INT,
	CONSTRAINT pk_orme_id PRIMARY KEY (orme_id),
	CONSTRAINT fk_orme_user_id FOREIGN KEY (orme_user_id) REFERENCES users.users (user_id)
	ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE resto.resto_menus(
	reme_faci_id 		INT,
	reme_id 			SERIAL UNIQUE,
	reme_name 			VARCHAR(55),
	reme_description 	VARCHAR(255),
	reme_price 			MONEY,
	reme_status 		VARCHAR(15), --AVAILABLE | EMPTY
	reme_modified_date 	TIMESTAMP,
	CONSTRAINT pk_resto_menus PRIMARY KEY (reme_id, reme_faci_id),
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