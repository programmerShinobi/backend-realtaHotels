INSERT INTO booking.special_offers ( spof_name,spof_description, spof_type, spof_discount, spof_start_date, spof_end_date, spof_min_qty, spof_max_qty, spof_modified_date)
VALUES ('Hari Ceria', 'Dapatkan diskon senilai Rp 20.000 untuk pemesanan setiap harinya! Nikmati keseruan liburan Anda dengan harga yang lebih terjangkau.', 'T', 50000, '2023-02-28', '2023-05-20', 1, 30, NOW()),
('Minggu Sejuk', 'Rileks dan nikmati liburan Anda dengan diskon mingguan senilai Rp 20.000! Berlaku untuk pemesanan di hari minggu.', 'C', 20000 , '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Bulan Bahagia', 'Merayakan bulan baru dengan diskon bulanan senilai Rp 30.000! Dapatkan pengalaman liburan yang lebih menyenangkan dengan harga terjangkau.', 'T', 30000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Tahun Baru', 'Rayakan tahun baru dengan diskon senilai Rp 60.000! Dapatkan pengalaman liburan yang tak terlupakan dengan harga terbaik.', 'C', 60000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Promo Extra', 'Dapatkan diskon tambahan senilai Rp 40.000 untuk pemesanan apapun! Berlaku untuk setiap jenis pemesanan.', 'T', 40000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Paket Hemat', 'Nikmati liburan hemat dengan promo paket senilai Rp 20.000! Dapatkan pengalaman liburan yang menyenangkan dengan harga yang lebih terjangkau.', 'T', 20000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Hemat Khusus', 'Dapatkan diskon khusus senilai Rp 60.000 untuk pemesanan apapun! Berlaku untuk semua jenis pemesanan.', 'C', 60000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Promo Spesial', 'Rayakan momen spesial Anda dengan promo senilai Rp 100.000! Dapatkan pengalaman liburan yang tak terlupakan dengan harga terbaik.', 'I', 100000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Diskon Member', 'Nikmati diskon khusus senilai Rp 75.000 untuk semua member! Berlaku untuk setiap jenis pemesanan.', 'I', 75000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Welcome Promo', 'Di bulan pertama Anda, nikmati diskon selamat datang senilai Rp 50.000 untuk pemesanan apapun. Kami berharap Anda menikmati pengalaman liburan yang menyenangkan', 'T', 50000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Liburan Akhir Tahun', 'Rayakan liburan akhir tahun dengan diskon senilai Rp 100.000! Nikmati momen spesial Anda dengan harga terbaik.', 'C', 100000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Early Bird Promo', 'Jangan lewatkan Early Bird Promo kami! Pesan sekarang dan dapatkan diskon senilai Rp 30.000 untuk pemesanan pada bulan depan.', 'T', 30000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Paket Romantis', 'Ciptakan momen romantis Anda dengan paket romantis kami! Dapatkan diskon senilai Rp 50.000 untuk pemesanan paket romantis.', 'I', 50000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Promo Keluarga', 'Nikmati liburan bersama keluarga dengan promo keluarga kami! Dapatkan diskon senilai Rp 75.000 untuk pemesanan keluarga.', 'C', 75000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Ultimate Getaway', 'Nikmati pengalaman liburan yang tak terlupakan dengan Ultimate Getaway! Dapatkan diskon senilai Rp 100.000 untuk pemesanan Ultimate Getaway.', 'T', 100000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Staycation Promo', 'Ingin berlibur tanpa harus jauh-jauh? Coba Staycation Promo kami! Dapatkan diskon senilai Rp 40.000 untuk pemesanan Staycation.', 'T', 40000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Last Minute Deal', 'Tidak punya rencana liburan? Jangan khawatir, Last Minute Deal kami siap membantu! Dapatkan diskon senilai Rp 30.000 untuk pemesanan last minute.', 'T', 30000, '2023-01-01', '2023-05-30', 1, 30, NOW()),
('Paket Hemat Keluarga', 'Dapatkan promo paket hemat khusus untuk keluarga senilai Rp 150.000! Berlaku untuk pemesanan minimal 2 kamar selama satu minggu.', 'T', 150000, '2023-01-01', '2023-01-31', 2, 10, NOW()),
('Promo Weekend', 'Rileks dan nikmati akhir pekan Anda dengan diskon spesial 100000 untuk pemesanan pada hari Sabtu dan Minggu! Berlaku untuk semua jenis kamar.', 'T', 100000, '2023-02-04', '2023-02-05', 1, 30, NOW()),
('Promo Liburan Musim Semi', 'Rayakan liburan musim semi dengan diskon khusus 70000 untuk pemesanan selama satu minggu. Berlaku untuk semua jenis kamar.', 'C', 70000, '2023-03-20', '2023-03-26', 1, 30, NOW());

