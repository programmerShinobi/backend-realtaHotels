import { IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class bodyUserRolesDto{
    @IsNumber()
    @IsNotEmpty()
    usroUserId: number;
    usroRole: any;
    
    @IsEmpty()
    usroUser: any;

}