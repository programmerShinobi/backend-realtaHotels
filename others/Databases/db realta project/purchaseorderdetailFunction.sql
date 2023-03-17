create or replace function purchasing.purchaseorderdetail()
returns table(
	podeid int,
	stockname varchar,
	stockquantity int,
	stockprice money,
	receiveqty int,
	rejectqty int,
	linetotal money
)
as $$
	begin
		return query
			select pode_id, stock_name, pode_order_qty, pode_price, pode_received_qty, pode_rejected_qty, pode_line_total
			from purchasing.purchase_order_detail pode
			join purchasing.stocks stock on pode.pode_stock_id = stock.stock_id
			group by pode_id, stock_name
			order by pode_id;
		end;$$
		language plpgsql
drop function purchasing.purchaseorderdetail		
select * from purchasing.purchaseorderdetail()