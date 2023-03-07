import { PolicyCategoryGroupService } from 'src/service/master/policy_category_group/policy_category_group.service';
export declare class PolicyCategoryGroupController {
    private readonly PolicyCategoryGroupServiceRepository;
    constructor(PolicyCategoryGroupServiceRepository: PolicyCategoryGroupService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
