import { JobRole } from 'entities/JobRole';
import { JobRoleDto } from 'src/controller/humanresource/job_role/job_role.dto';
import { Repository } from 'typeorm';
export declare class JobRoleService {
    private jobRoleRepository;
    constructor(jobRoleRepository: Repository<JobRole>);
    findAllJobRole(): Promise<any>;
    findOneJobRole(joroId: any): Promise<any>;
    createJobRole(data: any): Promise<import("typeorm").InsertResult>;
    updateJobRole(joroId: number, data: JobRoleDto): Promise<import("typeorm").UpdateResult>;
    deleteJobRole(joroId: any): Promise<import("typeorm").DeleteResult>;
}
