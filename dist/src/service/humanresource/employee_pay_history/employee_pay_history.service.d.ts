import { Repository } from 'typeorm';
import { EmployeePayHistory } from 'entities/EmployeePayHistory';
export declare class EmployeePayHistoryService {
    private employeePayHistoryRepository;
    constructor(employeePayHistoryRepository: Repository<EmployeePayHistory>);
    ucwords(str: string): any;
    findAllEmployeePayHistory(ephiEmp: any): Promise<any>;
    findOneEmployeePayHistory(ephiId: any): Promise<any>;
    createEmployeePayHistory(data: any): Promise<any>;
    updateEmployeePayHistory(ephiId: any, data: any): Promise<any>;
    deleteEmployeePayHistory(data: any): Promise<any>;
    paginationEmployeePayHistory(query?: any): Promise<any>;
    paginateResponse: (data: any, page: any, limit: any) => any;
}
