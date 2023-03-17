create or replace procedure purchasing.purchaseOrderinsert(
	vendor_id int,
	subtotal int,
	tax int,
	amount int,
	stockquantity int[],
	stockprice int[],
	stocklinetotal int[],
	stocksid int[]
)
as $$
	declare
		head_id int := (select coalesce (max(pohe_id),1) from purchasing.purchase_order_header);
		headers_id integer;
		purchasing_number text := purchasing.getPurchaseOrderNumber(head_id, 'now');
		i int;
	begin 
		insert into purchasing.purchase_order_header(pohe_number, pohe_status, pohe_order_date, pohe_subtotal, pohe_tax, pohe_total_amount, pohe_vendor_id)
		values (purchasing_number,1, 'now',subtotal,tax,amount,vendor_id)
		
		returning pohe_id into headers_id;
		
		for i in 1..array_length(stocksid, 1) loop
			insert into purchasing.purchase_order_detail(pode_pohe_id, pode_order_qty, pode_price, pode_line_total, pode_stock_id)
			values(headers_id, stockquantity[i], stockprice[i], stocklinetotal[i],stocksid[i]);
			end loop;
	end;$$
	language plpgsql;

drop procedure purchasing.purchaseorderinsert
	
call purchasing.purchaseorderinsert(1, 1000000,100000,1100000,array[2,4],array[200000,100000],array[400000,400000],array[2,3])

select * from purchasing.purchase_order_header