import { Repository } from 'typeorm';
import { WorkOrders } from 'entities/WorkOrders';
export declare class WorkOrdersService {
    private workOrdersRepository;
    constructor(workOrdersRepository: Repository<WorkOrders>);
    findAllWorkOrders(): Promise<any>;
    findOneWorkOrders(woroId: any): Promise<any>;
    createWorkOrders(data: any): Promise<any>;
    updateWorkOrders(woroId: number, data: any): Promise<any>;
    deleteWorkOrders(woroId: number): Promise<any>;
}
