import { Repository } from 'typeorm';
import { Roles } from 'entities/Roles';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Roles>);
    findAllRoles(): Promise<any>;
    findAllJoinRoles(): Promise<any>;
    findOneRoles(id: number): Promise<any>;
    createRoles(data: Roles): Promise<any>;
    updateRoles(id: number, data: Roles): Promise<any>;
    deleteRoles(id: number): Promise<any>;
}
