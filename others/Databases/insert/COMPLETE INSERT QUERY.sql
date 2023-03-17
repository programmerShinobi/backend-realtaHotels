-- INSERT TABLE MASTER
insert into master.regions values
(1,'Asia'),
(2,'Africa'),
(3,'Autralia'),
(4,'Antartica'),
(5,'Europe'),
(6,'Green LAnd'),
(7,'Nourt America'),
(8,'South America');

insert into master.country values(1,'Indonesia',1),
(2,'Malaysia',1),
(3,'Jepang',1),
(4,'Tiongkok',1),
(5,'Singapura',1),
(6,'Africa',2),
(7,'Nigeria',2),
(8,'Ghana',2),
(9,'Kenya',2),
(10,'Maroko',2),
(11,'New South Wales',3),
(12,'Northern Teorritory',3),
(13,'South Australia',3),
(14,'Tasmania',3),
(15,'Victoria',3),
(16,'German',5),
(17,'Francies',5),
(18,'Holand',5),
(19,'Belgia',5),
(20,'Swises',5);

insert into master.provinces values(1,'Jakarta',1),
(2,'DKI Jakarta',1),
(3,'Jawa Barat',1),
(4,'Jawa Tengah',1),
(5,'Jawa Timur',1),
(6,'Bali',1),
(7,'Banten',1),
(8,'Sumatera Utara',1),
(9,'Sumatera Selatan',1),
(10,'Sumatera Barat',1),
(11,'Bengkulu',1),
(12,'Riau',1),
(13,'Jambi',1),
(14,'Kalimantan Barat',1),
(15,'Kalimantan Timur',1),
(16,'Kalimantan Selatan',1),
(17,'Kalimantan Tengah',1),
(18,'Kalimantan Utara',1),
(19,'Sulawesi Barat',1),
(20,'Sulawesi Utara',1);

insert into master.address
values
(1, 'Jl. Dr. Djunjunan No.162, Sukagalih, Kec. Sukajadi', 'Bandung', 16616,'"{Alun-Alun:Kota Bandung}"',3),
(2, 'Jl. Pandanaran No.40, Pekunden, Kec. Semarang Tengah', 'Semarang',16236,'"{Alun-Alun:Kota Semarang}"',4),
(3, 'Jl. Sidosermo II No.70a, Sidosermo, Kec. Wonocolo', 'Surabaya',16206,'"{Alun-Alun:Kota Surabaya}"',5),
(4, 'Jl. Raya Karang Bolong No.KM.139, Karang Suraga, Kec. Cinangka', 'Serang' ,16636,'"{Alun-Alun:Kota Serang}"',7),
(5, 'Jl. H. Nawi Raya Jl. Radio Dalam Raya No.1, RT.3/RW.1, Gandaria Utara, Kec. Cilandak', 'Jakarta', 16636,'"{Alun-Alun:Kota Jakarta}"',1),
(6, 'Jl. Indigo Raya Jl. Pahlawan, RT.05/RW.12, Mulyaharja, Kec. Bogor Selatan', 'Bogor',12321,'"{Alun-Alun:Kota Bogor}"',3),
(7,'jln.Merdeka','jln.Asia Afrika',16606,'"{Alun-Alun:Kota Bandung}"',3),
(8,'jln.Dangdeur','jln.Sarijadi',11006,'"{Sarijadi:Kota Bandung}"',3),
(9,'jln.GegerKalong','jln.Sukasari',18006,'"{Polban:Kota Bandung}"',3),
(10,'jln.SetiaBudi','jln.Ledeng',14006,'"{Ledeng:Kota Bandung}"',3),
(11,'jln.Dago','jln.DepatiUkur',14006,'"{Monumen Gasibu:Kota Bandung}"',3),
(12,'jln.BuahBatu','jln.DayeuhKolot',14006,'"{DayeuhKolot:Kota Bandung}"',3),
(13,'jln.Banjaran','jln.Pangalengan',14006,'"{Pangalengan:Kota Bandung}"',3),
(14,'jln.Soreang','jln.Sabilulungan',14006,'"{Soreang:Kota Bandung}"',3),
(15,'jln.AhmadYadi','jln.Holis',14006,'"{Holis:Kota Bandung}"',3),
(16,'jln.SuryaSumantri','jln.LemahNeneut',14006,'"{Maranatha:Kota Bandung}"',3),
(17,'jln.Citatah','jln.Citatah5',18899,'"{StoneGarden: Kab.Bandung}"',3),
(18,'jln.Rajamandala','jln.Raya Raja Saleh',15606,'"{Raja Saleh: kab.Bandung}"',3),
(19,'jln.Kapten Iskandar','jln.IPTEK WORD',16788,'"{Parahyangan City : Kab.Bandung}"',3),
(20,'jln.Cimindi','jln.Cibabat',16300,'"{Cibabat : Kota Bandung}"',3);

insert into master.category_group
values(1,'Restaurant','Facility','HaveFun','Res.jpg','https://hotel_realta/facility/restaurant/res.jpg'),
(2,'Room','Facility','HaveFun','Room.jpg','https://hotel_realta/facility/room/room.jpg'),
(3,'Meeting-Room','Facility','HaveFun','Meet-Room.jpg','https://hotel_realta/facility/Meeting_Room/res.jpg'),
(4,'GYM','Facility','HaveFun','Gym.jpg','https://hotel_realta/facility/Gym/Gym.jpg'),
(5,'Aula','Facility','HaveFun','Aula.jpg','https://hotel_realta/facility/Aula/aula.jpg'),
(6,'SwimmingPool','Facility','HaveFun','SMP.jpg','https://hotel_realta/facility/SwimmingPool/SMP.jpg'),
(7,'Balroom','Facility','HaveFun','BR.jpg','https://hotel_realta/facility/Balroom/BR.jpg');

INSERT INTO master.policy (poli_name, poli_description)
VALUES 
('Check-in Policy', 'Check-in time is at 2:00 PM, early check-in is subject to availability'),
('Cancellation Policy', 'Cancellations must be made 48 hours prior to arrival to avoid charges'),
('Pet Policy', 'Pets are not allowed in the hotel'),
('Smoking Policy', 'Smoking is not permitted inside the hotel'),
('Child Policy', 'Children under 12 years old stay for free when using existing bedding'),
('Extra Bed Policy', 'Extra beds are available for an additional charge'),
('Wifi Policy', 'Complimentary WiFi is available in all guest rooms'),
('Parking Policy', 'Valet parking is available for a fee'),
('Food Policy', 'All-day dining is available in the hotel restaurant'),
('Check-out Policy', 'Check-out time is at 12:00 PM, late check-out is subject to availability'),
('Payment Policy', 'We accept all major credit cards and cash'),
('Fitness Policy', 'Complimentary access to the fitness center is available for guests'),
('Pool Policy', 'The pool is open from 6:00 AM to 10:00 PM'),
('Spa Policy', 'Spa treatments must be booked in advance'),
('Luggage Policy', 'Luggage storage is available for a fee'),
('Business Policy', 'Business center services are available for guests'),
('Group Policy', 'Group rates are available for parties of 10 or more'),
('Disability Policy', 'Disability-friendly rooms are available upon request'),
('Alcohol Policy', 'Alcoholic beverages are available for purchase in the hotel');
--SNACK FACILITY SOFTDRINK FOOD SERVICE
INSERT INTO master.price_items (prit_name, prit_price, prit_description, prit_type, prit_modified_date)
VALUES 
('Ekstra Bed', 200000, 'Harga untuk tambahan tempat tidur per malam', 'FACILITY', NOW()),
('Sarapan', 80000, 'Harga untuk sarapan per orang per hari', 'FOOD', NOW()),
('Makan Siang', 120000, 'Harga untuk makan siang per orang per hari', 'FOOD', NOW()),
('Makan Malam', 150000, 'Harga untuk makan malam per orang per hari', 'FOOD', NOW()),
('Pengobatan Spa', 500000, 'Harga untuk pengobatan spa per jam', 'SERVICE', NOW()),
('Akses Kebugaran', 60000, 'Harga untuk akses ke pusat kebugaran per hari', 'FACILITY', NOW()),
('Parkir Valet', 100000, 'Harga untuk parkir valet per hari', 'FACILITY', NOW()),
('Check-in Awal', 250000, 'Harga untuk check-in awal', 'SERVICE', NOW()),
('Check-out Terlambat', 250000, 'Harga untuk check-out terlambat', 'SERVICE', NOW()),
('Penyimpanan Bagasi', 30000, 'Harga untuk penyimpanan bagasi per tas per hari', 'FACILITY', NOW()),
('Layanan Pusat Bisnis', 50000, 'Harga untuk layanan pusat bisnis per jam', 'SERVICE', NOW()),
('Layanan Kamar', 80000, 'Harga untuk layanan kamar per pesanan', 'SERVICE', NOW()),
('Akses Kolam Renang', 30000, 'Harga untuk akses ke kolam renang per hari', 'FACILITY', NOW()),
('Minuman Beralkohol', 60000, 'Harga untuk minuman beralkohol per gelas', 'SOFTDRINK', NOW()),
('Laundry', 30000, 'Harga untuk layanan laundry per kg', 'SERVICE', NOW()),
('Wi-Fi', 50000, 'Harga untuk akses Wi-Fi per hari', 'FACILITY', NOW()),
('Gym Instructor', 300000, 'Harga untuk layanan pelatih pribadi per jam', 'FACILITY',NOW());

INSERT INTO master.members (memb_name, memb_description) 
VALUES
('SILVER', 'Akses ke fasilitas hotel dasar'),
('GOLD', 'Akses ke fasilitas dasar dan premium hotel, termasuk sarapan gratis dan upgrade kamar'),
('VIP', 'Akses ke semua fasilitas hotel, termasuk layanan concierge yang didedikasikan dan diskon eksklusif'),
('WIZARD', 'Akses prioritas ke semua fasilitas dan layanan hotel,  concierge pribadi  kamar 24 jam');

