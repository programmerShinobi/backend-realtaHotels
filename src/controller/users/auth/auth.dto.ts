import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsPhoneNumber,
  IsStrongPassword,
} from 'class-validator';

export class bodyLoginDto {
  @IsNotEmpty()
  userPassword: string;
}

export class bodyRegister1Dto {
  @IsNotEmpty()
  userFullName: string;

  @IsNotEmpty()
  @IsEmail()
  userEmail: string;

  @IsNotEmpty()
  @IsPhoneNumber()
  userPhoneNumber: any;

  @IsEmpty()
  userId: number;
  userIsverified: number;
  userPassword: any;
  userType: any;
  userCompanyName: any;
  userModifiedDate: Date;
  bookingOrders: any;
  facilityPriceHistories: any;
  hotelReviews: any;
  orderMenus: any;
  paymentTransactions: any;
  userAccounts: any;
  userBonusPoints: any;
  userMembers: any;
  userProfiles: any;
  userRoles: any;
  workOrders: any;
  employees: any;
}

export class bodyRegister2Dto {
  @IsNotEmpty()
  @IsStrongPassword()
  uspaPasswordhash: string;

  @IsEmpty()
  uspaUserId: number;
  uspaPasswordsalt: string;
  uspaUser: any;
}

export class bodyRegisterGuest1Dto {
  @IsNotEmpty()
  @IsPhoneNumber()
  userPhoneNumber: any;

  @IsEmpty()
  userFullName: string;
  userId: number;
  userEmail: string;
  userIsverified: number;
  userPassword: any;
  userType: any;
  userCompanyName: any;
  userModifiedDate: Date;
  bookingOrders: any;
  facilityPriceHistories: any;
  hotelReviews: any;
  orderMenus: any;
  paymentTransactions: any;
  userAccounts: any;
  userBonusPoints: any;
  userMembers: any;
  userProfiles: any;
  userRoles: any;
  workOrders: any;
  employees: any;
}
export class bodyRegisterGuest2Dto {
  @IsNotEmpty()
  // @IsStrongPassword()
  uspaPasswordhash: string;

  @IsEmpty()
  uspaUserId: number;
  uspaPasswordsalt: string;
  uspaUser: any;
}
