import { Repository } from 'typeorm';
import { WorkOrders } from 'entities/WorkOrders';
export declare class WorkOrdersService {
    private workorderRepository;
    constructor(workorderRepository: Repository<WorkOrders>);
    ucwords(str: string): any;
    findAllWorkorder(): Promise<any>;
    findOneWorkorder(woroId: any): Promise<any>;
    createWorkorder(data: any): Promise<any>;
    updateWorkorder(woroId: number, data: any): Promise<any>;
    deleteWorkorder(data: any): Promise<any>;
    paginationWorkorder(query?: any): Promise<any>;
    paginateResponse: (data: any, page: any, limit: any) => any;
}