INSERT INTO booking.booking_orders (boor_order_number, boor_order_date, boor_arrival_date, boor_total_room, boor_total_guest, boor_discount, boor_total_tax, boor_total_amount, boor_down_payment, boor_pay_type, boor_is_paid, boor_type, boor_cardnumber, boor_member_type, boor_status, boor_user_id, boor_hotel_id)
VALUES ('BO#01012022-0001', '2022-01-01', '2022-01-05', 2, 4, 100000, 150000 , 1000000, 250000, 'CR', 'P', 'I', '1234567890123456', '751527261', 'CLEANING', 1, 1),
       ('BO#02012022-0002', '2022-01-02', '2022-01-07', 1, 2, 50000, 60000, 500000, 100000, 'D', 'P', 'T', '2345678901234567', '383667679', 'CHECKIN', 2, 1),
       ('BO#03012022-0003', '2022-01-03', '2022-01-08', 3, 6, 175000, 75000,  1500000 , 400000, 'D', 'DP', 'I', '3456789012345678', '264253607', 'CHECKOUT', 3, 1),
       ('BO#04012022-0004', '2022-01-04', '2022-01-09', 4, 8, 400000, 100000,  2000000 , 500000, 'CR', 'P', 'C', '4567890123456789', '347140510', 'CANCELLED', 4, 2),
       ('BO#05012022-0005', '2022-01-05', '2022-01-10', 2, 4, 100000 , 100000,  1000000 , 250000, 'C', 'P', 'I', '5678901234567890', '740144935', 'CLEANING', 5, 2),
       ('BO#06012022-0006', '2022-01-06', '2022-01-11', 1, 2, 50000, 50000, 500000 , 100000, 'PG', 'P', 'T', '6789012345678901', '912995894', 'CHECKIN', 6, 3),
       ('BO#07012022-0007', '2022-01-07', '2022-01-12', 3, 6, 200000, 150000,  1500000 , 400000, 'D', 'P', 'I', '7890123456789012', '15622368', 'CHECKOUT', 7, 3),
       ('BO#08012022-0008', '2022-01-08', '2022-01-13', 4, 8, 400000, 200000,  2000000 , 500000, 'CR', 'P', 'C', '8901234567890123', '874033617', 'CANCELLED', 8, 3),
       ('BO#09012022-0009', '2022-01-09', '2022-01-14', 2, 4, 75000, 100000,  1000000 , 250000, 'D', 'P', 'I', '9012345678901234', '736167877', 'CLEANING', 9, 4),
       ('BO#10012022-00010', '2022-01-10', '2022-01-15', 1, 2, 75000, 50000,  500000 , 100000,'D', 'P', 'T', '0123456789012345', '523702608', 'CHECKIN', 10, 4),
       ('BO#01022022-00011', '2022-02-01', '2022-02-05', 2, 4, 150000, 100000,  1000000 , 250000, 'P', 'N', 'I', '1234567890123456', '540613157', 'CLEANING', 11, 5),
       ('BO#02022022-00012', '2022-02-02', '2022-02-07', 1, 2, 300000, 50000,  500000 , 100000, 'D', 'P', 'T', '2345678901234567', '589081886', 'CHECKIN', 12, 5),
       ('BO#03022022-00013', '2022-02-03', '2022-02-08', 3, 6, 300000, 150000, 1500000, 400000, 'D', 'P', 'I', '3456789012345678', '614610983', 'CHECKOUT', 13, 2),
       ('BO#04022022-00014', '2022-02-04', '2022-02-09', 4, 8, 150000, 200000, 2000000, 500000, 'C', 'DP', 'C', '4567890123456789', '697829861', 'CANCELLED', 14, 3),
       ('BO#05022022-00015', '2022-02-05', '2022-02-10', 2, 4, 50000, 100000, 1000000, 250000,'D', 'P', 'I', '5678901234567890', '339091263', 'CLEANING', 15, 1),
       ('BO#06022022-00016', '2022-02-06', '2022-02-11', 1, 2, 75000, 50000, 500000, 100000, 'D', 'P', 'T', '6789012345678901', '982511780', 'CHECKIN', 16, 5),
       ('BO#07022022-00017', '2022-02-07', '2022-02-12', 3, 6, 200000, 150000, 1500000, 400000, 'D', 'P', 'I', '7890123456789012', '128013679', 'CHECKOUT', 17, 1),
       ('BO#08022022-00018', '2022-02-08', '2022-02-13', 4, 8, 100000, 200000, 2000000, 500000, 'C', 'R', 'C', '8901234567890123', '33797123', 'CANCELLED', 18, 4),
       ('BO#09022022-00019', '2022-02-09', '2022-02-14', 2, 4, 500000, 100000, 1000000, 250000, 'D', 'P', 'I', '9012345678901234', '362944181', 'CLEANING', 19, 5),
       ('BO#20230210-00020', '2022-02-10', '2022-02-15', 1, 2, 75000, 50000, 500000, 100000, 'CR', 'DP', 'T', '0123456789012345', '283688167', 'CHECKIN', 20, 3);


