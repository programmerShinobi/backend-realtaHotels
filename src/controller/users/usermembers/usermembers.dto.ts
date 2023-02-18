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
    usmeUserId: number;

    @IsNotEmpty()
    @IsEnum(Type)
    usmeType: string;

    @IsEmpty()
    usmePromoteDate: Date;

}