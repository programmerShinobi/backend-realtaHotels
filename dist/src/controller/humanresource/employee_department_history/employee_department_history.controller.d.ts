import { EmployeeDepartmentHistoryService } from 'src/service/humanresource/employee_department_history/employee_department_history.service';
export declare class EmployeeDepartmentHistoryController {
    private readonly employeeDepartmentHistoryService;
    constructor(employeeDepartmentHistoryService: EmployeeDepartmentHistoryService);
    findAllEmployee(param: any): Promise<any>;
}
