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
values(1,'jln.sukagalih','jln.sukajadi',14006,'"{Pasteur:Kota Bandung}"',3),
(2,'jln.Mekar','jln.melati',14006,'"{Cimahi:Kota Cimahi}"',3),
(3,'jln.Sukabungah','jln.suksuka',14006,'"{Leuwi Panjang:Kota Bandung}"',3),
(4,'jln.Melati','jln.jamika',12655,'"{Jamika:Kota Bandung}"',3),
(5,'jln.Kamboja','jln.kopo',10206,'"{Kopo:Kota Bandung}"',3),
(6,'jln.Sudirman','jln.sejahtera',14706,'"{Cipaganti:Kota Bandung}"',3),
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

INSERT INTO master.price_items (prit_name, prit_price, prit_description, prit_type, prit_modified_date)
VALUES 
('Room Rate', 120.99, 'Price per night for standard room', 'Room', NOW()),
('Extra Bed', 20.99, 'Price for extra bed per night', 'Bed', NOW()),
('Breakfast', 8.99, 'Price for breakfast per person per day', 'Food', NOW()),
('Lunch', 12.99, 'Price for lunch per person per day', 'Food', NOW()),
('Dinner', 15.99, 'Price for dinner per person per day', 'Food', NOW()),
('Spa Treatment', 50.99, 'Price for spa treatment per hour', 'Spa', NOW()),
('Fitness Access', 5.99, 'Price for access to fitness center per day', 'Fitness', NOW()),
('Parking Fee', 10.99, 'Price for valet parking per day', 'Parking', NOW()),
('Early Check-in', 25.99, 'Price for early check-in', 'Check-in', NOW()),
('Late Check-out', 25.99, 'Price for late check-out', 'Check-out', NOW()),
('Luggage Storage', 2.99, 'Price for luggage storage per bag per day', 'Storage', NOW()),
('Business Center Service', 4.99, 'Price for business center service per hour', 'Business', NOW()),
('Room Service', 7.99, 'Price for room service per order', 'Service', NOW()),
('Pool Access', 2.99, 'Price for access to pool per day', 'Pool', NOW()),
('Alcoholic Beverage', 6.99, 'Price for alcoholic beverage per glass', 'Alcohol', NOW());

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


