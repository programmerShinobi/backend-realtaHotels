import { EmployeeDepartmentHistory } from 'entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';
export declare class EmployeeDepartmentHistoryService {
    private employeeDepartmentHistoryRepository;
    constructor(employeeDepartmentHistoryRepository: Repository<EmployeeDepartmentHistory>);
    findAllEmployeeDepartmentHistory(data: any): Promise<any>;
}