INSERT INTO master.service_task (seta_name, seta_seq)
VALUES 
('Cleaning Room', 1),
('Making Bed', 2),
('Restocking Amenities', 3),
('Restocking Minibar', 4),
('Laundry Service', 5),
('Room Service', 6),
('Housekeeping Inspection', 7),
('Deep Cleaning', 8),
('Linen Replacement', 9),
('Pool Maintenance', 10),
('Spa Maintenance', 11),
('Gym Maintenance', 12),
('Lobby Cleaning', 13),
('Public Area Cleaning', 14),
('Landscaping Maintenance', 15),
('Pest Control', 16),
('Fire Safety Inspection', 17),
('Elevator Maintenance', 18),
('Security Patrol', 19),
('Front Desk Assistance', 20);


-- INSERT TO TABLE users.roles
INSERT INTO users.roles(role_name)
VALUES ('Guest'),
('Manager'),
('Office Boy'),
('Admin'),
('Staff'),
('Finance');

-- INSERT TO TABLE users.users
INSERT INTO users.users(
user_full_name,
user_type,
user_company_name,
user_email,
user_phone_number,
user_isverified,
user_modified_date
) VALUES 
(
'Faqih Pratama Muhti',
'T', --Travel Agent
'muhtiTravel',
'faqihpratamamuhti@gmail.com',
'081212499837',
1,
'2023/01/08 03:00:00'
), 
(
'Fadli Pratama Muhti',
'C', --Corporate
'MuhtiCorporate',
'fadlipratamamuhti@gmail.com',
'089342968303',
1,
'2023/01/08 02:00:00'
), 
(
'Firly Isnaeni Muhti',
'I', --Individual
'muhtiIndividual',
'firlyisnaenimuhti@gmail.com',
'083920429405',
1,
'2023/01/07 01:00:00'
), 
(
'Fitrya Muhti',
'T', --Travel Agent
'muhtiTravel',
'fitryamuhti@gmail.com',
'085830596205',
1,
'2023/01/06 00:00:00'
), 
(
'Uzumaki Naruto',
'C', --Corporate
'shinobiCorporate',
'uzumakinaruto@gmail.com',
'084320985945',
1,
'2023/01/05 23:00:00'
), 
(
'Uchiha Sasuke',
'I', --Individual
'shinobiIndividual',
'uchihasasuke@gmail.com',
'086565748375',
1,
'2023/01/04 22:00:00'
), 
(
'Orochimaru',
'T', --Travel Agent
'shinobiTravel',
'orochimaru@gmail.com',
'081029384756',
1,
'2023/01/03 21:00:00'
), 
(
'Kakashi Hatake',
'C', --Corporate
'shinobiCorporate',
'kakashihatake@gmail.com',
'088745095382',
1,
'2023/01/02 20:00:00'
), 
(
'Uchiha Itachi',
'I', --Individual
'shinobiIndividual',
'uchihaitachi@gmail.com',
'088473994839',
1,
'2023/01/01 19:00:00'
), 
(
'Senju Tsunade',
'T', --Travel Agent
'shinobiTravel',
'senjutsunade@gmail.com',
'0846392058396',
1,
'2023/01/02 18:00:00'
), 
(
'Uzumaki Nagato',
'C', --Corporate
'shinobiCorporate',
'uzumakinagato@gmail.com',
'084590567834',
1,
'2023/01/03 17:00:00'
), 
(
'Uchiha Obito',
'I', --Individual
'shinobiIndividual',
'uchihaobito@gmail.com',
'081212495467',
1,
'2023/01/04 16:00:00'
), 
(
'Sai',
'T', --Travel Agent
'shinobiTravel',
'sai@gmail.com',
'081211234837',
1,
'2023/01/05 15:00:00'
), 
(
'Yahiko',
'C', --Corporate
'shinobiCorporate',
'yahiko@gmail.com',
'081234499837',
1,
'2023/01/06 14:00:00'
), 
(
'Hoshigaki Kisame',
'I', --Individual
'shinobiIndividual',
'hoshigakikisame@gmail.com',
'081214321837',
1,
'2023/01/07 13:00:00'
), 
(
'Jiraiya',
'T', --Travel Agent
'shinobiTravel',
'jiraiya@gmail.com',
'081212497654',
1,
'2023/01/08 12:00:00'
), 
(
'Senju Tobirama',
'C', --Corporate
'shinobiCorporate',
'senjutobirama@gmail.com',
'084538798967',
1,
'2023/01/07 11:00:00'
), 
(
'Uchiha Shisui',
'I', --Individual
'shinobiIndividual',
'uchihashisui@gmail.com',
'081456799837',
1,
'2023/01/06 10:00:00'
), 
(
'Yakushi Kabuto',
'T', --Travel Agent
'shinobiTravel',
'yakushikabuto@gmail.com',
'085634344526',
1,
'2023/01/05 09:00:00'
), 
(
'Namikaze Minato',
'C', --Corporate
'shinobiCorporate',
'namikazeminato@gmail.com',
'0812124934627',
1,
'2023/01/04 08:00:00'
), 
(
'Rock Lee',
'I', --Individual
'shinobiIndividual',
'lee@gmail.com',
'0835462897685',
1,
'2023/01/03 07:00:00'
), 
(
'Momochi Zabuza',
'T', --Travel Agent
'shinobiTravel',
'momochizabuza@gmail.com',
'085634123456',
1,
'2023/01/05 09:00:00'
), 
(
'Senju Hashirama',
'C', --Corporate
'shinobiCorporate',
'senjuhashirama@gmail.com',
'0812124912345',
1,
'2023/01/04 08:00:00'
), 
(
'Hyuuga Neji',
'I', --Individual
'shinobiIndividual',
'hyuuganeji@gmail.com',
'0835462899837',
1,
'2023/01/03 07:00:00'
),
(
'Realta Group',
'C', --Corporate
'RealtaCorporate',
'realtagroup@gmail.com',
'0835462899831',
1,
'2023/03/05 14:49:00'
);

-- INSERT TO TABLE users.user_roles
INSERT INTO users.user_roles
(usro_user_id,usro_role_id)
VALUES
--Travel Agency
--Corporate
--Individual
(1,1),
(2,1),
(3,1),
(4,1),
(5,1),
(6,1),
(7,1),
(8,1),
(9,1),
(10,1),
(11,1),
(12,1),
(13,2),
(14,2),
(15,2),
(16,3),
(17,3),
(18,3),
(19,4),
(20,4),
(21,4),
(22,5),
(23,5),
(24,5),
(25,6);

