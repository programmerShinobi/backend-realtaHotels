import { EmployeeDepartmentHistory } from "./EmployeeDepartmentHistory";
export declare class Department {
    deptId: number;
    deptName: string | null;
    deptModifiedDate: Date | null;
    employeeDepartmentHistories: EmployeeDepartmentHistory[];
}
