-- INSERT TABLE RESTO
--order_menus

INSERT INTO resto.order_menus (

orme_order_number ,
orme_order_date,
orme_total_item , 
orme_total_discount, 
orme_total_amount, 
orme_pay_type, 
orme_cardnumber , 
orme_is_paid , 
orme_modified_date, 
orme_user_id )

VALUES 
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '452359774', 'P', '2023-02-12', 1 ),
( 'MENUS#20221127-0002' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '454657953', 'P', '2023-02-12', 2 ),
( 'MENUS#20221127-0003' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '292664502', 'P','2023-02-12', 3),
( 'MENUS#20221127-0004' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '708430150', 'B','2023-02-12', 4),
( 'MENUS#20221127-0005' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '783391110', 'P','2023-02-12', 5 ),
( 'MENUS#20221127-0006' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '791028319', 'P','2023-02-12', 6 ),
( 'MENUS#20221127-0007' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '342368297', 'P','2023-02-12', 7 ),
( 'MENUS#20221127-0008' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '249696629', 'B','2023-02-12', 8 ),
( 'MENUS#20221127-0009' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '934733102', 'P','2023-02-12', 9 ),
( 'MENUS#20221127-0010' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '444752581', 'P','2023-02-12', 10 ),
( 'MENUS#20221127-0011' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '385753208', 'B','2023-02-12', 11 ),
( 'MENUS#20221127-0012' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '309537644', 'P','2023-02-12', 12 ),
( 'MENUS#20221127-0013' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '604520880', 'P','2023-02-12', 13 ),
( 'MENUS#20221127-0014' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '414331705', 'P','2023-02-12', 14 ),
( 'MENUS#20221127-0015' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '952223262', 'B','2023-02-12', 15 ),
( 'MENUS#20221127-0016' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '760190130', 'P','2023-02-12', 16 ),
( 'MENUS#20221127-0017' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '229575303', 'P','2023-02-12', 17 ),
( 'MENUS#20221127-0018' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '776779345', 'B','2023-02-12', 18 ),
( 'MENUS#20221127-0019' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '271329773', 'P','2023-02-12', 19 ),
( 'MENUS#20221127-0020' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '876950439', 'B','2023-02-12', 20 );
-- Resto_Menus --

-- 1 Restoran Barat
-- 2 Restoran Tengah
-- 3 Restoran Timur

INSERT INTO resto.resto_menus(
	reme_faci_id,
	reme_name,
	reme_description,
	reme_price,
	reme_status,
	reme_modified_date
) VALUES 

( 2,'Batagor', 'Batagor merupakan makanan khas jakarta yang sangat Lezat dan Bergizi', 22000, 'available', '2023-02-12' ),
( 2,'Soto Betawi', 'Soto Betawi merupakan soto yang khas dari daerah DKI Jakarta yang sangat Lezat dan Bergizi', 26000, 'available', '2023-02-12' ),
( 1,'Pempek', 'Pempek merupakan makanan khas Palembang, Sumatera Selatan yang sangat Lezat dan Bergizi', 21000, 'empty', '2023-02-12' ),
( 2,'Gudeg', 'Gudeg merupakan makanan khas Yogyakarta yang sangat Lezat dan Bergizi', 23000, 'available', '2023-02-12' ),
( 2,'Taucho', 'Taucho merupakan makanan khas Cianjur yang sangat Lezat dan Bergizi', 29000, 'available', '2023-02-12' ),
( 1,'Laksan', 'Laksan merupakan makanan khas Palembang yang sangat Lezat dan Bergizi', 27000, 'available', '2023-02-12' ),
( 1,'Mie Gomak', 'Mie Gomak merupakan makanan khas Medan, Sumatera Utara yang sangat Lezat dan Bergizi', 21000, 'available', '2023-02-12' ),
( 1,'Asam Keueng', 'Asam Keueng merupakan makanan khas Aceh yang sangat Lezat dan Bergizi', 20000, 'available', '2023-02-12' ),
( 1,'Rendang', 'Rendang merupakan makanan khas Padang, Sumatera Barat yang sangat Lezat dan Bergizi', 29000, 'available', '2023-02-12' ),
( 1,'Pengdap', 'Pengdap merupakan makanan khas Bengkulu yang sangat Lezat dan Bergizi', 24000, 'available', '2023-02-12' ),
( 1,'Gulai Belacan', 'Gulai Belacan merupakan makanan khas Pekan Baru, Riau yang sangat Lezat dan Bergizi', 26000, 'available', '2023-02-12' ),
( 1,'Tempoyak', 'Tempoyak merupakan makanan khas Jambi yang sangat Lezat dan Bergizi', 22000, 'empty', '2023-02-12' ),
( 1,'Seruit', 'Seruit merupakan makanan khas Lampung yang sangat Lezat dan Bergizi', 29000, 'available', '2023-02-12' ),
( 2,'Peuyeum', 'Peuyeum merupakan makanan khas Bandung yang sangat Lezat dan Bergizi', 20000, 'available', '2023-02-12' ),
( 2,'Lumpia', 'Lumpia merupakan makanan khas Semarang yang sangat Lezat dan Bergizi', 21000, 'available', '2023-02-12' ),
( 2,'Rujak Cingur', 'Rujak Cingur merupakan makanan khas Surabaya yang sangat Lezat dan Bergizi', 25000, 'empty', '2023-02-12' ),
( 2,'Rawon Dengkul', 'Rawon Dengkul merupakan makanan khas Malang yang sangat Lezat dan Bergizi', 28000, 'available', '2023-02-12' ),
( 3,'Papeda', 'Papeda merupakan makanan khas Papua yang sangat Lezat dan Bergizi', 24000, 'available', '2023-02-12' ),
( 3,'Ayam Betutu', 'Ayam Betutu merupakan makanan khas Bali yang sangat Lezat dan Bergizi', 25000, 'available', '2023-02-12' ),
( 3,'Sate bulayak', 'Sate bulayak merupakan makanan khas Lombok, Nusa Tenggara Barat yang sangat Lezat dan Bergizi', 27000, 'empty', '2023-02-12' );


