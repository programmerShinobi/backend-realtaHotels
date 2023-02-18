import { WorkOrderDetail } from "./WorkOrderDetail";
import { Users } from "./Users";
export declare class WorkOrders {
    woroId: number;
    woroStartDate: Date | null;
    woroStatus: string | null;
    workOrderDetails: WorkOrderDetail[];
    woroUser: Users;
}
