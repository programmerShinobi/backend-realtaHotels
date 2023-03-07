import { Repository } from 'typeorm';
import { Department } from 'entities/Department';
import { DepartmentDto } from 'src/controller/humanresource/department/department.dto';
export declare class DepartmentService {
    private departmentRepository;
    constructor(departmentRepository: Repository<Department>);
    ucwords(str: string): any;
    findAllDepartment(): Promise<any>;
    findOneDepartment(deptId: any): Promise<any>;
    createDepartment(data: any): Promise<any>;
    updateDepartment(deptId: number, data: DepartmentDto): Promise<any>;
    deleteDepartment(data: any): Promise<any>;
    paginationDepartment(query?: any): Promise<any>;
    paginateResponse: (data: any, page: any, limit: any) => any;
}