-- INSERT TO TABLE users.user_password
INSERT INTO users.user_password
(
uspa_user_id,
uspa_passwordHash,
uspa_passwordSalt
)
VALUES -- P@ssword!12345
(1, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(2, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(3, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(4, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(5, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(6, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(7, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(8, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(9, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(10, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(11, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(12, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(13, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(14, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(15, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(16, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(17, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(18, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(19, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(20, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(21, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(22, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(23, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(24, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt'),
(25, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt');

-- INSERT TO TABLE users.user_members
INSERT INTO users.user_members
(
usme_user_id,
usme_memb_name,
-- SILVER / GOLD / VIP / WIZARD
usme_promote_date,usme_points,
usme_type -- default / expired
)
VALUES
(1,'WIZARD','2023/01/12',32,'default'),
(1,'VIP','2022/12/12',30,'expired'),
(1,'GOLD','2021/11/12',28,'expired'),
(1,'SILVER','2020/10/12',26,'expired'),

(2,'WIZARD','2023/01/12',32,'default'),
(2,'VIP','2022/12/12',30,'expired'),
(2,'GOLD','2021/11/12',28,'expired'),
(2,'SILVER','2020/10/12',26,'expired'),

(3,'WIZARD','2023/01/12',32,'default'),
(3,'VIP','2022/12/12',30,'expired'),
(3,'GOLD','2021/11/12',28,'expired'),
(3,'SILVER','2020/10/12',26,'expired'),

(4,'WIZARD','2023/01/12',32,'default'),
(4,'VIP','2022/12/12',30,'expired'),
(4,'GOLD','2021/11/12',28,'expired'),
(4,'SILVER','2020/10/12',26,'expired'),

(5,'WIZARD','2023/01/12',32,'default'),
(5,'VIP','2022/12/12',30,'expired'),
(5,'GOLD','2021/11/12',28,'expired'),
(5,'SILVER','2020/10/12',26,'expired'),

(6,'WIZARD','2023/01/12',32,'default'),
(6,'VIP','2022/12/12',30,'expired'),
(6,'GOLD','2021/11/12',28,'expired'),
(6,'SILVER','2020/10/12',26,'expired'),

(7,'WIZARD','2023/01/12',32,'default'),
(7,'VIP','2022/12/12',30,'expired'),
(7,'GOLD','2021/11/12',28,'expired'),
(7,'SILVER','2020/10/12',26,'expired'),

(8,'WIZARD','2023/01/12',32,'default'),
(8,'VIP','2022/12/12',30,'expired'),
(8,'GOLD','2021/11/12',28,'expired'),
(8,'SILVER','2020/10/12',26,'expired'),

(9,'WIZARD','2023/01/12',32,'default'),
(9,'VIP','2022/12/12',30,'expired'),
(9,'GOLD','2021/11/12',28,'expired'),
(9,'SILVER','2020/10/12',26,'expired'),

(10,'WIZARD','2023/01/12',32,'default'),
(10,'VIP','2022/12/12',30,'expired'),
(10,'GOLD','2021/11/12',28,'expired'),
(10,'SILVER','2020/10/12',26,'expired'),

(11,'WIZARD','2023/01/12',32,'default'),
(11,'VIP','2022/12/12',30,'expired'),
(11,'GOLD','2021/11/12',28,'expired'),
(11,'SILVER','2020/10/12',26,'expired'),

(12,'WIZARD','2023/01/12',32,'default'),
(12,'VIP','2022/12/12',30,'expired'),
(12,'GOLD','2021/11/12',28,'expired'),
(12,'SILVER','2020/10/12',26,'expired'),

(13,'WIZARD','2023/01/12',32,'default'),
(13,'VIP','2022/12/12',30,'expired'),
(13,'GOLD','2021/11/12',28,'expired'),
(13,'SILVER','2020/10/12',26,'expired'),

(14,'WIZARD','2023/01/12',32,'default'),
(14,'VIP','2022/12/12',30,'expired'),
(14,'GOLD','2021/11/12',28,'expired'),
(14,'SILVER','2020/10/12',26,'expired'),

(15,'WIZARD','2023/01/12',32,'default'),
(15,'VIP','2022/12/12',30,'expired'),
(15,'GOLD','2021/11/12',28,'expired'),
(15,'SILVER','2020/10/12',26,'expired'),

(16,'WIZARD','2023/01/12',32,'default'),
(16,'VIP','2022/12/12',30,'expired'),
(16,'GOLD','2021/11/12',28,'expired'),
(16,'SILVER','2020/10/12',26,'expired'),

(17,'WIZARD','2023/01/12',32,'default'),
(17,'VIP','2022/12/12',30,'expired'),
(17,'GOLD','2021/11/12',28,'expired'),
(17,'SILVER','2020/10/12',26,'expired'),

(18,'WIZARD','2023/01/12',32,'default'),
(18,'VIP','2022/12/12',30,'expired'),
(18,'GOLD','2021/11/12',28,'expired'),
(18,'SILVER','2020/10/12',26,'expired'),

(19,'WIZARD','2023/01/12',32,'default'),
(19,'VIP','2022/12/12',30,'expired'),
(19,'GOLD','2021/11/12',28,'expired'),
(19,'SILVER','2020/10/12',26,'expired'),

(20,'WIZARD','2023/01/12',32,'default'),
(20,'VIP','2022/12/12',30,'expired'),
(20,'GOLD','2021/11/12',28,'expired'),
(20,'SILVER','2020/10/12',26,'expired'),

(21,'WIZARD','2023/01/12',32,'default'),
(21,'VIP','2022/12/12',30,'expired'),
(21,'GOLD','2021/11/12',28,'expired'),
(21,'SILVER','2020/10/12',26,'expired'),

(22,'WIZARD','2023/01/12',32,'default'),
(22,'VIP','2022/12/12',30,'expired'),
(22,'GOLD','2021/11/12',28,'expired'),
(22,'SILVER','2020/10/12',26,'expired'),

(23,'WIZARD','2023/01/12',32,'default'),
(23,'VIP','2022/12/12',30,'expired'),
(23,'GOLD','2021/11/12',28,'expired'),
(23,'SILVER','2020/10/12',26,'expired'),

(24,'WIZARD','2023/01/12',32,'default'),
(24,'VIP','2022/12/12',30,'expired'),
(24,'GOLD','2021/11/12',28,'expired'),
(24,'SILVER','2020/10/12',26,'expired'),

(25,'WIZARD','2023/01/12',32,'default'),
(25,'VIP','2022/12/12',30,'expired'),
(25,'GOLD','2021/11/12',28,'expired'),
(25,'SILVER','2020/10/12',26,'expired');

-- INSERT TO TABLE users.user_bonus_points
INSERT INTO users.user_bonus_points
(
ubpo_user_id,
ubpo_total_points,
ubpo_bonus_type, -- ubpo_bonus_type :
-- R : Rating
-- P : Promote
ubpo_create_on
)
VALUES
(1,32,'P','2023/01/12'),
(1,30,'R','2022/12/12'),
(1,28,'R','2021/11/12'),
(1,26,'R','2020/10/12'),

(2,32,'P','2023/01/12'),
(2,30,'R','2022/12/12'),
(2,28,'R','2021/11/12'),
(2,26,'R','2020/10/12'),

(3,32,'P','2023/01/12'),
(3,30,'R','2022/12/12'),
(3,28,'R','2021/11/12'),
(3,26,'R','2020/10/12'),

(4,32,'P','2023/01/12'),
(4,30,'R','2022/12/12'),
(4,28,'R','2021/11/12'),
(4,26,'R','2020/10/12'),

(5,32,'P','2023/01/12'),
(5,30,'R','2022/12/12'),
(5,28,'R','2021/11/12'),
(5,26,'R','2020/10/12'),

(6,32,'P','2023/01/12'),
(6,30,'R','2022/12/12'),
(6,28,'R','2021/11/12'),
(6,26,'R','2020/10/12'),

(7,32,'P','2023/01/12'),
(7,30,'R','2022/12/12'),
(7,28,'R','2021/11/12'),
(7,26,'R','2020/10/12'),

(8,32,'P','2023/01/12'),
(8,30,'R','2022/12/12'),
(8,28,'R','2021/11/12'),
(8,26,'R','2020/10/12'),

(9,32,'P','2023/01/12'),
(9,30,'R','2022/12/12'),
(9,28,'R','2021/11/12'),
(9,26,'R','2020/10/12'),

(10,32,'P','2023/01/12'),
(10,30,'R','2022/12/12'),
(10,28,'R','2021/11/12'),
(10,26,'R','2020/10/12'),

(11,32,'P','2023/01/12'),
(11,30,'R','2022/12/12'),
(11,28,'R','2021/11/12'),
(11,26,'R','2020/10/12'),

(12,32,'P','2023/01/12'),
(12,30,'R','2022/12/12'),
(12,28,'R','2021/11/12'),
(12,26,'R','2020/10/12'),

(13,32,'P','2023/01/12'),
(13,30,'R','2022/12/12'),
(13,28,'R','2021/11/12'),
(13,26,'R','2020/10/12'),

(14,32,'P','2023/01/12'),
(14,30,'R','2022/12/12'),
(14,28,'R','2021/11/12'),
(14,26,'R','2020/10/12'),

(15,32,'P','2023/01/12'),
(15,30,'R','2022/12/12'),
(15,28,'R','2021/11/12'),
(15,26,'R','2020/10/12'),

(16,32,'P','2023/01/12'),
(16,30,'R','2022/12/12'),
(16,28,'R','2021/11/12'),
(16,26,'R','2020/10/12'),

(17,32,'P','2023/01/12'),
(17,30,'R','2022/12/12'),
(17,28,'R','2021/11/12'),
(17,26,'R','2020/10/12'),

(18,32,'P','2023/01/12'),
(18,30,'R','2022/12/12'),
(18,28,'R','2021/11/12'),
(18,26,'R','2020/10/12'),

(19,32,'P','2023/01/12'),
(19,30,'R','2022/12/12'),
(19,28,'R','2021/11/12'),
(19,26,'R','2020/10/12'),

(20,32,'P','2023/01/12'),
(20,30,'R','2022/12/12'),
(20,28,'R','2021/11/12'),
(20,26,'R','2020/10/12'),

(21,32,'P','2023/01/12'),
(21,30,'R','2022/12/12'),
(21,28,'R','2021/11/12'),
(21,26,'R','2020/10/12'),

(22,32,'P','2023/01/12'),
(22,30,'R','2022/12/12'),
(22,28,'R','2021/11/12'),
(22,26,'R','2020/10/12'),

(23,32,'P','2023/01/12'),
(23,30,'R','2022/12/12'),
(23,28,'R','2021/11/12'),
(23,26,'R','2020/10/12'),

(24,32,'P','2023/01/12'),
(24,30,'R','2022/12/12'),
(24,28,'R','2021/11/12'),
(24,26,'R','2020/10/12'),

(25,32,'P','2023/01/12'),
(25,30,'R','2022/12/12'),
(25,28,'R','2021/11/12'),
(25,26,'R','2020/10/12');

-- INSERT TO TABLE user_profiles
INSERT INTO users.user_profiles(
uspro_national_id, -- NO. KTP
uspro_birth,
uspro_job_title,
uspro_marital_status, -- M / S => Married / Singel
uspro_gender, -- F / M => Female / Male
uspro_addr_id,
uspro_user_id
)
VALUES
('345678910111213','1995/01/12','Full-Stack Developer','S','M',1,1),
('345678910111214','195/01/12','Mechanical Engineer','M','M',1,2),
('345678910111215','2004/01/04','Accountant','S','F',1,3),
('345678910111216','2013/09/29','Chef','M','F',1,4),
('345678910111217','1996/01/11','UI/UX Designer','S','M',1,5),
('345678910111218','1997/02/12','Database Administrator','M','M',2,6),
('345678910111219','1998/03/13','IT Support','S','M',3,7),
('345678910111220','1999/04/14','Data Analyst','M','M',4,8),
('345678910111221','1995/05/15','Doctor','S','F',5,9),
('345678910111222','1996/06/16','Librarian','M','M',6,10),
('345678910111223','1997/01/17','Entrepreneur','M','M',7,11),
('345678910111224','1998/08/18','Public Relations','S','M',8,12),
('345678910111225','1999/09/19','Programmer','M','M',9,13),
('345678910111226','1995/10/20','Data Analyst','M','M',10,14),
('345678910111227','1991/01/21','Database Administrator','M','M',11,15),
('345678910111228','1992/02/22','Mechanical Engineer','S','M',12,16),
('345678910111229','1993/03/23','Electrical Engineer','M','M',13,17),
('345678910111230','1994/04/24','IT Support','S','M',14,18),
('345678910111231','1995/05/25','Software Engineer','M','M',15,19),
('345678910111232','1996/06/26','Data Analyst','M','M',16,20),
('345678910111233','1997/07/27','IT Support','S','M',17,21),
('345678910111234','1998/08/28','Database Administrator','M','M',18,22),
('345678910111235','1999/09/29','Chef','S','M',19,23),
('345678910111236','2000/10/30','Doctor','M','M',20,24),
('345678910111236','2000/10/30','Finance','S','M',1,25);

-- INSERT TABLE HOTEL

INSERT INTO hotel.hotels(hotel_name, hotel_description,hotel_rating_star,hotel_phonenumber, hotel_modified_date, hotel_addr_id) 
values('The Ritz-Carlton','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',4,'08788798761','1970-01-01 00:00:00',1),
('Four Seasons Resort','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798762','1990-01-01 00:00:00',2),
('The Plaza Hotel','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798763','1990-01-01 00:00:00',3),
('Mandarin Oriental','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798764','1990-01-01 00:00:00',4),
('Emirates Palace','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain.',3,'08788798765','1990-01-01 00:00:00',5);
-- facilities

INSERT INTO hotel.facilities (faci_name, faci_description, faci_max_number, faci_measure_unit, faci_room_number, faci_startdate, faci_endate, faci_low_price, faci_hight_price, 
faci_rate_price, faci_discount, faci_tax_rate, faci_modified_date, faci_hotel_id, faci_cagro_id)
VALUES 
	
	 ('Restaurant timur1', 'Lorem ', 50, 'people', 'RT0001 ', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,1),
     ('Restaurant timur2', 'restorant center with state-of-the-art equipment', 25, 'people', 'RT0002', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,1),
	 ('Restaurant timur3', ' restornt Large outdoor swimming pool', 50, 'people', 'RT0003', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,1),
     ('Restaurant timur4', 'restoran center with state-of-the-art equipment', 25, 'people', 'RT0004', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,1),
	 ('Restaurant timur5', 'restoran outdoor swimming pool', 50, 'people', 'RT0005', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,1),
     ('Restaurant tengah1', 'Lorem ', 50, 'people', 'RT0006 ', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,1),
	 ('Restaurant tengah2', 'restorant center with state-of-the-art equipment', 25, 'people', 'RT0007', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,1),
	 ('Restaurant tengah3', ' restornt Large outdoor swimming pool', 50, 'people', 'RT0008', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,1),
     ('Restaurant tengah4', 'restoran center with state-of-the-art equipment', 25, 'people', 'RT0009', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,1),
	 ('Restaurant tengah5', 'restoran outdoor swimming pool', 50, 'people', 'RT0010', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,1),
	 ('Restaurant barat1', 'Lorem ', 50, 'people', 'RT0011 ', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,1),
     ('Restaurant barat2', 'restorant center with state-of-the-art equipment', 25, 'people', 'RT0012', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,1),
	 ('Restaurant barat3', ' restornt Large outdoor swimming pool', 50, 'people', 'RT0013', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,1),
     ('Restaurant barat4', 'restoran center with state-of-the-art equipment', 25, 'people', 'RT0014', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,1),
	 ('Restaurant barat5', 'restoran outdoor swimming pool', 50, 'people', 'RT0015', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,1),
      ('Ubud Hideaway', 'room center with state-of-the-art equipment', 25, 'beds', 'R0001', '2021-01-01', '2021-12-31', 350000, 700000, 500000, 50000, 0.1, '2021-01-01',1,2),
	 ('Puncak Highland Lodge', 'room outdoor swimming pool', 50, 'beds', 'R0002', '2021-01-01', '2021-12-31',  550000, 700000, 500000, 75000, 0.1, '2021-01-01',2,2),
     ('Bunaken Breeze3', 'room center with state-of-the-art equipment', 25, 'beds', 'R0003', '2021-01-01', '2021-12-31', 850000, 900000, 70000, 75000, 0.1, '2021-01-01',3,2),
	 ('Sumba Safari Tent', 'room outdoor swimming pool', 50, 'beds', 'R0004', '2021-01-01', '2021-12-31', 550000, 700000, 500000, 75000, 0.1, '2021-01-01',4,2),
     ('Batik Deluxe Room', 'room center with state-of-the-art equipment', 25, 'beds', 'R0005', '2021-01-01', '2021-12-31', 650000, 800000, 700000, 75000, 0.1, '2021-01-01',5,2),
	 ('meeting-room1', 'meeting room outdoor swimming pool', 50, 'people', 'MR0001', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,3),
     ('meeting-room2', 'meeting roomcenter with state-of-the-art equipment', 25, 'people', 'MR0002', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,3),
	 ('meeting-room3', 'meeting roomLarge outdoor swimming pool', 50, 'people', 'MR0003', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,3),
     ('meeting-room4', 'meeting room center with state-of-the-art equipment', 25, 'people', 'MR0004', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,3),
	 ('meeting-room5', 'meeting room outdoor swimming pool', 50, 'people', 'MR0005', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,3),
     ('GYM1', 'Fitness center with state-of-the-art equipment', 25, 'people', 'G0001', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,4),
	 ('GYM2', 'fitnes Large outdoor swimming pool', 50, 'people', 'G0002', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,4),
     ('GYM3', 'Fitness center with state-of-the-art equipment', 25, 'people', 'G0003', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,4),
	 ('GYM4', 'fitnes Large outdoor swimming pool', 50, 'people', 'G0004', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,4),
     ('GYM5', 'Fitness center with state-of-the-art equipment', 25, 'people', 'G0005', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,4),
	 ('Aula1', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0001', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,5),
	 ('Aula2', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0002', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,5),
	 ('Aula3', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0003', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,5),
	 ('Aula4', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0004', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,5),
	 ('Aula5', 'aula center with state-of-the-art equipment', 25, 'people', 'AU0005', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,5),
	 ('SwimingPool1', 'SwimingPoolcenter with state-of-the-art equipment', 25, 'people', 'SP0001', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,6),
	 ('SwimingPool2', 'SwimingPools center with state-of-the-art equipment', 25, 'people', 'SP0002', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,6),
	 ('SwimingPool3', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'SP0003', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,6),
	 ('SwimingPool4', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'SP0004', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,6),
	 ('SwimingPool5', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'SP0005', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,6),
	 ('Balroom1', 'Balroom with state-of-the-art equipment', 25, 'people', 'BR0001', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',1,7),
	 ('Balroom2', 'Balroom with state-of-the-art equipment', 25, 'people', 'BR0002', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',2,7),
	 ('Balroom3', 'Balroom with state-of-the-art equipment', 25, 'people', 'BR0003', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',3,7),
	 ('Balroom4', 'Balroomcenter with state-of-the-art equipment', 25, 'people', 'BR0004', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',4,7),
	 ('Balroom5', 'Balroom center with state-of-the-art equipment', 25, 'people', 'BR0005', '2021-01-01', '2021-12-31', 1500000, 3000000, 2000000, 200000, 10000, '2021-01-01',5,7),
	('Raja Ampat Room', 'room center with state-of-the-art equipment', 5, 'beds', 'R0006', '2021-01-01', '2021-12-31', 350000, 450000, 400000, 50000, 10000, '2021-01-01',1,2),
	('Merbabu Suite', 'room center with state-of-the-art equipment', 4, 'beds', 'R0007', '2021-01-01', '2021-12-31', 450000, 550000, 500000, 75000, 10000, '2021-01-01',1,2),
	('Borobudur Chamber', 'room center with state-of-the-art equipment', 5, 'beds', 'R0008', '2021-01-01', '2021-12-31', 350000, 450000, 400000, 50000, 10000, '2021-01-01',2,2),
	('Komodo Retreat', 'room center with state-of-the-art equipment', 5, 'beds', 'R0009', '2021-01-01', '2021-12-31', 400000, 550000, 470000, 75000, 10000, '2021-01-01',2,2),
	('Bali Cliff Villa', 'room center with state-of-the-art equipment', 5, 'beds', 'R0010', '2021-01-01', '2021-12-31', 450000, 550000, 400000, 50000, 10000, '2021-01-01',3,2),
	('Bromo Lodge', 'room center with state-of-the-art equipment', 5, 'beds', 'R0011', '2021-01-01', '2021-12-31', 550000, 750000, 600000, 50000, 10000, '2021-01-01',3,2),
	('Tana Toraja Suite', 'room center with state-of-the-art equipment', 5, 'beds', 'R0012', '2021-01-01', '2021-12-31', 650000, 750000, 500000, 50000, 10000, '2021-01-01',4,2),
	('Gili Island Bungalow', 'room center with state-of-the-art equipment', 5, 'beds', 'R0013', '2021-01-01', '2021-12-31', 450000, 550000, 400000, 50000, 10000, '2021-01-01',4,2),
  ('Mentawai Hut', 'room center with state-of-the-art equipment', 5, 'beds', 'R0014', '2021-01-01', '2021-12-31', 150000, 300000, 230000, 50000, 10000, '2021-01-01',5,2),
	('Wayang Kulit Room', 'room center with state-of-the-art equipment', 5, 'beds', 'R0015', '2021-01-01', '2021-12-31', 250000, 350000, 250000, 75000, 10000, '2021-01-01',5,2);

-- facility_photo

INSERT INTO hotel.facility_photos (fapho_faci_id, fapho_thumbnail_filename, fapho_photo_filename, fapho_primary,
fapho_url, fapho_modifield_date)
VALUES 
(16, 'RoomHotel1', 'RoomHotel1.jpg', '1', '/img/room1.jpg', '2022-01-01'),
(17, 'RoomHotel2', 'RoomHotel2.jpg', '1', '/img/room2.jpg', '2022-01-01'),
(18, 'RoomHotel3', 'RoomHotel3.jpg', '1', '/img/room3.jpg', '2022-01-01'),
(19, 'RoomHotel4', 'RoomHotel4.jpg', '1', '/img/room4.jpg', '2022-01-01'),
(20, 'RoomHotel5', 'RoomHotel5.jpg', '1', '/img/room5.jpg', '2022-01-01'),
(16, 'RoomHotel1', 'RoomHotel1.jpg', '1', '/img/room1.jpg', '2022-01-01'),
(17, 'RoomHotel2', 'RoomHotel2.jpg', '1', '/img/room2.jpg', '2022-01-01'),
(18, 'RoomHotel3', 'RoomHotel3.jpg', '1', '/img/room3.jpg', '2022-01-01'),
(19, 'RoomHotel4', 'RoomHotel4.jpg', '1', '/img/room4.jpg', '2022-01-01'),
(20, 'RoomHotel5', 'RoomHotel5.jpg', '1', '/img/room5.jpg', '2022-01-01'),
(1, 'Restaurant timur1', 'Restauranttimur1.png', '0', '/img/Restauranttimur1.png', '2022-01-01'),
(2, 'Restaurant timur2', 'Restauranttimur2.png', '0', '/img/Restauranttimur2.png', '2022-01-01'),
(3, 'Restaurant timur3', 'Restauranttimur3.png', '0', '/img/Restauranttimur3.png', '2022-01-01'),
(4, 'Restaurant timur4', 'Restauranttimur4.png', '0', '/img/Restauranttimur4.png', '2022-01-01'),
(5, 'Restaurant timur5', 'Restauranttimur5.png', '0', '/img/Restauranttimur5.png', '2022-01-01'),
(6, 'Restaurant tengah1', 'Restaurant tengah1.png', '0', '/img/Restaurant tengah1.png', '2022-01-01'),
(7, 'Restaurant tengah2', 'Restaurant tengah2.png', '0', '/img/Restaurant tengah2.png', '2022-01-01'),
(8, 'Restaurant tengah3', 'Restaurant tengah3.png', '0', '/img/Restaurant tengah3.png', '2022-01-01'),
(9, 'Restaurant tengah4', 'Restaurant tengah4.png', '0', '/img/Restaurant tengah4.png', '2022-01-01'),
(10,'Restaurant tengah5', 'Restaurant tengah5.png', '0', '/img/Restaurant tengah5.png', '2022-01-01'),
(11, 'Restaurant barat1', 'Restaurant barat1.png', '0', '/img/Restaurant barat1.png', '2022-01-01'),
(12, 'Restaurant barat2', 'Restaurant barat2.png', '0', '/img/Restaurant barat2.png', '2022-01-01'),
(13, 'Restaurant barat3', 'Restaurant barat3.png', '0', '/img/Restaurant barat3.png', '2022-01-01'),
(14, 'Restaurant barat4', 'Restaurant barat4.png', '0', '/img/Restaurant barat4.png', '2022-01-01'),
(15, 'Restaurant barat5', 'Restaurant barat5.png', '0', '/img/Restaurant barat5.png', '2022-01-01'),
(21, 'meeting room1', 'meetingRoom1.png', '0', '/img/meetingRoom1.png', '2022-01-01'),
(22, 'meeting room2', 'meetingRoom2.png', '0', '/img/meetingRoom2.png', '2022-01-01'),
(23, 'meeting room3', 'meetingRoom3.png', '0', '/img/meetingRoom3.png', '2022-01-01'),
(24, 'meeting room4', 'meetingRoom4.png', '0', '/img/meetingRoom4.png', '2022-01-01'),
(25, 'meeting room5', 'meetingRoom5.png', '0', '/img/meetingRoom5.png', '2022-01-01'),
(26, 'Gym1', 'Gym1.png', '0', '/img/Gym1.png', '2022-01-01'),
(27, 'Gym2', 'Gym2.png', '0', '/img/Gym2.png', '2022-01-01'),
(28, 'Gym3', 'Gym3.png', '0', '/img/Gym3.png', '2022-01-01'),
(29, 'Gym4', 'Gym4.png', '0', '/img/Gym4.png', '2022-01-01'),
(30,'Gym5', 'Gym5.png', '0', '/img/Gym5.png', '2022-01-01'),
(31, 'Aula1', 'Aula1.png', '0', '/img/Aula1.png', '2022-01-01'),
(32, 'Aula2', 'Aula2.png', '0', '/img/Aula2.png', '2022-01-01'),
(33, 'Aula3', 'Aula3.png', '0', '/img/Aula3.png', '2022-01-01'),
(34, 'Aula4', 'Aula4.png', '0', '/img/Aula4.png', '2022-01-01'),
(35,'Aula5', 'Aula5.png', '0', '/img/Aula5.png', '2022-01-01'),
(36, 'SwimingPool1', 'SwimingPool1.png', '0', '/img/SwimingPool1.png', '2022-01-01'),
(37, 'SwimingPool2', 'SwimingPool2.png', '0', '/img/SwimingPool2.png', '2022-01-01'),
(38, 'SwimingPool3', 'SwimingPool3.png', '0', '/img/SwimingPool3.png', '2022-01-01'),
(39, 'SwimingPool4', 'SwimingPool4.png', '0', '/img/SwimingPool4.png', '2022-01-01'),
(40,'SwimingPool5', 'SwimingPool5.png', '0', '/img/SwimingPool5.png', '2022-01-01'),
(41, 'BallRoom1', 'BallRoom1.png', '0', '/img/BallRoom1.png', '2022-01-01'),
(42, 'BallRoom2', 'BallRoom2.png', '0', '/img/BallRoom2.png', '2022-01-01'),
(43, 'BallRoom3', 'BallRoom3.png', '0', '/img/BallRoom3.png', '2022-01-01'),
(44, 'BallRoom4', 'BallRoom4.png', '0', '/img/BallRoom4.png', '2022-01-01'),
(45,'BallRoom5', 'BallRoom5.png', '0', '/img/BallRoom5.png', '2022-01-01'),
(46, 'RoomHotel1A', 'RoomHotel1A.jpg', '0', '/img/room1A.jpg', '2022-01-01'),
(47, 'RoomHotel1B', 'RoomHotel1B.jpg', '0', '/img/room1B.jpg', '2022-01-01'),
(48, 'RoomHotel2A', 'RoomHotel2A.jpg', '0', '/img/room2A.jpg', '2022-01-01'),
(49, 'RoomHotel2B', 'RoomHotel2B.jpg', '0', '/img/room2B.jpg', '2022-01-01'),
(50, 'RoomHotel3A', 'RoomHotel3A.jpg', '0', '/img/room3A.jpg', '2022-01-01'),
(51, 'RoomHotel3B', 'RoomHotel3B.jpg', '0', '/img/room3B.jpg', '2022-01-01'),
(52, 'RoomHotel4A', 'RoomHotel4A.jpg', '0', '/img/room4A.jpg', '2022-01-01'),
(53, 'RoomHotel4B', 'RoomHotel4B.jpg', '0', '/img/room4B.jpg', '2022-01-01'),
(54, 'RoomHotel5A', 'RoomHotel5A.jpg', '0', '/img/room5A.jpg', '2022-01-01'),
(55, 'RoomHotel5B', 'RoomHotel5B.jpg', '0', '/img/room5B.jpg', '2022-01-01'),
(46, 'RoomHotel1AP', 'RoomHotel1AP.jpg', '1', '/img/room1AP.jpg', '2022-01-01'),
(47, 'RoomHotel1BP', 'RoomHotel1BP.jpg', '1', '/img/room1BP.jpg', '2022-01-01'),
(48, 'RoomHotel2AP', 'RoomHotel2AP.jpg', '1', '/img/room2AP.jpg', '2022-01-01'),
(49, 'RoomHotel2BP', 'RoomHotel2BP.jpg', '1', '/img/room2BP.jpg', '2022-01-01'),
(50, 'RoomHotel3AP', 'RoomHotel3AP.jpg', '1', '/img/room3AP.jpg', '2022-01-01'),
(51, 'RoomHotel3BP', 'RoomHotel3BP.jpg', '1', '/img/room3BP.jpg', '2022-01-01'),
(52, 'RoomHotel4AP', 'RoomHotel4AP.jpg', '1', '/img/room4AP.jpg', '2022-01-01'),
(53, 'RoomHotel4BP', 'RoomHotel4BP.jpg', '1', '/img/room4BP.jpg', '2022-01-01'),
(54, 'RoomHotel5AP', 'RoomHotel5AP.jpg', '1', '/img/room5AP.jpg', '2022-01-01'),
(55, 'RoomHotel5BP', 'RoomHotel5BP.jpg', '1', '/img/room5BP.jpg', '2022-01-01'),
(16, 'RoomHotel1NP', 'RoomHotel1NP.jpg', '0', '/img/room1NP.jpg', '2022-01-01'),
(17, 'RoomHotel2NP', 'RoomHotel2NP.jpg', '0', '/img/room2NP.jpg', '2022-01-01'),
(18, 'RoomHotel3NP', 'RoomHotel3NP.jpg', '0', '/img/room3NP.jpg', '2022-01-01'),
(19, 'RoomHotel4NP', 'RoomHotel4NP.jpg', '0', '/img/room4NP.jpg', '2022-01-01'),
(20, 'RoomHotel5NP', 'RoomHotel5NP.jpg', '0', '/img/room5NP.jpg', '2022-01-01'),
(46, 'RoomHotel1A', 'RoomHotel1A.jpg', '0', '/img/room1A.jpg', '2022-01-01'),
(47, 'RoomHotel1B', 'RoomHotel1B.jpg', '0', '/img/room1B.jpg', '2022-01-01'),
(48, 'RoomHotel2A', 'RoomHotel2A.jpg', '0', '/img/room2A.jpg', '2022-01-01'),
(49, 'RoomHotel2B', 'RoomHotel2B.jpg', '0', '/img/room2B.jpg', '2022-01-01'),
(50, 'RoomHotel3A', 'RoomHotel3A.jpg', '0', '/img/room3A.jpg', '2022-01-01'),
(51, 'RoomHotel3B', 'RoomHotel3B.jpg', '0', '/img/room3B.jpg', '2022-01-01'),
(52, 'RoomHotel4A', 'RoomHotel4A.jpg', '0', '/img/room4A.jpg', '2022-01-01'),
(53, 'RoomHotel4B', 'RoomHotel4B.jpg', '0', '/img/room4B.jpg', '2022-01-01'),
(54, 'RoomHotel5A', 'RoomHotel5A.jpg', '0', '/img/room5A.jpg', '2022-01-01'),
(55, 'RoomHotel5B', 'RoomHotel5B.jpg', '0', '/img/room5B.jpg', '2022-01-01'),
(46, 'RoomHotel1AP', 'RoomHotel1AP.jpg', '1', '/img/room1AP.jpg', '2022-01-01'),
(47, 'RoomHotel1BP', 'RoomHotel1BP.jpg', '1', '/img/room1BP.jpg', '2022-01-01'),
(48, 'RoomHotel2AP', 'RoomHotel2AP.jpg', '1', '/img/room2AP.jpg', '2022-01-01'),
(49, 'RoomHotel2BP', 'RoomHotel2BP.jpg', '1', '/img/room2BP.jpg', '2022-01-01'),
(50, 'RoomHotel3AP', 'RoomHotel3AP.jpg', '1', '/img/room3AP.jpg', '2022-01-01'),
(51, 'RoomHotel3BP', 'RoomHotel3BP.jpg', '1', '/img/room3BP.jpg', '2022-01-01'),
(52, 'RoomHotel4AP', 'RoomHotel4AP.jpg', '1', '/img/room4AP.jpg', '2022-01-01'),
(53, 'RoomHotel4BP', 'RoomHotel4BP.jpg', '1', '/img/room4BP.jpg', '2022-01-01'),
(54, 'RoomHotel5AP', 'RoomHotel5AP.jpg', '1', '/img/room5AP.jpg', '2022-01-01'),
(55, 'RoomHotel5BP', 'RoomHotel5BP.jpg', '1', '/img/room5BP.jpg', '2022-01-01'),
(16, 'RoomHotel1NP', 'RoomHotel1NP.jpg', '0', '/img/room1NP.jpg', '2022-01-01'),
(17, 'RoomHotel2NP', 'RoomHotel2NP.jpg', '0', '/img/room2NP.jpg', '2022-01-01'),
(18, 'RoomHotel3NP', 'RoomHotel3NP.jpg', '0', '/img/room3NP.jpg', '2022-01-01'),
(19, 'RoomHotel4NP', 'RoomHotel4NP.jpg', '0', '/img/room4NP.jpg', '2022-01-01'),
(20, 'RoomHotel5NP', 'RoomHotel5NP.jpg', '0', '/img/room5NP.jpg', '2022-01-01'),
(1, 'Restaurant timur1P', 'Restauranttimur1P.png', '1', '/img/Restauranttimur1P.png', '2022-01-01'),
(2, 'Restaurant timur2P', 'Restauranttimur2P.png', '1', '/img/Restauranttimur2P.png', '2022-01-01'),
(3, 'Restaurant timur3P', 'Restauranttimur3P.png', '1', '/img/Restauranttimur3P.png', '2022-01-01'),
(4, 'Restaurant timur4P', 'Restauranttimur4P.png', '1', '/img/Restauranttimur4P.png', '2022-01-01'),
(5, 'Restaurant timur5P', 'Restauranttimur5P.png', '1', '/img/Restauranttimur5P.png', '2022-01-01'),
(6, 'Restaurant tengah1P', 'Restaurant tengah1P.png', '1', '/img/Restaurant tengah1P.png', '2022-01-01'),
(7, 'Restaurant tengah2P', 'Restaurant tengah2P.png', '1', '/img/Restaurant tengah2P.png', '2022-01-01'),
(8, 'Restaurant tengah3P', 'Restaurant tengah3P.png', '1', '/img/Restaurant tengah3P.png', '2022-01-01'),
(9, 'Restaurant tengah4P', 'Restaurant tengah4P.png', '1', '/img/Restaurant tengah4P.png', '2022-01-01'),
(10,'Restaurant tengah5P', 'Restaurant tengah5P.png', '1', '/img/Restaurant tengah5P.png', '2022-01-01'),
(11, 'Restaurant barat1P', 'Restaurant barat1P.png', '1', '/img/Restaurant barat1P.png', '2022-01-01'),
(12, 'Restaurant barat2P', 'Restaurant barat2P.png', '1', '/img/Restaurant barat2P.png', '2022-01-01'),
(13, 'Restaurant barat3P', 'Restaurant barat3P.png', '1', '/img/Restaurant barat3P.png', '2022-01-01'),
(14, 'Restaurant barat4P', 'Restaurant barat4P.png', '1', '/img/Restaurant barat4P.png', '2022-01-01'),
(15, 'Restaurant barat5P', 'Restaurant barat5P.png', '1', '/img/Restaurant barat5P.png', '2022-01-01'),
(21, 'meeting room1P', 'meetingRoom1P.png', '1', '/img/meetingRoom1P.png', '2022-01-01'),
(22, 'meeting room2P', 'meetingRoom2P.png', '1', '/img/meetingRoom2P.png', '2022-01-01'),
(23, 'meeting room3P', 'meetingRoom3P.png', '1', '/img/meetingRoom3P.png', '2022-01-01'),
(24, 'meeting room4P', 'meetingRoom4P.png', '1', '/img/meetingRoom4P.png', '2022-01-01'),
(25, 'meeting room5P', 'meetingRoom5P.png', '1', '/img/meetingRoom5P.png', '2022-01-01'),
(26, 'Gym1P', 'Gym1P.png', '1', '/img/Gym1P.png', '2022-01-01'),
(27, 'Gym2P', 'Gym2P.png', '1', '/img/Gym2P.png', '2022-01-01'),
(28, 'Gym3P', 'Gym3P.png', '1', '/img/Gym3P.png', '2022-01-01'),
(29, 'Gym4P', 'Gym4P.png', '1', '/img/Gym4P.png', '2022-01-01'),
(30,'Gym5P', 'Gym5P.png', '1', '/img/Gym5P.png', '2022-01-01'),
(31, 'Aula1P', 'Aula1P.png', '1', '/img/Aula1P.png', '2022-01-01'),
(32, 'Aula2P', 'Aula2P.png', '1', '/img/Aula2P.png', '2022-01-01'),
(33, 'Aula3P', 'Aula3P.png', '1', '/img/Aula3P.png', '2022-01-01'),
(34, 'Aula4P', 'Aula4P.png', '1', '/img/Aula4P.png', '2022-01-01'),
(35,'Aula5P', 'Aula5P.png', '1', '/img/Aula5P.png', '2022-01-01'),
(36, 'SwimingPool1P', 'SwimingPool1P.png', '1', '/img/SwimingPool1P.png', '2022-01-01'),
(37, 'SwimingPool2P', 'SwimingPool2P.png', '1', '/img/SwimingPool2P.png', '2022-01-01'),
(38, 'SwimingPool3P', 'SwimingPool3P.png', '1', '/img/SwimingPool3P.png', '2022-01-01'),
(39, 'SwimingPool4P', 'SwimingPool4P.png', '1', '/img/SwimingPool4P.png', '2022-01-01'),
(40,'SwimingPool5P', 'SwimingPool5P.png', '1', '/img/SwimingPool5P.png', '2022-01-01'),
(41, 'BallRoom1P', 'BallRoom1P.png', '1', '/img/BallRoom1P.png', '2022-01-01'),
(42, 'BallRoom2P', 'BallRoom2P.png', '1', '/img/BallRoom2P.png', '2022-01-01'),
(43, 'BallRoom3P', 'BallRoom3P.png', '1', '/img/BallRoom3P.png', '2022-01-01'),
(44, 'BallRoom4P', 'BallRoom4P.png', '1', '/img/BallRoom4P.png', '2022-01-01'),
(45,'BallRoom5P', 'BallRoom5P.png', '1', '/img/BallRoom5P.png', '2022-01-01');




-- faci_preice
INSERT INTO hotel.facility_price_history (faph_faci_id, faph_startdate, faph_enddate, faph_low_price, faph_high_price,
faph_discount, faph_tax_rate, faph_modified_date, faph_user_id)
VALUES (1, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',1),
(2, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',2),
(3, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',3),
(4, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',4),
(5, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',5),
(6, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',6),
(7, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',7),
(8, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',8),
(9, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',9),
(10, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01,',10),
(11, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',11),
(12, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',12),
(13, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',13),
(14, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',14),
(15, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',15),
(16, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',16),
(17, '2021-01-01', '2021-03-31', 25, 35, 10, 0.1, '2021-01-01',17),
(18, '2021-04-01', '2021-06-30', 30, 40, 15, 0.08, '2021-01-01',18),
(19, '2021-01-01', '2021-03-31', 20, 30, 5, 0.05, '2021-01-01',19),
(20, '2021-04-01', '2021-06-30', 25, 35, 10, 0.1, '2021-01-01',20);

-- hotel review
INSERT INTO hotel.hotel_reviews (hore_user_review, hore_rating, hore_created_on, hore_hotel_id, hore_user_id)
VALUES ('Great hotel, friendly staff, and clean rooms', 4, '2021-01-01', 1,1),
('The location was perfect and the views from the room were amazing', 4, '2021-01-02', 2,2),
('The breakfast was delicious and the staff was extremely helpful',5, '2021-01-03', 3,3),
('The room was clean and comfortable, the service was excellent', 4, '2021-01-04', 4,4),
('The hotel was in a great location, close to restaurants and shops', 5, '2021-01-05', 5,5),
('The room was a bit small but overall it was a great stay', 4, '2021-01-06', 3,6),
('The staff was friendly and helpful, the room was comfortable', 5, '2021-01-07', 4,7),
('The hotel was clean and well-maintained, the staff was friendly', 4, '2021-01-08', 2,8),
('The view from the room was amazing, the bed was comfortable', 5, '2021-01-09', 2,9),
('The hotel was in a great location, close to restaurants and shops', 4, '2021-01-10', 4,10),
('The room was clean and comfortable, the staff was friendly', 5, '2021-01-11',2,11),
('Great hotel, friendly staff, and clean rooms', 4, '2021-01-01', 1,12),
('The location was perfect and the views from the room were amazing', 5, '2021-01-02', 2,13),
('The breakfast was delicious and the staff was extremely helpful', 4, '2021-01-03', 4,14),
('The room was clean and comfortable, the service was excellent', 5, '2021-01-04', 4,15),
('The hotel was in a great location, close to restaurants and shops', 4, '2021-01-05', 5,16),
('The room was a bit small but overall it was a great stay', 5, '2021-01-06', 2,17),
('The staff was friendly and helpful, the room was comfortable', 4, '2021-01-07', 3,18),
('The hotel was clean and well-maintained, the staff was friendly', 5, '2021-01-08', 4,19),
('The view from the room was amazing, the bed was comfortable', 4, '2021-01-09', 5,20);

-- INSERT TABLE HUMANRESOURCE
-- insert to job_role
INSERT INTO humanresource.job_role(joro_name, joro_modified_date) VALUES 
('Direktur Utama', NOW()),
('Direktur Keuangan', NOW()),
('Direktur Personalia', NOW()),
('Direktur Teknik', NOW()),
('Direktur Operasional', NOW()),
('Manajer Keuangan', NOW()),
('Manajer Personalia', NOW()),
('Manajer Operasional', NOW()),
('Manajer Teknik', NOW()),
('Administrasi dan Gudang', NOW()),
('Staff', NOW());

-- insert data employee
INSERT INTO humanresource.employee(emp_national_id, emp_birth_date, emp_marital_status, emp_gender, 
								   emp_hire_date, emp_salaried_flag, emp_vacation_hours, emp_sickleave_hours, 
								   emp_current_flag, emp_photo, emp_modified_date, emp_emp_id, emp_joro_id, emp_user_id) VALUES 
('3525015201880002', '1995-12-12', 'M', 'M', '2020-01-01', 0, 1, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/hotel-realta.appspot.com/o/images%2F20230306T025537161Z016598.jpg?alt=media&token=18682d4d-a0f2-4f3a-badc-ab2cfb81596b', NOW(), null, 1, 1),
('3525010510930001', '1995-02-22', 'M', 'M', '2021-06-11', 0, 1, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/hotel-realta.appspot.com/o/images%2F20230311T184606799Z467213.jpg?alt=media&token=bba6c127-f2d2-4563-8d62-0a3796f18262', NOW(), 1, 1, 2),
('3525016005650004', '1991-05-23', 'S', 'F', '2020-06-17', 0, 1, 1, 1, 'https://firebasestorage.googleapis.com/v0/b/hotel-realta.appspot.com/o/images%2F20230310T001520633Z417535.jpeg?alt=media&token=e20f9842-e0c5-4312-81a6-6a79c9337ae7', NOW(), 2, 2, 3),
('3525015306780002', '1996-01-25', 'M', 'M', '2021-05-18', 0, 1, 1, 1, 'user.png', NOW(), 3, 5, 4),
('3525016501830002', '1994-03-15', 'M', 'F', '2020-01-16', 0, 1, 1, 1, 'user.png', NOW(), 4, 6, 5),
('3525011506830001', '1995-08-18', 'S', 'M', '2022-07-20', 0, 1, 1, 1, 'user.png', NOW(), 5, 2, 6),
('3525017006650078', '1996-08-19', 'S', 'M', '2021-09-22', 0, 1, 1, 1, 'user.png', NOW(), 6, 5, 7),
('3525017006620060', '1992-06-11', 'M', 'M', '2021-12-25', 0, 1, 1, 1, 'user.png', NOW(), 7, 8, 8),
('3525017006950028', '1998-05-15', 'S', 'M', '2020-11-24', 0, 1, 1, 1, 'user.png', NOW(), 8, 9, 9),
('3525013006580042', '1994-04-08', 'M', 'M', '2020-06-24', 0, 1, 1, 1, 'user.png', NOW(), 9, 10, 10),
('3525013006580043', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'user.png', NOW(), 10, 11, 11),
('3525015212920003', '1995-05-16', 'M', 'M', '2020-02-11', 0, 1, 1, 1, 'user.png', NOW(), 11, 5, 12),
('3525010609510002', '1996-07-15', 'S', 'F', '2022-04-15', 0, 1, 1, 1, 'user.png', NOW(), 12, 11, 13),
('3525017006750042', '1991-08-25', 'S', 'M', '2020-03-11', 0, 1, 1, 1, 'user.png', NOW(), 13, 11, 14),
('3525017006540043', '1990-05-22', 'M', 'M', '2021-06-22', 0, 1, 1, 1, 'user.png', NOW(), 14, 10, 15),
('3525010505720003', '1995-04-02', 'S', 'F', '2021-08-16', 0, 1, 1, 1, 'user.png', NOW(), 15, 10, 16),
('3525013006640036', '1993-05-08', 'M', 'M', '2020-11-02', 0, 1, 1, 1, 'user.png', NOW(), 16, 10, 17),
('3525016401830001', '1996-06-06', 'S', 'F', '2022-12-18', 0, 1, 1, 1, 'user.png', NOW(), 17, 9, 18),
('3525015306880002', '1997-08-01', 'M', 'M', '2020-05-11', 0, 1, 1, 1, 'user.png', NOW(), 18, 6, 19),
('3525013006740032', '1990-07-08', 'S', 'F', '2021-06-12', 0, 1, 1, 1, 'user.png', NOW(), 19, 9, 20);

-- insert to shift
INSERT INTO humanresource.shift(shift_name, shift_start_time, shift_end_time) VALUES
('Early Morning', '2020-05-06 05:00:00', '2020-05-06  10:00:00'),
('Morning', '2020-05-06 08:00:00', '2020-05-06 13:00:00'),
('Afternoon', '2020-05-06 12:00:00', '2020-05-06 17:00:00'),
('Evening', '2020-05-06 16:00:00', '2020-05-06 21:00:00'),
('Night', '2020-05-06 20:00:00', '2020-05-06 01:00:00'),
('Graveyard', '2020-05-06 22:00:00', '2020-05-06 07:00:00'),
('Weekend Early Morning', '2020-05-06 06:00:00', '2020-05-06 11:00:00'),
('Weekend Morning', '2020-05-06 09:00:00', '2020-05-06 14:00:00'),
('Weekend Afternoon', '2020-05-06 13:00:00', '2020-05-06 18:00:00'),
('Weekend Evening', '2020-05-06 17:00:00', '2020-05-06 22:00:00'),
('Weekend Night', '2020-05-06 21:00:00', '2020-05-06 02:00:00'),
('Weekend Graveyard', '2020-05-06 23:00:00', '2020-05-06 08:00:00'),
('Holiday Early Morning', '2020-05-06 07:00:00', '2020-05-06 12:00:00'),
('Holiday Morning', '2020-05-06 10:00:00', '2020-05-06 15:00:00'),
('Holiday Afternoon', '2020-05-06 14:00:00', '2020-05-06 19:00:00'),
('Holiday Evening', '2020-05-06 18:00:00', '2020-05-06 23:00:00'),
('Holiday Night', '2020-05-07 22:00:00', '2020-05-06 03:00:00'),
('Holiday Graveyard', '2020-05-07 00:00:00', '2020-05-07 05:00:00'),
('Special Event', '2020-05-08 00:00:00', '2020-05-09 00:00:00');

-- insert to department
INSERT INTO humanresource.department(dept_name, dept_modified_date) VALUES
('Human Resources', '2020-01-01'),
('Accounting', '2020-01-02'),
('Marketing', '2020-01-03'),
('Sales', '2020-01-04'),
('Customer Service', '2020-01-05'),
('IT', '2020-01-06'),
('Engineering', '2020-01-07'),
('Operations', '2020-01-08'),
('Legal', '2020-01-09'),
('Research and Development', '2020-01-10'),
('Product Management', '2020-01-11'),
('Finance', '2020-01-12'),
('Supply Chain', '2020-01-13'),
('Logistics', '2020-01-14'),
('Purchasing', '2020-01-15'),
('Manufacturing', '2020-01-16'),
('Quality Assurance', '2020-01-17'),
('Training', '2020-01-18'),
('Safety', '2020-01-19'),
('Environmental', '2020-01-20');

-- insert to  humanresource.employee_department_history
INSERT INTO humanresource.employee_department_history (edhi_emp_id, edhi_start_date, edhi_end_date, edhi_modified_date, edhi_dept_id, edhi_shift_id)
VALUES 
(1, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-05-02 00:00:00', 1, 1),
(2, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-06-02 00:00:00', 2, 2),
(3, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-07-02 00:00:00', 4, 3),
(4, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-04-02 00:00:00', 5, 1),
(5, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-05-02 00:00:00', 6, 2),
(6, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-04-02 00:00:00', 2, 3),
(7, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-06-02 00:00:00', 4, 1),
(8, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-07-02 00:00:00', 5, 2),
(9, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-04-02 00:00:00', 2, 3),
(10, '2022-01-02 00:00:00', '2022-06-05 23:59:59', '2022-06-02 00:00:00', 3, 1),
(11, '2022-01-02 00:00:00', '2022-06-05 23:59:59', '2022-04-02 00:00:00', 4, 2),
(12, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-03-02 00:00:00', 5, 3),
(13, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-02-02 00:00:00', 6, 4),
(14, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-08-02 00:00:00', 7, 5),
(15, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-09-02 00:00:00', 8, 6),
(16, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-04-02 00:00:00', 9, 4),
(17, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-08-02 00:00:00', 2, 3),
(18, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 5, 1),
(19, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-06-02 00:00:00', 2, 5),
(20, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 6, 6);

-- insert to humanresource.employee_pay_history
INSERT INTO humanresource.employee_pay_history (ephi_emp_id, ephi_rate_change_date, ephi_rate_salary,
ephi_pay_frequence, ephi_modified_date)
VALUES
(1, '2021-01-01', 50000, 12, '2021-01-01 12:00:00'),
(2, '2021-01-02', 55000, 12, '2021-01-02 12:00:00'),
(3, '2021-01-03', 60000, 12, '2021-01-03 12:00:00'),
(4, '2021-01-04', 65000, 12, '2021-01-04 12:00:00'),
(5, '2021-01-05', 70000, 12, '2021-01-05 12:00:00'),
(6, '2021-01-06', 75000, 12, '2021-01-06 12:00:00'),
(7, '2021-01-07', 80000, 12, '2021-01-07 12:00:00'),
(8, '2021-01-08', 85000, 12, '2021-01-08 12:00:00'),
(9, '2021-01-09', 90000, 12, '2021-01-09 12:00:00'),
(10, '2021-01-10', 95000, 12, '2021-01-10 12:00:00'),
(11, '2021-01-11', 100000, 12, '2021-01-11 12:00:00'),
(12, '2021-01-12', 105000, 12, '2021-01-12 12:00:00'),
(13, '2021-01-13', 110000, 12, '2021-01-13 12:00:00'),
(14, '2021-01-14', 115000, 12, '2021-01-14 12:00:00'),
(15, '2021-01-15', 120000, 12, '2021-01-15 12:00:00'),
(16, '2021-01-16', 125000, 12, '2021-01-16 12:00:00'),
(17, '2021-01-17', 130000, 12, '2021-01-17 12:00:00'),
(18, '2021-01-18', 135000, 12, '2021-01-18 12:00:00'),
(19, '2021-01-19', 140000, 12, '2021-01-19 12:00:00'),
(20, '2021-01-20', 145000, 12, '2021-01-20 12:00:00');

-- INSERT TO humanresource.work_orders
INSERT INTO humanresource.work_orders (woro_start_date, woro_status, woro_user_id)
VALUES ('2021-01-01 12:00:00', 'CLOSED', 1),
('2021-01-02 12:00:00', 'OPEN', 2),
('2021-01-03 12:00:00', 'CLOSED', 3),
('2021-01-04 12:00:00', 'OPEN', 4),
('2021-01-05 12:00:00', 'CLOSED', 5),
('2021-01-06 12:00:00', 'OPEN', 6),
('2021-01-07 12:00:00', 'CANCELLED', 7),
('2021-01-08 12:00:00', 'OPEN', 8),
('2021-01-09 12:00:00', 'CANCELLED', 9),
('2021-01-10 12:00:00', 'OPEN', 10),
('2021-01-11 12:00:00', 'CANCELLED', 11),
('2021-01-12 12:00:00', 'CANCELLED', 12),
('2021-01-13 12:00:00', 'CLOSED', 13),
('2021-01-14 12:00:00', 'CANCELLED', 14),
('2021-01-15 12:00:00', 'CLOSED', 15),
('2021-01-16 12:00:00', 'CANCELLED', 16),
('2021-01-17 12:00:00', 'CLOSED', 17),
('2021-01-18 12:00:00', 'OPEN', 18),
('2021-01-19 12:00:00', 'CLOSED', 19),
('2021-01-20 12:00:00', 'OPEN', 20);

-- INSERT TO humanresource.work_order_detail 
INSERT INTO humanresource.work_order_detail (wode_task_name, wode_status, wode_start_date, wode_end_date, wode_notes,wode_emp_id, wode_seta_id, wode_faci_id, wode_woro_id)
VALUES ('Task 1', 'In Progress', '2021-01-01 12:00:00', '2021-01-02 12:00:00', 'Note 1', 1, 1, 1, 1),
('Task 2', 'Completed', '2021-01-03 12:00:00', '2021-01-04 12:00:00', 'Note 2', 2, 2, 2, 2),
('Task 3', 'In Progress', '2021-01-05 12:00:00', '2021-01-06 12:00:00', 'Note 3', 3, 3, 3, 3),
('Task 4', 'Completed', '2021-01-07 12:00:00', '2021-01-08 12:00:00', 'Note 4', 4, 4, 4, 4),
('Task 5', 'In Progress', '2021-01-09 12:00:00', '2021-01-10 12:00:00', 'Note 5', 5, 5, 5, 5),
('Task 6', 'Completed', '2021-01-11 12:00:00', '2021-01-12 12:00:00', 'Note 6', 6, 6, 6, 6),
('Task 7', 'In Progress', '2021-01-13 12:00:00', '2021-01-14 12:00:00', 'Note 7', 7, 7, 7, 7),
('Task 8', 'Completed', '2021-01-15 12:00:00', '2021-01-16 12:00:00', 'Note 8', 8, 8, 8, 8),
('Task 9', 'In Progress', '2021-01-17 12:00:00', '2021-01-18 12:00:00', 'Note 9', 9, 9, 9, 9),
('Task 10', 'Completed', '2021-01-19 12:00:00', '2021-01-20 12:00:00', 'Note 10', 10, 10, 10, 10),
('Task 11', 'In Progress', '2021-01-21 12:00:00', '2021-01-22 12:00:00', 'Note 11', 11, 11, 11, 11),
('Task 12', 'Completed', '2021-01-23 12:00:00', '2021-01-24 12:00:00', 'Note 12', 12, 12, 12, 12),
('Task 13', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 13', 13, 13, 13, 13),
('Task 14', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 14', 14, 14, 14, 14),
('Task 15', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 15', 15, 15, 15, 15),
('Task 16', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 16', 16, 16, 16, 16),
('Task 17', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 17', 17, 17, 17, 17),
('Task 18', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 18', 18, 18, 18, 18),
('Task 19', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 19', 19, 19, 19, 19),
('Task 20', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 20', 20, 20, 20, 20);


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
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P', '2023-02-12', 1 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P', '2023-02-12', 2 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 3),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'B','2023-02-12', 4),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 5 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 6 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 7 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 8 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 9 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 10 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 11 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 12 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 13 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 14 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 15 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 16 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'D', '1111111111', 'P','2023-02-12', 17 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 18 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'P','2023-02-12', 19 ),
( 'MENUS#20221127-0001' , '2022-01-07 08:10:05', 5, 2000, 23000, 'CR', '1111111111', 'B','2023-02-12', 20 );
-- Resto_Menus --

-- 1 Restoran Sumatera
-- 2 Restoran Jawa
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

-------------------------------------------------------------- PAYMENT ------------------------------------------------------------------

----------------------- Insert Bank -----------------------
CALL payment.InsertBank('002', 'BRI');
CALL payment.InsertBank('014', 'BCA');
CALL payment.InsertBank('008', 'Mandiri');
CALL payment.InsertBank('009', 'BNI');
CALL payment.InsertBank('022', 'CIMB Niaga');
CALL payment.InsertBank('200', 'BTN');
CALL payment.InsertBank('213', 'BTPN');
CALL payment.InsertBank('013', 'Permata');
CALL payment.InsertBank('147', 'Muamalat');
CALL payment.InsertBank('016', 'Maybank Indonesia');
CALL payment.InsertBank('153', 'Sinarmas');
CALL payment.InsertBank('547', 'BTPN Syariah');
CALL payment.InsertBank('011', 'Danamon');
CALL payment.InsertBank('950', 'Commonwealth');
CALL payment.InsertBank('019', 'Panin Bank');
CALL payment.InsertBank('023', 'UOB Indonesia');
CALL payment.InsertBank('046', 'DBS Indonesia');
CALL payment.InsertBank('490', 'Bank Neo Commerce');
CALL payment.InsertBank('542', 'Bank Jago');
CALL payment.InsertBank('212', 'Bank Woori Saudara Indonesia 1906');

----------------------- Insert Payment Gateaway -----------------------

CALL payment.InsertPaymentGateaway('256', 'GoTo');
CALL payment.InsertPaymentGateaway('255', 'Dompet Realta');

----------------------- Insert User Accounts --------------------------

CALL payment.InsertUserAccount(25, 'Credit Card', 'Realta Group', '1234', 0, 'BCA', '13198989898', 12, 35);
CALL payment.InsertUserAccount(25, 'Fintech', NULL, '1234', 0, 'Dompet Realta');
--------------------------------------------------------------------------------------------------------------------------------------------------

-- Insert Into Vendor
insert into purchasing.vendor (vendor_name,vendor_active,vendor_priority,vendor_register_date,vendor_weburl,vendor_modified_date)
values
('PT. Indonesia Bersih Rapi','1','1','now','www.indonesiabersihrapi.com','now'),
('PT. Securindo Packatama Indonesia,','1','1','now','www.secureparking.co.id','now'),
('Precor Gym', '1','0','now','www.precor.com','now'),
('PT. Klasse Mitra International','1','1','now','www.klasse.co.id','now'),
('PT. Royal Security Indonesia','1','1','now','www.royalsecurity.co.id','now'),
('IKEA Indonesia','1','0','now','www.ikea.co.id','now');

-- Insert Into Stocks
insert into purchasing.stocks (stock_name,stock_description,stock_quantity,stock_reorder_point,stock_used,stock_scrap,stock_size,stock_color,stock_modified_date)
values
('Clear Shampoo', 'Shampoo untuk Keperluan Kamar Hotel',100,20,50,0,'small','white','now'),
('Dettol Body Soap', 'Sabun Cair untuk Keperluan Mandi di Kamar Hotel',100,20,40,0,'Small','Blue','now'),
('Terry Palmer Towel', 'Handuk yang disediakan oleh hotel',100,20,50,0,'small','white','now'),
('Toto Closet', 'Kloset yang ada di hotel',150,20,50,50,'medium','white','now'),
('Toto Urinoir', 'Urinoir yang disediakan di Kamar Mandi Kamar Hotel dan di Toilet Umum Hotel',75,15,50,0,'medium','white','now'),
('Toto Wastafel', 'Wastafel yang ada di kamar hotel dan toilet umum hotel',50,10,30,0,'small','white','now'),
('Polytron Smart TV', 'Smart TV yang ada di kamar kelas President Suite berukuran 45 inch',75,10,30,0,'Big','Black','now'),
('ZTE Router', 'Wifi Router untuk keperluan Hotel',50,20,50,0,'small','white','now'),
('King Koil Edinburgh', 'Kasur untuk President Suite',20,5,10,5,'big','white','now'),
('King Koil Allerton', 'Kasur untuk Kelas dibawah President Suite',100,10,85,0,'medium','white','now'),
('Supreme Plush Pillow Soft','Bantal hotel',300,50,250,20,'small','white','now'),
('Goose Down Bolster','Guling Hotel',300,50,250,20,'long','white','now'),
('King Koil Bed Cover','Bed Cover Untuk Kamar Hotel',150,25,120,25,'big','white','now'),
('Nice Automatic Barrier','Palang Parkir Otomatis',20,5,10,0,'big','orange','now'),
('Parking Booth','Post Parkir Hotel',20,2,15,3,'big','Blue','now'),
('Dell CPU', 'CPU komputer hotel',20,5,15,5,'small','Black','now'),
('Dell Monitor','Monitor Komputer Hotel',20,5,15,5,'small','black','now'),
('Sony CCTV','CCTV Hotel',100,10,80,0,'small','white','now');

