import { ServiceTaskService } from 'src/service/master/service_task/service_task.service';
export declare class ServiceTaskController {
    private readonly ServiceTaskRepository;
    constructor(ServiceTaskRepository: ServiceTaskService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
