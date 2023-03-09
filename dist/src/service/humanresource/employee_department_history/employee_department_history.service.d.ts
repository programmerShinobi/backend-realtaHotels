import { EmployeeDepartmentHistory } from 'entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';
export declare class EmployeeDepartmentHistoryService {
    private employeeDepartmentHistoryRepository;
    constructor(employeeDepartmentHistoryRepository: Repository<EmployeeDepartmentHistory>);
    ucwords(str: string): any;
    findAllEmployeeDepartmentHistory(edhiEmp: any): Promise<any>;
    findOneEmployeeDepartmentHistory(edhiId: any): Promise<any>;
    createEmployeeDepartmentHistory(data: any): Promise<any>;
    updateEmployeeDepartmentHistory(edhiId: any, data: any): Promise<any>;
    deleteEmployeeDepartmentHistory(data: any): Promise<any>;
    paginationEmployeeDepartmentHistory(query?: any): Promise<any>;
    paginateResponse: (data: any, page: any, limit: any) => any;
}
