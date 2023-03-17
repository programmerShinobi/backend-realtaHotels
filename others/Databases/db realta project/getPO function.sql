create or replace function purchasing.getPO()
returns table(
	poheid int,
	ponumber varchar,
	orderdate date,
	vendortarget varchar,
	linetotal bigint,
	totalamount money,
	pohestatus int
)
 as $$
 	begin
		return query
			SELECT distinct pohe_id, pohe_number, pohe_order_date, vendor_name, count( pode_order_qty) line_total, pohe_total_amount, pohe_status
			from purchasing.purchase_order_header pohe
			join purchasing.purchase_order_detail pode on pohe.pohe_id = pode.pode_pohe_id
			join purchasing.vendor vend on pohe.pohe_vendor_id = vend.vendor_entity_id
			group by pohe_id, vendor_name
			order by pohe_number;
		end;$$
		language plpgsql
		
drop function purchasing.getPO()
select * from purchasing.getPO()
