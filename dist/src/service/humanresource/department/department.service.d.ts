import { Repository } from 'typeorm';
import { Department } from 'entities/Department';
export declare class DepartmentService {
    private departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    findAllDepartment(): Promise<any>;
    findOneDepartment(deptId: number): Promise<any>;
}
