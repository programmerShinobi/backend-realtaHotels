import { Repository } from 'typeorm';
import { Policy } from 'entities/Policy';
export declare class PolicyService {
    private PolicyRepository;
    constructor(PolicyRepository: Repository<Policy>);
    getAll(): Promise<any>;
    getById(poliId: number): Promise<any>;
    create(data: Policy): Promise<any>;
    edit(data: Policy, _poliId: number): Promise<{
        message: string;
        editData: import("typeorm").UpdateResult;
    } | {
        message: string;
        editData?: undefined;
    }>;
    delete(poliId: number): Promise<{
        message: string;
        deleteData: import("typeorm").DeleteResult;
    }>;
}
