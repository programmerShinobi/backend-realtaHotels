import { EmployeePayHistoryService } from 'src/service/humanresource/employee_pay_history/employee_pay_history.service';
export declare class EmployeePayHistoryController {
    private readonly employeePayHistoryService;
    constructor(employeePayHistoryService: EmployeePayHistoryService);
    findAllEmployeePayHistorys(query: any): Promise<any>;
    findAllEmployeePayHistory(ephiEmpId: any): Promise<any>;
    createEmployeePayHistory(body: any): Promise<any>;
    updateEmployeePayHistory(id: number, body: any): Promise<any>;
    deleteEmployeePayHistory(query: any): Promise<{
        message: string;
        result: any;
    }>;
    paginationEmployeePayHistory(query: any): Promise<any>;
}
