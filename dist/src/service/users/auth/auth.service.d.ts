import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Users } from 'entities/Users';
import { UserPassword } from 'entities/UserPassword';
import { UserRoles } from 'entities/UserRoles';
export declare class AuthService implements CanActivate {
    private userRepository;
    private userRolesRepository;
    private userPasswordRepository;
    constructor(userRepository: Repository<Users>, userRolesRepository: Repository<UserRoles>, userPasswordRepository: Repository<UserPassword>);
    findEmail(email: string): Promise<any>;
    findPhone(phone: string): Promise<any>;
    login(data: any): Promise<any>;
    canActivate(context: ExecutionContext): Promise<boolean>;
    register(data1: Users, data2: UserRoles, data3: UserPassword): Promise<{
        message: string;
        savedUser: any;
        savedUserRoles: any;
        savedUserPassword: any;
        error?: undefined;
    } | {
        error: any;
        message: any;
        savedUser?: undefined;
        savedUserRoles?: undefined;
        savedUserPassword?: undefined;
    }>;
    registerGuest(data1: Users, data2: UserRoles, data3: UserPassword): Promise<{
        message: string;
        savedUser: any;
        savedUserRoles: any;
        savedUserPassword: any;
        error?: undefined;
    } | {
        error: any;
        message: any;
        savedUser?: undefined;
        savedUserRoles?: undefined;
        savedUserPassword?: undefined;
    }>;
    changePassword(id: any, data: any): Promise<any>;
}
