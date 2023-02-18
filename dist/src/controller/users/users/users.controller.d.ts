import { UsersService } from 'src/service/users/users/users.service';
import { bodyUpdateUsersDto } from './users.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAllUsers(): Promise<any>;
    findAllJoinUsers(): Promise<any>;
    findOneUser(params: any): Promise<any>;
    findOneJoinAllUser(params: any): Promise<any>;
    createUsers(body: any): Promise<any>;
    createUserWithPassword(body1: any, body2: any): Promise<{
        message: string;
        allResults: {
            savedUser: any;
            savedUserPassword: any;
        };
    }>;
    updateUserWithPassword(params: any, body1: any, body2: any): Promise<{
        message: string;
        allResults: {
            savedUser: any;
            savedUserPassword: any;
        };
    }>;
    createAllJoinToUsers(body1: any, body2: any, body3: any, body4: any, body5: any, body6: any): Promise<{
        message: string;
        allResults: {
            savedUser: any;
            savedUserRoles: any;
            savedUserPassword: any;
            savedUserProfiles: any;
            savedUserMembers: any;
            savedUserBonusPoints: any;
        };
    }>;
    updateUsers(params: any, body: bodyUpdateUsersDto): Promise<any>;
    updateAllJoinToUsers(params: any, body1: any, body2: any, body3: any, body4: any, body5: any, body6: any): Promise<{
        message: string;
        allResults: {
            updatedUser: any;
            updatedUserRoles: any;
            updatedUserPassword: any;
            updatedUserBonusPoints: any;
            updatedUserMembers: any;
            updatedUserProfiles: any;
        };
    }>;
    deleteUsers(params: any): Promise<any>;
    deleteAllJoinToUsers(params: any): Promise<{
        message: string;
        allResults: {
            deletedUser: any;
            deletedUserRoles: any;
            deletedUserPassword: any;
            deletedUserProfiles: any;
            deletedUserMembers: any;
            deletedUserBonusPoints: any;
        };
    }>;
}
