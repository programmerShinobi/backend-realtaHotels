import { Repository } from 'typeorm';
import { WorkOrderDetail } from 'entities/WorkOrderDetail';
export declare class WorkOrderDetailService {
    private workOrderDetailRepository;
    constructor(workOrderDetailRepository: Repository<WorkOrderDetail>);
    ucwords(str: string): any;
    findAllWorkOrderDetail(ephiEmp: any): Promise<any>;
    findOneWorkOrderDetail(wodeId: any): Promise<any>;
    createWorkOrderDetail(data: any): Promise<any>;
    updateWorkOrderDetail(wodeId: any, data: any): Promise<any>;
    deleteWorkOrderDetail(data: any): Promise<any>;
    paginationWorkOrderDetail(query?: any): Promise<any>;
    paginateResponse: (data: any, page: any, limit: any) => any;
}
