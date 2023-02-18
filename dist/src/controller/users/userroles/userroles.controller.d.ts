import { UserrolesService } from 'src/service/users/userroles/userroles.service';
import { bodyUserRolesDto } from './userroles.dto';
export declare class UserrolesController {
    private userRolesService;
    constructor(userRolesService: UserrolesService);
    findAllRuleRoles(): Promise<any>;
    findAllJoinUserRoles(): Promise<any>;
    findOneUserRoles(params: any): Promise<any>;
    createUserRoles(body: bodyUserRolesDto): Promise<any>;
    updateUserRoles(params: any, body: bodyUserRolesDto): Promise<any>;
    deleteUserRoles(params: any): Promise<any>;
}
