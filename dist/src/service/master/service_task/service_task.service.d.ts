import { Repository } from 'typeorm';
import { ServiceTask } from 'entities/ServiceTask';
export declare class ServiceTaskService {
    private ServiceTaskRepository;
    constructor(ServiceTaskRepository: Repository<ServiceTask>);
    getAll(): Promise<any>;
    getById(setaId: number): Promise<any>;
    create(data: ServiceTask): Promise<any>;
    edit(data: ServiceTask, setaId: any): Promise<{
        message: string;
    }>;
    delete(setaId: number): Promise<import("typeorm").DeleteResult>;
}
