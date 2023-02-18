import { Employee } from "./Employee";
import { Facilities } from "./Facilities";
import { ServiceTask } from "./ServiceTask";
import { WorkOrders } from "./WorkOrders";
export declare class WorkOrderDetail {
    wodeId: number;
    wodeTaskName: string | null;
    wodeStatus: string | null;
    wodeStartDate: Date | null;
    wodeEndDate: Date | null;
    wodeNotes: string | null;
    wodeEmp: Employee;
    wodeFaci: Facilities;
    wodeSeta: ServiceTask;
    wodeWoro: WorkOrders;
}
