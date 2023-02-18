// use DTO => Data Transfer Object

import { IsNotEmpty, IsEnum, IsEmail, IsPhoneNumber, IsDate, IsEmpty, IsNumber } from 'class-validator';

enum Role {
    T = 'T', // Travel Agent
    C = 'C', // Corporate
    I = 'I'  // Individual
}

export class bodyUsersDto {
    @IsEmpty()
    // @IsNumber()
    userId: number;
    
    @IsNotEmpty()
    userFullName: string;
    userCompanyName: string;

    @IsNotEmpty()
    @IsEnum(Role)
    userType: string;

    @IsNotEmpty()
    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    userPhoneNumber: string;   

    @IsEmpty()
    userIsverified: number;
    userModifiedDate: Date;
    bookingOrders: any;
    facilityPriceHistories: any;
    hotelReviews: any;
    orderMenus: any;
    paymentTransactions: any; 
    userAccounts: any;
    userBonusPoints: any;
    userMembers: any;
    userPassword: any; 
    userProfiles: any; 
    userRoles: any;
    workOrders: any;
}

export class bodyUpdateUsersDto {
    
    
    @IsNotEmpty()
    userId: number;
    userFullName: string;
    userCompanyName: string;

    @IsNotEmpty()
    @IsEnum(Role)
    userType: string;

    @IsNotEmpty()
    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    userPhoneNumber: string;   

    @IsEmpty()
    userIsverified: number;
    userModifiedDate: Date;
    bookingOrders: any;
    facilityPriceHistories: any;
    hotelReviews: any;
    orderMenus: any;
    paymentTransactions: any; 
    userAccounts: any;
    userBonusPoints: any;
    userMembers: any;
    userPassword: any; 
    userProfiles: any; 
    userRoles: any;
    workOrders: any;
}

export class detailUsersDto{
    @IsNumber()
    userId: number;
}

export class deleteUsersDto{
    @IsNumber()
    userId: number;
}