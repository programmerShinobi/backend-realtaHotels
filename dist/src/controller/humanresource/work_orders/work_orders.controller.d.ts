import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';
export declare class WorkOrdersController {
    private readonly workordersService;
    constructor(workordersService: WorkOrdersService);
    findAllWorkorder(query: any): Promise<any>;
    findOneWorkorder(param: any): Promise<any>;
    createWorkorder(body: any): Promise<any>;
    updateWorkorder(id: number, body: any): Promise<any>;
    deleteWorkorder(id: number): Promise<{
        message: string;
        result: any;
    }>;
}