-- INSERT TABLE USERS
-- INSERT TO TABLE users.roles
INSERT INTO users.roles(role_name)
VALUES ('Guest'),
('Manager'),
('Office Boy'),
('Admin'),
('User');

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
'+6281212499837',
1,
'2023/01/08 03:00:00'
), 
(
'Fadli Pratama Muhti',
'C', --Corporate
'MuhtiCorporate',
'fadlipratamamuhti@gmail.com',
'+6289342968303',
1,
'2023/01/08 02:00:00'
), 
(
'Firly Isnaeni Muhti',
'I', --Individual
'muhtiIndividual',
'firlyisnaenimuhti@gmail.com',
'+6283920429405',
1,
'2023/01/07 01:00:00'
), 
(
'Fitrya Muhti',
'T', --Travel Agent
'muhtiTravel',
'fitryamuhti@gmail.com',
'+6285830596205',
1,
'2023/01/06 00:00:00'
), 
(
'Uzumaki Naruto',
'C', --Corporate
'shinobiCorporate',
'uzumakinaruto@gmail.com',
'+6284320985945',
1,
'2023/01/05 23:00:00'
), 
(
'Uchiha Sasuke',
'I', --Individual
'shinobiIndividual',
'uchihasasuke@gmail.com',
'+6286565748375',
1,
'2023/01/04 22:00:00'
), 
(
'Orochimaru',
'T', --Travel Agent
'shinobiTravel',
'orochimaru@gmail.com',
'+6281029384756',
1,
'2023/01/03 21:00:00'
), 
(
'Kakashi Hatake',
'C', --Corporate
'shinobiCorporate',
'kakashihatake@gmail.com',
'+6288745095382',
1,
'2023/01/02 20:00:00'
), 
(
'Uchiha Itachi',
'I', --Individual
'shinobiIndividual',
'uchihaitachi@gmail.com',
'+6288473994839',
1,
'2023/01/01 19:00:00'
), 
(
'Senju Tsunade',
'T', --Travel Agent
'shinobiTravel',
'senjutsunade@gmail.com',
'+62846392058396',
1,
'2023/01/02 18:00:00'
), 
(
'Uzumaki Nagato',
'C', --Corporate
'shinobiCorporate',
'uzumakinagato@gmail.com',
'+6284590567834',
1,
'2023/01/03 17:00:00'
), 
(
'Uchiha Obito',
'I', --Individual
'shinobiIndividual',
'uchihaobito@gmail.com',
'+6281212495467',
1,
'2023/01/04 16:00:00'
), 
(
'Sai',
'T', --Travel Agent
'shinobiTravel',
'sai@gmail.com',
'+6281211234837',
1,
'2023/01/05 15:00:00'
), 
(
'Yahiko',
'C', --Corporate
'shinobiCorporate',
'yahiko@gmail.com',
'+6281234499837',
1,
'2023/01/06 14:00:00'
), 
(
'Hoshigaki Kisame',
'I', --Individual
'shinobiIndividual',
'hoshigakikisame@gmail.com',
'+6281214321837',
1,
'2023/01/07 13:00:00'
), 
(
'Jiraiya',
'T', --Travel Agent
'shinobiTravel',
'jiraiya@gmail.com',
'+6281212497654',
1,
'2023/01/08 12:00:00'
), 
(
'Senju Tobirama',
'C', --Corporate
'shinobiCorporate',
'senjutobirama@gmail.com',
'+6284538798967',
1,
'2023/01/07 11:00:00'
), 
(
'Uchiha Shisui',
'I', --Individual
'shinobiIndividual',
'uchihashisui@gmail.com',
'+6281456799837',
1,
'2023/01/06 10:00:00'
), 
(
'Yakushi Kabuto',
'T', --Travel Agent
'shinobiTravel',
'yakushikabuto@gmail.com',
'+6285634344526',
1,
'2023/01/05 09:00:00'
), 
(
'Namikaze Minato',
'C', --Corporate
'shinobiCorporate',
'namikazeminato@gmail.com',
'+62812124934627',
1,
'2023/01/04 08:00:00'
), 
(
'Rock Lee',
'I', --Individual
'shinobiIndividual',
'lee@gmail.com',
'+62835462897685',
1,
'2023/01/03 07:00:00'
), 
(
'Momochi Zabuza',
'T', --Travel Agent
'shinobiTravel',
'momochizabuza@gmail.com',
'+6285634123456',
1,
'2023/01/05 09:00:00'
), 
(
'Senju Hashirama',
'C', --Corporate
'shinobiCorporate',
'senjuhashirama@gmail.com',
'+62812124912345',
1,
'2023/01/04 08:00:00'
), 
(
'Hyuuga Neji',
'I', --Individual
'shinobiIndividual',
'hyuuganeji@gmail.com',
'+62835462899837',
1,
'2023/01/03 07:00:00'
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
(24,5);

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
(24, '$2b$10$UX4ETs6/ojMv2CP.IZQlz.B79ZMtQHdFVbNgktC95Pn.ZKxk3KUPi','bcrypt');

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
(24,'SILVER','2020/10/12',26,'expired');

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
(24,26,'R','2020/10/12');

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
('345678910111213','1995/01/12','Direktur Teknik 1','S','M',1,1),
('345678910111214','195/01/12','Direktur Keuangan 1','M','M',1,2),
('345678910111215','2004/01/04','Direktur Personalia 1','S','F',1,3),
('345678910111216','2013/09/29','Direktur Operasional 1','M','F',1,4),
('345678910111217','1996/01/11','Direktur Teknik 2','S','M',1,5),
('345678910111218','1997/02/12','Direktur Keuangan 2','M','M',2,6),
('345678910111219','1998/03/13','Direktur Personalia 2','S','M',3,7),
('345678910111220','1999/04/14','Direktur Operasional 2','M','M',4,8),
('345678910111221','1995/05/15','Direktur Teknik 3','S','F',5,9),
('345678910111222','1996/06/16','Direktur Keuangan 3','M','M',6,10),
('345678910111223','1997/01/17','Direktur Personalia 3','M','M',7,11),
('345678910111224','1998/08/18','Direktur Operasional 3','S','M',8,12),
('345678910111225','1999/09/19','Manager Finance','M','M',9,13),
('345678910111226','1995/10/20','Manager Personalia','M','M',10,14),
('345678910111227','1991/01/21','Manager Purchasing','M','M',11,15),
('345678910111228','1992/02/22','Office Boy','S','M',12,16),
('345678910111229','1993/03/23','Office Boy','M','M',13,17),
('345678910111230','1994/04/24','Office Boy','S','M',14,18),
('345678910111231','1995/05/25','Manager Teknik','M','M',15,19),
('345678910111232','1996/06/26','Staff Teknik','M','M',16,20),
('345678910111233','1997/07/27','Staff Teknik','S','M',17,21),
('345678910111234','1998/08/28','Staff Finance','M','M',18,22),
('345678910111235','1999/09/29','Staff Personalia','S','M',19,23),
('345678910111236','2000/10/30','Staff Purchasing','M','M',20,24);

-- INSERT TABLE HOTEL

INSERT INTO hotel.hotels(hotel_name, hotel_description,hotel_rating_star,hotel_phonenumber, hotel_modified_date, hotel_addr_id) 
values('green watana1','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain di Gumati Water Park, 11 km dari Istana Bogor yang megah, dan 13 km dari stasiun kereta Bogor.',4,'08788798765','1970-01-01 00:00:00',1),
('green watana2','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain di Gumati Water Park, 11 km dari Istana Bogor yang megah, dan 13 km dari stasiun kereta Bogor.',3,'08788798765','1990-01-01 00:00:00',2),
('green watana3','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain di Gumati Water Park, 11 km dari Istana Bogor yang megah, dan 13 km dari stasiun kereta Bogor.',3,'08788798765','1990-01-01 00:00:00',3),
('green watana4','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain di Gumati Water Park, 11 km dari Istana Bogor yang megah, dan 13 km dari stasiun kereta Bogor.',3,'08788798765','1990-01-01 00:00:00',4),
('green watana5','Hotel santai yang terletak di tengah taman yang rimbun dengan panorama Gunung Pancar ini berjarak 3 km dari kolam renang dan taman bermain di Gumati Water Park, 11 km dari Istana Bogor yang megah, dan 13 km dari stasiun kereta Bogor.',3,'08788798765','1990-01-01 00:00:00',5);
-- facilities

INSERT INTO hotel.facilities (faci_name, faci_description, faci_max_number, faci_measure_unit, faci_room_number, faci_startdate, faci_endate, faci_low_price, faci_hight_price, faci_rate_price, faci_discount, faci_tax_rate, faci_modified_date, faci_hotel_id, faci_cagro_id)
VALUES ('Restaurant barat', 'Lorem ', 50, 'people', 'A11A ', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,1),
	   ('Restaurant tengah', 'Lorem ', 50, 'people', 'A11B ', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,1),
	   ('Restaurant timur', 'Lorem ', 50, 'people', 'A11C ', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,1),
       ('Restaurant timur', 'restorant center with state-of-the-art equipment', 25, 'people', 'B11A', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,1),
	   ('Restaurant timur', ' restornt Large outdoor swimming pool', 50, 'people', 'A12A', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,1),
       ('Restaurant timur', 'restoran center with state-of-the-art equipment', 25, 'people', 'B121', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,1),
	   ('Restaurant timur', 'restoran outdoor swimming pool', 50, 'people', 'A13A', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,1),
       ('Restaurant tengah', 'restorant center with state-of-the-art equipment', 25, 'people', 'B11B', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,1),
	   ('Restaurant tengah', ' restornt Large outdoor swimming pool', 50, 'people', 'A12B', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,1),
       ('Restaurant tengah', 'restoran center with state-of-the-art equipment', 25, 'people', 'B122', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,1),
	   ('Restaurant tengah', 'restoran outdoor swimming pool', 50, 'people', 'A13B', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,1),
	   
       ('Restaurant barat', 'restorant center with state-of-the-art equipment', 25, 'people', 'B11Y', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,1),
	   ('Restaurant barat', ' restornt Large outdoor swimming pool', 50, 'people', 'A12X', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,1),
       ('Restaurant barat', 'restoran center with state-of-the-art equipment', 25, 'people', 'B12W', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,1),
	   ('Restaurant barat', 'restoran outdoor swimming pool', 50, 'people', 'A13V', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,1),
       ('Room1', 'room center with state-of-the-art equipment', 25, 'people', 'B13U', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,2),
	   ('Room2', 'room outdoor swimming pool', 50, 'people', 'A14T', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',2,2),
       ('Room3', 'room center with state-of-the-art equipment', 25, 'people', 'B14S', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,2),
	   ('Room4', 'room outdoor swimming pool', 50, 'people', 'A15R', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',4,2),
       ('Room5', 'room center with state-of-the-art equipment', 25, 'people', 'B15Q', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,2),
	   ('meeting-room1', 'meeting room outdoor swimming pool', 50, 'people', 'A16P', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',1,3),
       ('meeting-room2', 'meeting roomcenter with state-of-the-art equipment', 25, 'people', 'B16O', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,3),
	   ('meeting-room3', 'meeting roomLarge outdoor swimming pool', 50, 'people', 'A17N', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',3,3),
       ('meeting-room4', 'meeting room center with state-of-the-art equipment', 25, 'people', 'B17M', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,3),
	   ('meeting-room5', 'meeting room outdoor swimming pool', 50, 'people', 'A18L', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',5,3),
       ('GYM1', 'Fitness center with state-of-the-art equipment', 25, 'people', 'B18K', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,4),
	   ('GYM2', 'fitnes Large outdoor swimming pool', 50, 'people', 'A19J', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',2,4),
       ('GYM3', 'Fitness center with state-of-the-art equipment', 25, 'people', 'B19I', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,4),
	   ('GYM4', 'fitnes Large outdoor swimming pool', 50, 'people', 'A20H', '2021-01-01', '2021-12-31', 25, 45, 35, 5, 0.1, '2021-01-01',4,4),
       ('GYM5', 'Fitness center with state-of-the-art equipment', 25, 'people', 'B20G', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,4),
	   ('Aula1', 'aula center with state-of-the-art equipment', 25, 'people', 'B20F', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,5),
	   ('Aula2', 'aula center with state-of-the-art equipment', 25, 'people', 'B20E', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,5),
	   ('Aula3', 'aula center with state-of-the-art equipment', 25, 'people', 'B20D', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,5),
	   ('Aula4', 'aula center with state-of-the-art equipment', 25, 'people', 'B20C', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,5),
	   ('Aula5', 'aula center with state-of-the-art equipment', 25, 'people', 'B20B', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,5),
	   ('SwimingPool1', 'SwimingPoolcenter with state-of-the-art equipment', 25, 'people', 'B20A', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,6),
	   ('SwimingPool2', 'SwimingPools center with state-of-the-art equipment', 25, 'people', 'B209', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,6),
	   ('SwimingPool3', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'B208', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,6),
	   ('SwimingPool4', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'B207', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,6),
	   ('SwimingPool5', 'SwimingPool center with state-of-the-art equipment', 25, 'people', 'B206', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,6),
	   ('Balroom1', 'Balroom with state-of-the-art equipment', 25, 'people', 'B205', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',1,7),
	   ('Balroom2', 'Balroom with state-of-the-art equipment', 25, 'people', 'B204', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',2,7),
	   ('Balroom3', 'Balroom with state-of-the-art equipment', 25, 'people', 'B203', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',3,7),
	   ('Balroom4', 'Balroomcenter with state-of-the-art equipment', 25, 'people', 'B202', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',4,7),
	   ('Balroom5', 'Balroom center with state-of-the-art equipment', 25, 'people', 'B201', '2021-01-01', '2021-12-31', 15, 30, 20, 2, 0.1, '2021-01-01',5,7);
-- facility_photo

INSERT INTO hotel.facility_photos (fapho_faci_id, fapho_thumbnail_filename, fapho_photo_filename, fapho_primary,
fapho_url, fapho_modifield_date)
VALUES (1, 'pool_thumb11.jpg', 'pool1.jpg', '1', 'www.example.com/pool1', '2022-01-01'),
(2, 'pool_thumb22.jpg', 'pool2.jpg', '0', 'www.example.com/pool2', '2022-01-01'),
(3, 'gym_thumb13.jpg', 'gym1.jpg', '1', 'www.example.com/gym1', '2022-01-01'),
(4, 'gym_thumb24.jpg', 'gym2.jpg', '0', 'www.example.com/gym2', '2022-01-01'),
(5, 'pool_thumb15.jpg', 'pool1.jpg', '1', 'www.example.com/pool1', '2022-01-01'),
(6, 'pool_thumb26.jpg', 'pool2.jpg', '0', 'www.example.com/pool2', '2022-01-01'),
(7, 'gym_thumb17.jpg', 'gym1.jpg', '1', 'www.example.com/gym1', '2022-01-01'),
(8, 'gym_thumb28.jpg', 'gym2.jpg', '0', 'www.example.com/gym2', '2022-01-01'),
(9, 'pool_thumb19.jpg', 'pool1.jpg', '1', 'www.example.com/pool1', '2022-01-01'),
(10, 'pool_thumb20.jpg', 'pool2.jpg', '0', 'www.example.com/pool2', '2022-01-01'),
(11, 'gym_thumb1a.jpg', 'gym1.jpg', '1', 'www.example.com/gym1', '2022-01-01'),
(12, 'gym_thumb2b.jpg', 'gym2.jpg', '0', 'www.example.com/gym2', '2022-01-01'),
(13, 'pool_thumb1c.jpg', 'pool1.jpg', '1', 'www.example.com/pool1', '2022-01-01'),
(14, 'pool_thumb2d.jpg', 'pool2.jpg', '0', 'www.example.com/pool2', '2022-01-01'),
(15, 'gym_thumb1e.jpg', 'gym1.jpg', '1', 'www.example.com/gym1', '2022-01-01'),
(16, 'gym_thumb2f.jpg', 'gym2.jpg', '0', 'www.example.com/gym2', '2022-01-01'),
(17, 'pool_thumbg.jpg', 'pool1.jpg', '1', 'www.example.com/pool1', '2022-01-01'),
(18, 'pool_thumb2h.jpg', 'pool2.jpg', '0', 'www.example.com/pool2', '2022-01-01'),
(19, 'gym_thumb1i.jpg', 'gym1.jpg', '1', 'www.example.com/gym1', '2022-01-01'),
(20, 'gym_thumb2j.jpg', 'gym2.jpg', '0', 'www.example.com/gym2', '2022-01-01');

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
VALUES ('Great hotel, friendly staff, and clean rooms', '1', '2021-01-01', 1,1),
('The location was perfect and the views from the room were amazing', '1', '2021-01-02', 2,2),
('The breakfast was delicious and the staff was extremely helpful','0', '2021-01-03', 3,3),
('The room was clean and comfortable, the service was excellent', '1', '2021-01-04', 4,4),
('The hotel was in a great location, close to restaurants and shops', '0', '2021-01-05', 5,5),
('The room was a bit small but overall it was a great stay', '1', '2021-01-06', 3,6),
('The staff was friendly and helpful, the room was comfortable', '0', '2021-01-07', 4,7),
('The hotel was clean and well-maintained, the staff was friendly', '1', '2021-01-08', 2,8),
('The view from the room was amazing, the bed was comfortable', '0', '2021-01-09', 2,9),
('The hotel was in a great location, close to restaurants and shops', '1', '2021-01-10', 4,10),
('The room was clean and comfortable, the staff was friendly', '0', '2021-01-11',2,11),
('Great hotel, friendly staff, and clean rooms', '1', '2021-01-01', 1,12),
('The location was perfect and the views from the room were amazing', '0', '2021-01-02', 2,13),
('The breakfast was delicious and the staff was extremely helpful', '1', '2021-01-03', 4,14),
('The room was clean and comfortable, the service was excellent', '0', '2021-01-04', 4,15),
('The hotel was in a great location, close to restaurants and shops', '1', '2021-01-05', 5,16),
('The room was a bit small but overall it was a great stay', '0', '2021-01-06', 2,17),
('The staff was friendly and helpful, the room was comfortable', '1', '2021-01-07', 3,18),
('The hotel was clean and well-maintained, the staff was friendly', '0', '2021-01-08', 4,19),
('The view from the room was amazing, the bed was comfortable', '1', '2021-01-09', 5,20);

-- Berikut adalah penyesuaian antara departemen dan job role yang mungkin sesuai:

-- Direktur Utama: Tidak terkait dengan departemen tertentu
-- Direktur Keuangan: Finance
-- Direktur Personalia: Human Resources
-- Direktur Teknik: Engineering
-- Direktur Operasional: Operations
-- Manajer Teknik: Engineering
-- Manajer Keuangan: Finance
-- Manajer Personalia: Human Resources
-- Manajer Operasional: Operations
-- Administrasi dan Gudang: Supply Chain
-- Staff Teknik: Engineering, IT, Research and Development, Manufacturing, Quality Assurance
-- Staff Keuangan: Finance, Accounting
-- Staff Personalia: Human Resources, Training
-- Staff Operasional: Operations, Logistics, Purchasing, Manufacturing, Quality Assurance

-- INSERT TABLE HUMANRESOURCE
-- insert to job_role
INSERT INTO humanresource.job_role(joro_name, joro_modified_date) VALUES 
('Direktur Utama', NOW()), --1
('Direktur Teknik', NOW()), --2
('Direktur Keuangan', NOW()), --3
('Direktur Personalia', NOW()), --4
('Direktur Operasional', NOW()), --5
('Manajer Teknik', NOW()), --6
('Manajer Keuangan', NOW()), --7
('Manajer Personalia', NOW()), --8
('Manajer Operasional', NOW()), --9
('Administrasi dan Gudang', NOW()), --10
('Staff Teknik', NOW()), --11
('Staff Keuangan', NOW()), --12
('Staff Personalia', NOW()), --13
('Staff Operasional', NOW()); --14

-- insert data employee
INSERT INTO humanresource.employee(emp_national_id, emp_birth_date, emp_marital_status, emp_gender, 
								   emp_hire_date, emp_salaried_flag, emp_vacation_hours, emp_sickleave_hours, 
								   emp_current_flag, emp_photo, emp_modified_date, emp_emp_id, emp_joro_id) VALUES 
('3525015201880002', '1995-12-12', 'M', 'M', '2020-01-01', 0, 1, 1, 1, 'default.png', NOW(), null, 1),
('3525010510930001', '1995-02-22', 'M', 'M', '2021-06-11', 0, 1, 1, 1, 'default.png', NOW(), 1, 2),  -- Direktur Teknik 1
('3525016005650004', '1991-05-23', 'S', 'F', '2020-06-17', 0, 1, 1, 1, 'default.png', NOW(), 2, 3),  -- Direktur Keuangan 1
('3525015306780002', '1996-01-25', 'M', 'M', '2021-05-18', 0, 1, 1, 1, 'default.png', NOW(), 3, 4),  -- Direktur Personalia 1
('3525016501830002', '1994-03-15', 'M', 'F', '2020-01-16', 0, 1, 1, 1, 'default.png', NOW(), 4, 5),  -- Direktur Operasional 1
('3525011506830001', '1995-08-18', 'S', 'M', '2022-07-20', 0, 1, 1, 1, 'default.png', NOW(), 5, 2),  -- Direktur Teknik 2
('3525017006650078', '1996-08-19', 'S', 'M', '2021-09-22', 0, 1, 1, 1, 'default.png', NOW(), 6, 3),  -- Direktur Keuangan 2
('3525017006620060', '1992-06-11', 'M', 'M', '2021-12-25', 0, 1, 1, 1, 'default.png', NOW(), 7, 4),  -- Direktur Personalia 2
('3525017006950028', '1998-05-15', 'S', 'M', '2020-11-24', 0, 1, 1, 1, 'default.png', NOW(), 8, 5),  -- Direktur Operasional 2
('3525013006580042', '1994-04-08', 'M', 'M', '2020-06-24', 0, 1, 1, 1, 'default.png', NOW(), 9, 2),  -- Direktur Teknik 3	
('3525013006580043', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 10, 3), -- Direktur Keuangan 3	
('3525013006580045', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 11, 4), -- Direktur Personalia 3	
('3525013006580046', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 12, 5), -- Direktur Operasional 3	
('3525013006580047', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 19, 6), -- Manager Teknik (Administrator Web) 	
('3525013006580048', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 20, 11),-- Staff Teknik (Administrator Web)
('3525013006580049', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 21, 11),-- Staff Teknik (Administrator Web)
('3525015212920050', '1995-05-16', 'M', 'M', '2020-02-11', 0, 1, 1, 1, 'default.png', NOW(), 13, 7), -- Manager Keuangan
('3525010609510051', '1996-07-15', 'S', 'F', '2022-04-15', 0, 1, 1, 1, 'default.png', NOW(), 14, 8), -- Manager Personalia
('3525017006750042', '1991-08-25', 'S', 'M', '2020-03-11', 0, 1, 1, 1, 'default.png', NOW(), 15, 9), -- Manager Operasional
('3525017006540043', '1990-05-22', 'M', 'M', '2021-06-22', 0, 1, 1, 1, 'default.png', NOW(), 16, 10),-- OB 
('3525010505720003', '1995-04-02', 'S', 'F', '2021-08-16', 0, 1, 1, 1, 'default.png', NOW(), 17, 10),-- OB
('3525013006640036', '1993-05-08', 'M', 'M', '2020-11-02', 0, 1, 1, 1, 'default.png', NOW(), 18, 10),-- OB
('3525016401830001', '1996-06-06', 'S', 'F', '2022-12-18', 0, 1, 1, 1, 'default.png', NOW(), 22, 12),-- Staff Keuangan
('3525015306880002', '1997-08-01', 'M', 'M', '2020-05-11', 0, 1, 1, 1, 'default.png', NOW(), 23, 13),-- Staff Personalia
('3525013006740032', '1990-07-08', 'S', 'F', '2021-06-12', 0, 1, 1, 1, 'default.png', NOW(), 24, 14);-- Staff Operasional

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
('Human Resources', '2020-01-01'), --1
('Accounting', '2020-01-02'), --2
('Marketing', '2020-01-03'), --3
('Sales', '2020-01-04'), --4
('Customer Service', '2020-01-05'), --5
('IT', '2020-01-06'), --6
('Engineering', '2020-01-07'), --7
('Operations', '2020-01-08'), --8
('Legal', '2020-01-09'), --9
('Research and Development', '2020-01-10'), --10
('Product Management', '2020-01-11'), --11
('Finance', '2020-01-12'), --12
('Supply Chain', '2020-01-13'), --13
('Logistics', '2020-01-14'), --14
('Purchasing', '2020-01-15'), --15
('Manufacturing', '2020-01-16'), --16
('Quality Assurance', '2020-01-17'), --17
('Training', '2020-01-18'), --18
('Safety', '2020-01-19'), --19
('Environmental', '2020-01-20'); --20

-- insert to  humanresource.employee_department_history
INSERT INTO humanresource.employee_department_history (edhi_emp_id, edhi_start_date, edhi_end_date, edhi_modified_date, edhi_dept_id, edhi_shift_id)
VALUES 
(1, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-05-02 00:00:00', 1, 1),
(2, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-06-02 00:00:00', 6, 1), --1 Direktur Teknik 1 (IT)
(3, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-07-02 00:00:00', 2, 1), --2 Direktur Keuangan 1 (Accounting)
(4, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-04-02 00:00:00', 1, 1), --3 Direktur Personalia 1 (Human Resource)
(5, '2022-01-02 00:00:00', '2022-11-27 23:59:59', '2022-05-02 00:00:00', 8, 1), --4 Direktur Operasional 1 (Operations)
(6, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-04-02 00:00:00', 7, 1), --5 Direktur Teknik 2 (Engineering)
(7, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-06-02 00:00:00', 12, 1),--6 Direktur Keuangan 2 (Finance)
(8, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-07-02 00:00:00', 18, 1),--7 Direktur Personalia 2 (Training)
(9, '2022-01-02 00:00:00', '2022-10-07 23:59:59', '2022-04-02 00:00:00', 13, 1),--8 Direktur Operasional 2 (Supply Chain)
(10, '2022-01-02 00:00:00', '2022-06-05 23:59:59', '2022-06-02 00:00:00', 19, 1),--9 Direktur Teknik 3 (Safety)
(11, '2022-01-02 00:00:00', '2022-06-05 23:59:59', '2022-04-02 00:00:00', 4, 1),--10 Direktur Keuangan 3 (Sales)
(12, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-03-02 00:00:00', 10, 1),--11 Direktur Personalia 3 (Research and Development)
(13, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-02-02 00:00:00', 17, 1),--12 Direktur Operasional 3 (Quality Assurance) 
(14, '2022-01-02 00:00:00', '2022-07-05 23:59:59', '2022-08-02 00:00:00', 2, 1), --13 Manager Keuangan 1 (Finance)
(15, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-09-02 00:00:00', 1, 1), --14 Manager Personalia 1 (Human Resource) 
(16, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-04-02 00:00:00', 15, 1), --15 Manager Operasional 1 (Purchasing)
(17, '2022-01-02 00:00:00', '2022-09-02 23:59:59', '2022-08-02 00:00:00', 20, 1),--16 OB (Environmental)
(18, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 20, 2),--17 OB (Environmental) 
(19, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-06-02 00:00:00', 20, 3),--18 OB (Environmental)
(20, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 6, 1), --19 Manager Teknik (IT)
(21, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 6, 2), --20 Staff Teknik (IT)
(22, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 6, 3), --21 Staff Teknik (IT)
(23, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 12, 6), --22 Staff Keuangan 2 (Finance)
(24, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 1, 6), --23 Staff Personalia (Human Resource)
(25, '2022-01-02 00:00:00', '2022-08-07 23:59:59', '2022-07-02 00:00:00', 15, 6); --24 Staff Operations (Purchasing)

-- insert to humanresource.employee_pay_history
INSERT INTO humanresource.employee_pay_history (ephi_emp_id, ephi_rate_change_date, ephi_rate_salary,
ephi_pay_frequence, ephi_modified_date)
VALUES
(1, '2021-01-01', 500000000, 12, '2021-01-01 12:00:00'),
(2, '2021-01-02', 55000000, 12, '2021-01-02 12:00:00'),
(3, '2021-01-03', 60000000, 12, '2021-01-03 12:00:00'),
(4, '2021-01-04', 65000000, 12, '2021-01-04 12:00:00'),
(5, '2021-01-05', 70000000, 12, '2021-01-05 12:00:00'),
(6, '2021-01-06', 750000, 12, '2021-01-06 12:00:00'),
(7, '2021-01-07', 800000, 12, '2021-01-07 12:00:00'),
(8, '2021-01-08', 850000, 12, '2021-01-08 12:00:00'),
(9, '2021-01-09', 900000, 12, '2021-01-09 12:00:00'),
(10, '2021-01-10', 950000, 12, '2021-01-10 12:00:00'),
(11, '2021-01-11', 1000000, 12, '2021-01-11 12:00:00'),
(12, '2021-01-12', 150000, 12, '2021-01-12 12:00:00'),
(13, '2021-01-13', 110000, 12, '2021-01-13 12:00:00'),
(14, '2021-01-14', 115000, 12, '2021-01-14 12:00:00'),
(15, '2021-01-15', 120000, 12, '2021-01-15 12:00:00'),
(16, '2021-01-16', 125000, 12, '2021-01-16 12:00:00'),
(17, '2021-01-17', 130000, 12, '2021-01-17 12:00:00'),
(18, '2021-01-18', 135000, 12, '2021-01-18 12:00:00'),
(19, '2021-01-19', 140300, 12, '2021-01-19 12:00:00'),
(20, '2021-01-20', 145600, 12, '2021-01-20 12:00:00'),
(21, '2021-01-21', 145030, 12, '2021-01-21 12:00:00'),
(22, '2021-01-22', 145000, 12, '2021-01-22 12:00:00'),
(23, '2021-01-23', 145040, 12, '2021-01-23 12:00:00'),
(24, '2021-01-24', 145200, 12, '2021-01-24 12:00:00'),
(25, '2021-01-25', 145010, 12, '2021-01-25 12:00:00');
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
('2021-01-20 12:00:00', 'OPEN', 20),
('2021-01-21 12:00:00', 'CANCELLED', 21),
('2021-01-22 12:00:00', 'OPEN', 22),
('2021-01-23 12:00:00', 'CLOSED', 23),
('2021-01-24 12:00:00', 'OPEN', 24);


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
('Task 20', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 20', 20, 20, 20, 20),
('Task 21', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 21', 1, 1, 1, 1),
('Task 22', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 22', 2, 2, 2, 2),
('Task 23', 'Completed', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 23', 3, 3, 3, 3),
('Task 24', 'In Progress', '2021-01-25 12:00:00', '2021-01-26 12:00:00', 'Note 24', 4, 4, 4, 4);

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