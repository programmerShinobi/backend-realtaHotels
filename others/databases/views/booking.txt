--view hotel 
    CREATE VIEW hotel.card_hotel AS 
	select h.hotel_id, h.hotel_name, h.hotel_description, h.hotel_rating_star, h.hotel_phonenumber,
		  faci_group.faci_hotelall,faci_group_lprice.faci_lowprice,faci_group_hprice.faci_hightprice,string_agg(photo_hotel.url, ',')as url,alamat.provices, addrees.place,faci_room_group.faci_hotelroom
   from hotel.hotels h 
   join 
   (select faci_hotel_id, string_agg(faci_name, ', ')as faci_hotelall
   from hotel.facilities group by faci_hotel_id)faci_group
   on h.hotel_id = faci_group.faci_hotel_id
   join
   (select faci_hotel_id, string_agg(concat(' ',faci_low_price), '- ')as faci_lowprice
   from hotel.facilities  
	where faci_cagro_id = 2
	group by faci_hotel_id)faci_group_lprice
   on h.hotel_id = faci_group_lprice.faci_hotel_id
   join 
    (select faci_hotel_id, string_agg(concat(' ',faci_hight_price), '- ')as faci_hightprice
   from hotel.facilities
	where faci_cagro_id = 2 
	group by faci_hotel_id)faci_group_hprice
   on h.hotel_id = faci_group_hprice.faci_hotel_id
   join 
   (select (f.faci_hotel_id) as hotel_id, faci_cagro_id, f.faci_name, (ph.fapho_url) as url, ph.fapho_primary 
   from hotel.facility_photos ph
   join hotel.facilities f on ph.fapho_faci_id = f.faci_id 
   where ph.fapho_primary = '1' and f.faci_cagro_id=2)photo_hotel
   on h.hotel_id = photo_hotel.hotel_id
   join
   (select faci_hotel_id, string_agg(faci_name, ', ')as faci_hotelroom
   from hotel.facilities 
	where faci_cagro_id = 2
	group by faci_hotel_id
  	)faci_room_group
   on h.hotel_id = faci_room_group.faci_hotel_id
   join
   (select (a.addr_id)hotel_prov_id,(p.prov_name)provices
	from master.address a
	join master.provinces p on a.addr_prov_id = p.prov_id
	join master.country c on p.prov_country_id = c.country_id
	join master.regions r on r.region_code = c.country_region_id)alamat
	on h.hotel_addr_id = alamat.hotel_prov_id 
   join
   (select (a.addr_id)hotel_addr_id, concat(a.addr_line1,' ',p.prov_name,' ',c.country_name,' ',r.region_name)place 
	from master.address a
	join master.provinces p on a.addr_prov_id = p.prov_id
	join master.country c on p.prov_country_id = c.country_id
	join master.regions r on r.region_code = c.country_region_id)addrees
	on h.hotel_addr_id = addrees.hotel_addr_id group by h.hotel_id, faci_group.faci_hotelall,faci_group_lprice.faci_lowprice,faci_group_hprice.faci_hightprice,alamat.provices, addrees.place,faci_room_group.faci_hotelroom;



    CREATE VIEW hotel.user_review AS
	select hr.hore_hotel_id, u.user_full_name, u.user_email, hr.hore_user_review, hr.hore_created_on, hr.hore_rating
  	from hotel.hotel_reviews hr
	join users.users u
	on hr.hore_user_id = u.user_id;


-- procedur faci all hotel

    CREATE VIEW hotel.faci_allhotel AS
	select *
	from hotel.hotels h join hotel.facilities f 
	on h.hotel_id = f.faci_hotel_id
	join (select fapho_faci_id, string_agg(fapho_url,',')as fapho_url
			from hotel.facility_photos group by fapho_faci_id) fap
	on f.faci_id = fap.fapho_faci_id
	where faci_cagro_id = 2;


-- end