INSERT INTO booking.booking_order_detail (border_boor_id, borde_checkin, borde_checkout, borde_adults, borde_kids, borde_price, borde_extra, borde_discount, borde_tax, borde_subtotal, borde_faci_id)
VALUES (1, '2022-01-01 10:00:00', '2022-01-05 12:00:00', 2, 1, 1000000, 500000, 225000,135000,1485000 ,  1),
       (2, '2022-01-02 11:00:00', '2022-01-07 14:00:00', 1, 0, 600000, 250000, 85000,76500,841500 , 2),
       (3, '2022-01-03 09:00:00', '2022-01-08 11:00:00', 3, 2, 1500000, 750000, 112500,202500,2227500 , 3),
       (4, '2022-01-04 12:00:00', '2022-01-09 16:00:00', 4, 2, 2000000, 1000000, 600000,270000,2970000  , 4),
       (5, '2022-01-05 14:00:00', '2022-01-10 18:00:00', 2, 1, 1000000, 500000, 150000,135000,1485000  ,5),
       (6, '2022-01-06 08:00:00', '2022-01-11 10:00:00', 1, 0, 600000, 250000, 42500,76500,841500  ,6),
       (7, '2022-01-07 10:00:00', '2022-01-12 12:00:00', 3, 2, 1500000, 750000, 337500,202500,2227500  ,7),
       (8, '2022-01-08 13:00:00', '2022-01-13 16:00:00', 4, 2, 2000000, 1000000, 600000,270000,2970000  ,8),
       (9, '2022-01-09 09:00:00', '2022-01-14 12:00:00', 2, 1, 1000000, 500000, 150000,135000,1485000  ,9),
       (10, '2022-01-10 11:00:00', '2022-01-15 14:00:00', 1, 0, 600000, 250000, 42500,76500, 841500 ,10),
       (11, '2022-02-01 10:00:00', '2022-02-05 12:00:00', 2, 1, 1000000, 500000, 75000,135000,1485000 ,11),
       (12, '2022-02-02 11:00:00', '2022-02-07 14:00:00', 1, 0, 600000, 250000, 85000,76500,841500 ,12),
       (13, '2022-02-03 09:00:00', '2022-02-08 11:00:00', 3, 2, 1500000, 750000, 337500, 202500,2227500 ,13),
       (14, '2022-02-04 12:00:00', '2022-02-09 16:00:00', 4, 2, 2000000, 1000000, 600000,270000 ,2970000 ,14),
       (15, '2022-02-05 14:00:00', '2022-02-10 18:00:00', 2, 1, 1000000, 500000, 150000,135000 ,1485000 , 15),
       (16, '2022-02-06 08:00:00', '2022-02-11 10:00:00', 1, 0, 600000, 250000,42500,76500,841500 ,16),
       (17, '2022-02-07 10:00:00', '2022-02-12 12:00:00', 3, 2, 1500000, 750000, 337500,202500 ,2227500 , 17),
       (18, '2022-02-08 13:00:00', '2022-02-13 16:00:00', 4, 2, 2000000, 1000000, 600000,270000  ,2970000 ,18),
       (19, '2022-02-09 09:00:00', '2022-02-14 12:00:00', 2, 1, 1000000, 500000, 150000,135000  ,1485000 ,19),
       (20, '2022-02-10 11:00:00', '2022-02-15 14:00:00', 1, 0, 600000, 250000, 42500,76500 ,841500 ,20);

