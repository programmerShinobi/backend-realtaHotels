import { WorkOrderDetailService } from 'src/service/humanresource/work_order_detail/work_order_detail.service';
export declare class WorkOrderDetailController {
    private readonly workOrderDetailService;
    constructor(workOrderDetailService: WorkOrderDetailService);
    findAllWorkOrderDetails(query: any): Promise<any>;
    findAllWorkOrderDetail(woroEmp: any): Promise<any>;
    createWorkOrderDetail(body: any): Promise<any>;
    updateWorkOrderDetail(id: number, body: any): Promise<any>;
    deleteWorkOrderDetail(query: any): Promise<{
        message: string;
        result: any;
    }>;
    paginationWorkOrderDetail(query: any): Promise<any>;
}
