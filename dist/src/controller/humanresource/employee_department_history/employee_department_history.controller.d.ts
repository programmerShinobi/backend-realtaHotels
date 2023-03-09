import { EmployeeDepartmentHistoryService } from 'src/service/humanresource/employee_department_history/employee_department_history.service';
export declare class EmployeeDepartmentHistoryController {
    private readonly employeeDepartmentHistoryService;
    constructor(employeeDepartmentHistoryService: EmployeeDepartmentHistoryService);
    findAllEmployeeDepartmentHistorys(query: any): Promise<any>;
    findAllEmployeeDepartmentHistory(edhiEmp: any): Promise<any>;
    createEmployeeDepartmentHistory(body: any): Promise<any>;
    updateEmployeeDepartmentHistory(id: number, body: any): Promise<any>;
    deleteEmployeeDepartmentHistory(query: any): Promise<{
        message: string;
        result: any;
    }>;
    paginationEmployeeDepartmentHistory(query: any): Promise<any>;
}
