import { IsDecimal, IsEmpty, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

enum Type {
    default = 'default',
    expired = 'expired',
}

enum Name {
    SILVER = 'SILVER',
    GOLD = 'GOLD',
    VIP = 'VIP',
    WIZARD = 'WIZARD'
}

export class bodyUserMembersDto {
    @IsNotEmpty()
    @IsEnum(Name)
    usmeMembName: string;

    @IsNotEmpty()
    @IsNumber()
    usmePoints: number;
    usmeUser: number;
    
    @IsNotEmpty()
    @IsEnum(Type)
    usmeType: string;
    
    @IsEmpty()
    usmeId: number;
    usmePromoteDate: Date;

}

export class bodyUpdateUserMembersDto {
    @IsNotEmpty()
    @IsEnum(Name)
    usmeMembName: string;

    @IsNotEmpty()
    @IsNumber()
    usmePoints: number;
    usmeId: number;
    userUser: number;
    
    @IsNotEmpty()
    @IsEnum(Type)
    usmeType: string;

    @IsEmpty()
    usmePromoteDate: Date;

}