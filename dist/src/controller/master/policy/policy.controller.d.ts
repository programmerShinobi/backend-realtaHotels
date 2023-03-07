import { PolicyService } from 'src/service/master/policy/policy.service';
export declare class PolicyController {
    private readonly PolicyRepository;
    constructor(PolicyRepository: PolicyService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<{
        message: string;
        deleteData: import("typeorm").DeleteResult;
    }>;
}
