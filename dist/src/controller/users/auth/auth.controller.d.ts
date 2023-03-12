import { AuthService } from 'src/service/users/auth/auth.service';
import { UserpasswordService } from 'src/service/users/userpassword/userpassword.service';
import { bodyLoginDto, bodyRegister1Dto, bodyRegister2Dto, bodyRegisterGuest1Dto, bodyRegisterGuest2Dto } from './auth.dto';
export declare class AuthController {
    private userpasswordService;
    private authService;
    constructor(userpasswordService: UserpasswordService, authService: AuthService);
    findPassword(params: any): Promise<any>;
    findEmail(params: any): Promise<any>;
    login(body: bodyLoginDto): Promise<any>;
    register(body1: bodyRegister1Dto, body2: any, body3: bodyRegister2Dto): Promise<{
        message: string;
        savedUser: any;
        savedUserRoles: any;
        savedUserPassword: any;
        savedUserProfiles: any;
        savedUserMembers: any;
        savedUserBonusPoints: any;
        error?: undefined;
    } | {
        error: any;
        message: any;
        savedUser?: undefined;
        savedUserRoles?: undefined;
        savedUserPassword?: undefined;
        savedUserProfiles?: undefined;
        savedUserMembers?: undefined;
        savedUserBonusPoints?: undefined;
    }>;
    registerGuest(body1: bodyRegisterGuest1Dto, body2: any, body3: bodyRegisterGuest2Dto): Promise<{
        message: string;
        savedUser: any;
        savedUserRoles: any;
        savedUserPassword: any;
        savedUserProfiles: any;
        error?: undefined;
    } | {
        error: any;
        message: any;
        savedUser?: undefined;
        savedUserRoles?: undefined;
        savedUserPassword?: undefined;
        savedUserProfiles?: undefined;
    }>;
    changePassword(params: any, body: any): Promise<any>;
    forgotPassword(body: any): Promise<any>;
}
