import { EmployeeDepartmentHistory } from "./EmployeeDepartmentHistory";
export declare class Shift {
    shiftId: number;
    shiftName: string | null;
    shiftStartTime: Date | null;
    shiftEndTime: Date | null;
    employeeDepartmentHistories: EmployeeDepartmentHistory[];
}
