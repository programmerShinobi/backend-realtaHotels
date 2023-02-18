import { RolesService } from 'src/service/users/roles/roles.service';
import { bodyRolesDto } from './roles.dto';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    findAllRoles(): Promise<any>;
    findAllJoinRoles(): Promise<any>;
    findOneRoles(params: any): Promise<any>;
    createRoles(body: bodyRolesDto): Promise<any>;
    updateRoles(params: any, body: bodyRolesDto): Promise<any>;
    deleteRoles(params: any): Promise<any>;
}
