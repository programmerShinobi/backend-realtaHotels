create schema purchasing;

create table purchasing.vendor(
	vendor_id serial,
	vendor_name varchar(55),
	vendor_active bool,
	vendor_priority bool,
	vendor_register_date timestamp,
	vendor_weburi varchar(1024),
	vendor_modified_date timestamp,
		
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
	stock_modified_date timestamp,
	
	constraint stock_id_pk primary key (stock_id)
);

create table purchasing.stock_photo(
	spho_id serial,
	spho_thumbnail_filename varchar(50),
	spho_photo_filename varchar(50),
	spho_primary bool,
	spho_url varchar(255),
	spho_stock_id serial,
	
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
	pohe_employee_id varchar(20),
	pohe_vendor_id integer,
	
	constraint pohe_id_pk primary key (pohe_id),
	constraint pohe_vendor_id_fk foreign key (pohe_vendor_id) references purchasing.vendor(vendor_id)
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
	pode_modified_date timestamp,
	
	
	constraint pode_id_pk primary key (pode_pohe_id,pode_id),
	constraint pode_pohe_id_fk foreign key (pode_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade
);

create table purchasing.stock_detail(
	stod_stock_id integer,
	stod_id serial,
	stod_barcode_number varchar(225) unique,
	stod_status varchar(2),
	stod_notes varchar(1024),
	stod_faci_id int,
	stod_pohe_id integer,
	
	constraint stod_id_pk primary key (stod_stock_id,stod_id),
	constraint stod_stoc_id_fk foreign key (stod_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade,
	constraint stod_pohe_id_fk foreign key (stod_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade
);

create table purchasing.employee(
	emp_id integer,
	foreign key (emp_id) references humanresources.employee(emp_id)
	on delete cascade on update cascade
);