-- Resto Menus Photos --

INSERT INTO resto.resto_menu_photos (

	remp_thumbnail_filename,
	remp_photo_filename,
	remp_primary,
	remp_url, 
	remp_reme_id  --ngambil dari reme_id tabel resto_menus
) VALUES
('Batagor', 'batagor.jpg', '1', 'batagor.com', 1 ), --1
('Soto Betawi', 'soto-betawi.jpg', '1', 'soto-betawi.com', 2 ), --2
('Pempek', 'pempek.jpg', '1', 'pempek.com', 3 ), --3
('Gudeg', 'gudeg.jpg', '1', 'gudeg.com', 4 ), --4
('Taucho', 'taucho.jpg', '1', 'taucho.com', 5 ), --5
('Laksan', 'laksan.jpg', '1', 'laksan.com', 6 ), --6
('Mie Gomak', 'miegomak.jpg', '1', 'miegomak.com', 7 ), --7
('Asam Keueng', 'asamkeueng.jpg', '1', 'asamkeueng.com', 8 ), --8
('Rendang', 'rendang.jpg', '1', 'rendang.com', 9 ), --9
('Pengdap', 'pengdap.jpg', '1', 'pengdap.com', 10 ), --10
('Gulai Balacan', 'gulaibalacan.jpg', '1', 'gulaibelacan.com', 11 ),
('Tempoyak', 'tempoyak.jpg', '1', 'tempoyak.com', 12 ),
('Seruit', 'seruit.jpg', '1', 'seruit.com', 13 ),
('Peuyeum', 'peuyeum.jpg', '1', 'peuyeum.com', 14 ),
('Lumpia', 'lumpia.jpg', '1', 'lumpia.com', 15 ),
('Rujak Cingur', 'rujakcingur.jpg', '1', 'rujakcingur.com', 16 ),
('Rawon Dengkul', 'rawondengkul.jpg', '1', 'rawondengkul.com', 17 ),
('Papeda', 'papeda.jpg', '1', 'papeda.com', 18 ),
('Ayam Betutu', 'ayambetutu.jpg', '1', 'ayambetutu.com', 19 ),
('Ayam bulayak', 'ayambulayak.jpg', '1', 'ayambulayak.com', 20 );


-- order_menu_detail

INSERT INTO resto.order_menu_detail (

    orme_price,
    orme_qty,
    orme_subtotal,
    orme_discount,
    omde_orme_id, --ngambil dari orme_id tabel order_menus
    omde_reme_id --ngambil dari reme_id tabel resto_menus
) VALUES
( 10000, 10, 100000, 3000, 1,1 ), --1
( 10000, 10, 100000, 3000, 2,2 ), --2
( 10000, 10, 100000, 3000, 3,3 ), --3
( 10000, 10, 100000, 3000, 1,4 ), --4
( 10000, 10, 100000, 3000, 2,5 ), --5
( 10000, 10, 100000, 3000, 3,6 ), --6
( 10000, 10, 100000, 3000, 1,7 ), --7
( 10000, 10, 100000, 3000, 2,8 ), --8
( 10000, 10, 100000, 3000, 3,9 ),
( 10000, 10, 100000, 3000, 1,10 ),
( 10000, 10, 100000, 3000, 2,11 ),
( 10000, 10, 100000, 3000, 3,12 ),
( 10000, 10, 100000, 3000, 1,13 ),
(10000, 10, 100000, 3000, 2,14 ),
( 10000, 10, 100000, 3000, 3,15 ),
(10000, 10, 100000, 3000, 1,16 ),
( 10000, 10, 100000, 3000, 2,17 ),
( 10000, 10, 100000, 3000, 3,18 ),
( 10000, 10, 100000, 3000, 1,19 ),
( 10000, 10, 100000, 3000, 2,20 );