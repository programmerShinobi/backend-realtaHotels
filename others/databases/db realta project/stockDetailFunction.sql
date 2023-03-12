create or replace function purchasing.getStockDetail()
returns table(
	detailId int,
	stockId int,
	stodBarcode text,
	stodStatus text,
	stodNotes text,
	poNumber text,
	faciLoc text
) as $$
	declare
		details_cursor cursor
			for select stod.stod_id, stod.stod_stock_id, stod.stod_barcode_number, stod.stod_status, stod.stod_notes, pohe.pohe_number,faci.faci_name
-- 			select *
			from purchasing.stock_detail stod
			join purchasing.purchase_order_header pohe on stod.stod_pohe_id = pohe.pohe_id
			join hotel.facilities faci on stod.stod_faci_id = faci.faci_id
			group by stod.stod_id, pohe.pohe_number, faci.faci_name;

	begin
		open details_cursor;
		loop
			fetch next from details_cursor into
				detailId,
				stockId,
				stodBarcode,
				stodStatus,
				stodNotes,
				poNumber,
				faciLoc;
			exit when not found;
			return next;
		end loop;
	close details_cursor;
	end; $$
	language plpgsql;
	
select * from purchasing.getStockDetail()
select * from purchasing.stock_photo
select * from purchasing.stocks
alter table purchasing.stock_detail add constraint stod_faci_id_fk foreign key (stod_faci_id) references hotel.facilities(faci_id) on update cascade on delete cascade