INSERT INTO booking.user_breakfeast (usbr_borde_id, usbr_modified_date, usbr_total_vacant)
VALUES (1, '2022-01-01 10:00:00', 2), (2, '2022-01-03 09:00:00', 1), (3, '2022-01-04 12:00:00', 4),
       (4, '2022-01-05 14:00:00', 2), (5, '2022-01-06 08:00:00', 1), (6, '2022-01-07 10:00:00', 3), (7, '2022-01-08 13:00:00', 4),
       (8, '2022-01-09 09:00:00', 2), (9, '2022-01-10 11:00:00', 1), (10, '2022-01-11 10:00:00', 2), (11, '2022-01-12 11:00:00', 3),
       (12, '2022-01-13 09:00:00', 1), (13, '2022-01-14 12:00:00', 4), (14, '2022-01-15 14:00:00', 2), (15, '2022-01-16 08:00:00', 1),
       (16, '2022-01-17 10:00:00', 3), (17, '2022-01-18 13:00:00', 4), (18, '2022-01-19 09:00:00', 2), (19, '2022-01-20 11:00:00', 1),
       (20, '2022-01-21 10:00:00', 2);

INSERT INTO booking.booking_order_detail_extra (boex_price, boex_qty, boex_subtotal, boex_measure_unit, boex_borde_id, boex_prit_id)
VALUES (100000, 2, 200000, 'people', 1,1),(260000, 3, 600000, 'people', 2, 2), (300000, 1, 300000, 'unit', 3, 3), (400000, 4, 1600000, 'people', 4, 4),
       (500000, 2, 1000000, 'unit', 5,5), (750000, 1, 600000, 'unit', 6, 6), (700000, 3, 2100000, 'people', 7, 7), (800000, 4, 3200000, 'unit', 8, 8),
       (900000, 2, 1800000, 'people', 9,9), (10000000, 1, 1000000, 'people', 10, 10), (1100000, 2, 2200000, 'kg', 11, 11), (1200000, 3, 3600000, 'kg', 12, 12),
       (1300000, 1, 1300000, 'kg',13,13),(10000000000, 4, 5600000, 'kg', 14,14), (1500000, 2, 3000000, 'unit', 15, 15), (1600000, 1, 1600000, 'people', 16, 13),
       (1700000, 3, 5100000, 'people', 17,8),(800000, 4, 7200000, 'kg', 18, 9), (1900000, 2, 3800000, 'people', 19, 7), (2000000, 1, 2000000, 'kg', 20, 12);

INSERT INTO booking.special_offer_coupons (soco_borde_id, soco_spof_id)
VALUES (1, 1), (2, 2), (3, 3), (4,4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10),
       (11, 11), (12, 12), (13, 13), (14, 14), (15, 15), (16, 16), (17, 17), (18, 18), (19, 19), (20, 20);
