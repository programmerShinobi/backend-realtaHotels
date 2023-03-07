import { JobRoleDto } from './job_role.dto';
import { JobRoleService } from 'src/service/humanresource/job_role/job_role.service';
export declare class JobroleController {
    private readonly jobRoleService;
    constructor(jobRoleService: JobRoleService);
    findAllJobRole(): Promise<any>;
    findOneJobRole(param: any): Promise<any>;
    createJobRole(body: JobRoleDto): Promise<any>;
    updateJobRole(id: number, body: JobRoleDto): Promise<any>;
    deleteJobRole(id: number): Promise<void>;
}
