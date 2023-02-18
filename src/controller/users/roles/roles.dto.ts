import { IsEmpty, IsNotEmpty } from "class-validator";

export class bodyRolesDto {
    @IsNotEmpty()
    roleName: string;
    roleId: number;

    @IsEmpty()
    userRoles: any;
}