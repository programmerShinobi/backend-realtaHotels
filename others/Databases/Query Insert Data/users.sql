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