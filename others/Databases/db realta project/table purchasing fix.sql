create table purchasing.stocks (
	stock_id serial,
	stock_name varchar(255)not null,
	stock_description varchar(255),
	stock_quantity int not null,
	stock_reorder_point int,
	stock_used int,
	stock_scrap int,
	stock_size varchar(25),
	stock_color varchar(15),
	stock_modified_date timestamp,
	
	constraint stock_id_pk primary key (stock_id)
)

create table purchasing.stock_photo(
	spho_id serial,
	spho_thumbnail_filename varchar(50),
	spho_photo_filename varchar(50),
	spho_primary bit,
	spho_url varchar(255),
	spho_stock_id int,
	
	constraint spho_id_pk primary key (spho_id),
	constraint spho_stock_id_fk foreign key (spho_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade
)

create table purchasing.vendor(
	vendor_entity_id int,
	vendor_name varchar(55),
	vendor_active bit,
	vendor_priority bit,
	vendor_register_date timestamp,
	vendor_weburl varchar(1024),
	vendor_modified_date timestamp,
	
	constraint vendor_entity_id_pk primary key(vendor_entity_id)
)

create table purchasing.vendor_product(
	vepro_id serial,
	vepro_qty_stocked int,
	vepro_qty_remaining int,
	vepro_price money,
	vepro_stock_id int,
	vepro_vendor_id int,
	
	constraint vepro_id_pk primary key (vepro_id),
	constraint vepro_stock_id_fk foreign key (vepro_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade,
	constraint vepro_vendor_id_fk foreign key(vepro_vendor_id) references purchasing.vendor(vendor_entity_id) on delete cascade on update cascade
)

create table purchasing.purchase_order_header(
	pohe_id serial,
	pohe_number varchar(20) unique not null,
	pohe_status int not null,
	pohe_order_date date not null,
	pohe_subtotal money,
	pohe_tax money,
	pohe_total_amount money,
	pohe_refund money,
	pohe_arrival_date timestamp,
	pohe_pay_type varchar(2),
	pohe_emp_id varchar(20),
	pohe_vendor_id int,
	
	constraint pohe_id_pk primary key (pohe_id),
	constraint pohe_vendor_id foreign key (pohe_vendor_id) references purchasing.vendor(vendor_entity_id) on delete cascade on update cascade
)


create table purchasing.stock_detail(
	stod_stock_id int,
	stod_id serial,
	stod_barcode_number varchar(255) unique,
	stod_status varchar(2),
	stod_notes varchar(1024),
	stod_faci_id int,
	stod_pohe_id int,
	
	constraint stod_id_pk primary key (stod_id),
	constraint stod_stock_id_fk foreign key (stod_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade,
	constraint stod_pohe_id_fk foreign key (stod_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade
)

create table purchasing.purchase_order_detail(
	pode_pohe_id int,
	pode_id serial,
	pode_order_qty int not null,
	pode_price money not null,
	pode_line_total money not null,
	pode_received_qty int,
	pode_rejected_qty int,
	pode_stocked_qty int,
	pode_modified_date timestamp,
	pode_stock_id int,
	
	constraint pode_id_pk primary key (pode_id),
	constraint pode_pohe_id_fk foreign key (pode_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade,
	constraint pode_stock_id_fk foreign key (pode_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade
)