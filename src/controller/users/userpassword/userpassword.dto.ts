import { IsEmpty, IsNotEmpty, IsStrongPassword } from "class-validator";

export class bodyUserPasswordDto{
    // @IsNotEmpty()
    
    @IsNotEmpty()
    @IsStrongPassword()
    uspaPasswordhash: string;
    
    @IsEmpty()
    uspaUserId: number;
    uspaUser: any;
    uspaPasswordsalt: string
}