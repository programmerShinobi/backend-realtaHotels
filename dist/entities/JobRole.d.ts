import { Employee } from "./Employee";
export declare class JobRole {
    joroId: number;
    joroName: string | null;
    joroModifiedDate: Date | null;
    employees: Employee[];
}
