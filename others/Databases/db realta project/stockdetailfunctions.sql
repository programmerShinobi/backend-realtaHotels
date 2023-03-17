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
			join hotel.facilities faci on stod.stod_faci_id = faci.faci_id

		end;$$
	   
drop table purchasing.stock_detail cascade
select * from purchasing.getstockdetail()

create table purchasing.stock_detail (
	stod_stock_id int,
	stod_id serial,
	stod_barcode_number varchar(225) unique,
	stod_status int,
	stod_notes varchar(1024),
	stod_faci_id int,
	stod_pohe_id int,
	
	constraint stod_id_pk primary key (stod_id),
	constraint stod_stock_id_fk foreign key (stod_stock_id) references purchasing.stocks(stock_id) on delete cascade on update cascade,
	constraint stod_faci_id_fk foreign key (stod_faci_id) references hotel.facilities(faci_id) on delete cascade on update cascade,
	constraint stod_pohe_id_fk foreign key (stod_pohe_id) references purchasing.purchase_order_header(pohe_id) on delete cascade on update cascade
) 