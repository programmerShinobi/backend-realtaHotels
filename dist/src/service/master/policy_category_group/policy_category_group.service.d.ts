import { Repository } from 'typeorm';
import { PolicyCategoryGroup } from 'entities/PolicyCategoryGroup';
export declare class PolicyCategoryGroupService {
    private PolicyCategoryGroupRepository;
    constructor(PolicyCategoryGroupRepository: Repository<PolicyCategoryGroup>);
    getAll(): Promise<any>;
    getById(pocaPoliId: number): Promise<any>;
    create(data: PolicyCategoryGroup): Promise<any>;
    edit(data: PolicyCategoryGroup, _pocaPoliId: number): Promise<{
        message: string;
    }>;
    delete(pocaPoliId: number): Promise<import("typeorm").DeleteResult>;
}
