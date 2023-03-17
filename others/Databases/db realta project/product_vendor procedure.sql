create or replace procedure purchasing.insertVendorProduct(
	stocks_name varchar,
	product_quantity int,
	product_remaining int,
	product_price int,
	id_vendor int
)
	language plpgsql
	as $$
		declare
			vendor_id int;
			stocks_id int;
		begin
			insert into purchasing.stocks(stock_name,stock_quantity,stock_reorder_point)
			values (stocks_name, 0,0)
			
			returning stock_id into stocks_id;
			
			insert into purchasing.vendor_product(vepro_qty_stocked,vepro_qty_remaining, vepro_price, vepro_stock_id, vepro_vendor_id)
			values (product_quantity,product_remaining,product_price,stocks_id,id_vendor);
			
		end;$$
call purchasing.insertvendorproduct('King Bedd',20,10,2000000,1)			
select * from purchasing.vendor_product
select * from purchasing.stocks