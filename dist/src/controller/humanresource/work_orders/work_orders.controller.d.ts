import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';
export declare class WorkOrdersController {
    private readonly workordersService;
    constructor(workordersService: WorkOrdersService);
    findAllWorkorders(): Promise<any>;
    findOneWorkorders(param: any): Promise<any>;
    createWorkorders(body: any): Promise<any>;
    updateWorkorders(id: number, body: any): Promise<any>;
    deleteWorkorders(id: number): Promise<{
        message: string;
        result: any;
    }>;
}
