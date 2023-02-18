import { JobRole } from "./JobRole";
import { EmployeeDepartmentHistory } from "./EmployeeDepartmentHistory";
import { EmployeePayHistory } from "./EmployeePayHistory";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { WorkOrderDetail } from "./WorkOrderDetail";
export declare class Employee {
    empId: number;
    empNationalId: string | null;
    empBirthDate: Date | null;
    empMaritalStatus: string | null;
    empGender: string | null;
    empHireDate: Date | null;
    empSalariedFlag: string | null;
    empVacationHours: number | null;
    empSickleaveHours: number | null;
    empCurrentFlag: number | null;
    empPhoto: string | null;
    empModifiedDate: Date | null;
    empEmp: Employee;
    employees: Employee[];
    empJoro: JobRole;
    employeeDepartmentHistories: EmployeeDepartmentHistory[];
    employeePayHistories: EmployeePayHistory[];
    purchaseOrderHeaders: PurchaseOrderHeader[];
    workOrderDetails: WorkOrderDetail[];
}
