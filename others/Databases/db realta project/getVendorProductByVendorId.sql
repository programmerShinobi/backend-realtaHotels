create or replace function purchasing.getVendorProductId ()
returns table(
	vendId int,
	stockName varchar,
	stockQuantity int,
	stockRemain int,
	stockPrice money
) as $$

	declare 
		search_cursor cursor
			for select vend.vendor_entity_id, sto.stock_name, venpro.vepro_qty_stocked,venpro.vepro_qty_remaining, venpro.vepro_price
				from purchasing.vendor_product venpro
				join purchasing.stocks sto on venpro.vepro_stock_id = sto.stock_id
				join purchasing.vendor vend on venpro.vepro_vendor_id = vend.vendor_entity_id
				group by vend.vendor_entity_id, sto.stock_name ,venpro.vepro_id
				order by sto.stock_name asc;
				
	begin
		open search_cursor;
		loop
			fetch next from search_cursor into
				vendId,
				stockName,
				stockQuantity,
				stockRemain,
				stockPrice;
			exit when not found;
			return next;
		end loop;
		
		close search_cursor;
	
	end;$$
	language plpgsql;
	
