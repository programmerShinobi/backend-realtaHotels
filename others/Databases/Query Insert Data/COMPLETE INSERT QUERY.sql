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
(1,'WIZARD','2023/01/01',12,'default'),
(2,'WIZARD','2023/01/01',11,'default'),
(3,'WIZARD','2023/01/01',10,'default'),
(4,'VIP','2023/01/01',12,'default'),
(5,'VIP','2023/01/01',11,'default'),
(6,'VIP','2023/01/01',10,'default'),
(7,'GOLD','2023/01/01',12,'default'),
(8,'GOLD','2023/01/01',11,'default'),
(9,'GOLD','2023/01/01',10,'default'),
(10,'SILVER','2023/01/01',12,'default'),
(11,'SILVER','2023/01/01',11,'default'),
(12,'SILVER','2023/01/01',10,'default'),
(13,'WIZARD','2023/01/01',12,'default'),
(14,'WIZARD','2023/01/01',11,'default'),
(15,'WIZARD','2023/01/01',10,'default'),
(16,'VIP','2023/01/01',12,'default'),
(17,'VIP','2023/01/01',11,'default'),
(18,'VIP','2023/01/01',10,'default'),
(19,'GOLD','2023/01/01',12,'default'),
(20,'GOLD','2023/01/01',11,'default'),
(21,'GOLD','2023/01/01',10,'default'),
(22,'SILVER','2023/01/01',12,'default'),
(23,'SILVER','2023/01/01',11,'default'),
(24,'SILVER','2023/01/01',10,'default');

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
(1,32,'R','2023/01/09'),
(2,31,'R','2023/01/09'),
(3,30,'R','2023/01/09'),
(4,32,'P','2023/01/08'),
(5,31,'P','2023/01/08'),
(6,30,'P','2023/01/08'),
(7,32,'R','2023/01/07'),
(8,31,'R','2023/01/07'),
(9,30,'R','2023/01/07'),
(10,32,'P','2023/01/06'),
(11,31,'P','2023/01/06'),
(12,30,'P','2023/01/06'),
(13,32,'R','2023/01/05'),
(14,31,'R','2023/01/05'),
(15,30,'R','2023/01/05'),
(16,32,'P','2023/01/04'),
(17,31,'P','2023/01/04'),
(18,30,'P','2023/01/04'),
(19,32,'R','2023/01/03'),
(20,31,'R','2023/01/03'),
(21,30,'R','2023/01/03'),
(22,32,'P','2023/01/02'),
(23,31,'P','2023/01/02'),
(24,30,'P','2023/01/02');

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
('345678910111233','1997/07/27','IT Suppurt','S','M',17,21),
('345678910111234','1998/08/28','Database Administrator','M','M',18,22),
('345678910111235','1999/09/29','Chef','S','M',19,23),
('345678910111236','2000/10/30','Doctor','M','M',20,24);

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
								   emp_current_flag, emp_photo, emp_modified_date, emp_emp_id, emp_joro_id) VALUES 
('3525015201880002', '1995-12-12', 'M', 'M', '2020-01-01', 0, 1, 1, 1, 'default.png', NOW(), null, 1),
('3525010510930001', '1995-02-22', 'M', 'M', '2021-06-11', 0, 1, 1, 1, 'default.png', NOW(), 1, 1),
('3525016005650004', '1991-05-23', 'S', 'F', '2020-06-17', 0, 1, 1, 1, 'default.png', NOW(), 2, 2),
('3525015306780002', '1996-01-25', 'M', 'M', '2021-05-18', 0, 1, 1, 1, 'default.png', NOW(), 3, 5),
('3525016501830002', '1994-03-15', 'M', 'F', '2020-01-16', 0, 1, 1, 1, 'default.png', NOW(), 4, 6),
('3525011506830001', '1995-08-18', 'S', 'M', '2022-07-20', 0, 1, 1, 1, 'default.png', NOW(), 5, 2),
('3525017006650078', '1996-08-19', 'S', 'M', '2021-09-22', 0, 1, 1, 1, 'default.png', NOW(), 6, 5),
('3525017006620060', '1992-06-11', 'M', 'M', '2021-12-25', 0, 1, 1, 1, 'default.png', NOW(), 7, 8),
('3525017006950028', '1998-05-15', 'S', 'M', '2020-11-24', 0, 1, 1, 1, 'default.png', NOW(), 8, 9),
('3525013006580042', '1994-04-08', 'M', 'M', '2020-06-24', 0, 1, 1, 1, 'default.png', NOW(), 9, 10),
('3525013006580043', '1997-03-06', 'S', 'F', '2021-05-19', 0, 1, 1, 1, 'default.png', NOW(), 10, 11),
('3525015212920003', '1995-05-16', 'M', 'M', '2020-02-11', 0, 1, 1, 1, 'default.png', NOW(), 11, 5),
('3525010609510002', '1996-07-15', 'S', 'F', '2022-04-15', 0, 1, 1, 1, 'default.png', NOW(), 12, 11),
('3525017006750042', '1991-08-25', 'S', 'M', '2020-03-11', 0, 1, 1, 1, 'default.png', NOW(), 13, 11),
('3525017006540043', '1990-05-22', 'M', 'M', '2021-06-22', 0, 1, 1, 1, 'default.png', NOW(), 14, 10),
('3525010505720003', '1995-04-02', 'S', 'F', '2021-08-16', 0, 1, 1, 1, 'default.png', NOW(), 15, 10),
('3525013006640036', '1993-05-08', 'M', 'M', '2020-11-02', 0, 1, 1, 1, 'default.png', NOW(), 16, 10),
('3525016401830001', '1996-06-06', 'S', 'F', '2022-12-18', 0, 1, 1, 1, 'default.png', NOW(), 17, 9),
('3525015306880002', '1997-08-01', 'M', 'M', '2020-05-11', 0, 1, 1, 1, 'default.png', NOW(), 18, 6),
('3525013006740032', '1990-07-08', 'S', 'F', '2021-06-12', 0, 1, 1, 1, 'default.png', NOW(), 19, 9);

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