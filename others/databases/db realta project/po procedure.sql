create or replace function purchasing.getPurchaseOrderNumber (transactionid int, inputDate text default now() )
returns text 
	as $$
		begin
			return concat('PO-',to_char(inputDate::date,'YYYYMMDD'),'-',TO_CHAR(transactionid,'000'));
		end;$$
	language plpgsql;
	
select purchasing.getPurchaseOrderNumber(1, 'now')

create or replace procedure  purchasing.purchaseOrder (
	subtotal int,
	tax int,
	total int,
	vendor_id int
)
as $$
	declare
	
		header_id integer := (select coalesce (max(pohe_id), 1)from purchasing.purchase_order_header);
		purchasingNumber text := purchasing.getPurchaseOrderNumber(header_id,'now');
		
	begin
		insert into purchasing.purchase_order_header(pohe_number,
													 pohe_status,
													 pohe_order_date,
													 pohe_subtotal, 
													 pohe_tax, 
													 pohe_total_amount, 
													 pohe_vendor_id)
		values (purchasingNumber,
				1,
				now(),
				subtotal,
				tax,
				total,
				vendor_id);
	end;$$
	language plpgsql;

call purchasing.purchaseorder(1000, 100, 1100, 1)

select * from purchasing.getvendorproductid()

select * from purchasing.purchase_order_header