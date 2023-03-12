-- proceducere insert 2 tabel fac hotel
CREATE OR REPLACE PROCEDURE hotel.insert_facility_and_price_history(
  IN faci_name character varying(125),
  IN faci_description character varying(225),
  IN faci_max_number integer,
  IN faci_measure_unit character varying(15),
  IN faci_room_number character varying(6),
  IN faci_startdate timestamp,
  IN faci_endate timestamp,
  IN faci_low_price money,
  IN faci_hight_price money,
  IN faci_rate_price money,
  IN faci_discount money,
  IN faci_tax_rate money,
  IN faci_modified_date timestamp,
  IN faci_hotel_id integer,
  IN faci_cagro_id integer
)
LANGUAGE plpgsql
AS $$
DECLARE
  faci_id integer;
BEGIN
  INSERT INTO hotel.facilities (
    faci_name,
    faci_description,
    faci_max_number,
    faci_measure_unit,
    faci_room_number,
    faci_startdate,
    faci_endate,
    faci_low_price,
    faci_hight_price,
    faci_rate_price,
    faci_discount,
    faci_tax_rate,
    faci_modified_date,
    faci_hotel_id,
    faci_cagro_id
  )
  VALUES (
    faci_name,
    faci_description,
    faci_max_number,
    faci_measure_unit,
    faci_room_number,
    faci_startdate,
    faci_endate,
    faci_low_price,
    faci_hight_price,
    faci_rate_price,
    faci_discount,
    faci_tax_rate,
    faci_modified_date,
    faci_hotel_id,
    faci_cagro_id
  )
  RETURNING hotel.facilities.faci_id INTO faci_id;

  INSERT INTO hotel.facility_price_history (
    faph_faci_id,
    faph_startdate,
    faph_enddate,
    faph_low_price,
    faph_high_price,
    faph_discount,
    faph_tax_rate,
    faph_modified_date
  )
  VALUES (
    faci_id,
    faci_startdate,
    faci_endate,
    faci_low_price,
    faci_hight_price,
    faci_discount,
    faci_tax_rate,
    faci_modified_date
  );
END;
$$;

-- prosedur menampilakn adreess
CREATE OR REPLACE PROCEDURE hotel.address()
AS $$
BEGIN
    CREATE VIEW hotel.adsress AS
	select (a.addr_id)hotel_addr_id, concat(a.addr_line1,' ',p.prov_name,' ',c.country_name,' ',r.region_name)place 
	from master.address a
	join master.provinces p on a.addr_prov_id = p.prov_id
	join master.country c on p.prov_country_id = c.country_id
	join master.regions r on r.region_code = c.country_region_id
;
END; $$
LANGUAGE plpgsql;
-- 	end
