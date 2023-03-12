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

----------------------- Insert Payment Transaction -----------------------

--  Payment Transaction: Order Menu at Restaurant
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0001', 23000);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0002', 100293);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0003', 593029);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0004', 34500);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0005', 122200);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0006', 350994);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0007', 1285600);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0008', 359282);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0009', 46000);
CALL payment.InsertBookingPaymentTransaction('MENUS#20221127-0010', 76864);

-- Payment Transaction: Room Booking at Hotel
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);
CALL payment.InsertBookingPaymentTransaction(TBA, 76864);

-- Payment Transaction: Top Up
CALL payment.InsertPaymentTransaction('TP', 300000, '751527261');

-- Payment Transaction: Refund
CALL payment.InsertPaymentTransaction('RF', 250000, '383667679');

-- Payment Transaction: Repayment
CALL payment.InsertPaymentTransaction('RPY', 50000, '264253607');