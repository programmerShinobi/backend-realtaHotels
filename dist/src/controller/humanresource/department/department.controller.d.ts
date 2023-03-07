import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { DepartmentDto } from './department.dto';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    findAllDepartments(): Promise<any>;
    findAllDepartment(): Promise<any>;
    createDepartment(body: DepartmentDto): Promise<any>;
    updateDepartment(id: number, body: DepartmentDto): Promise<any>;
    deleteDepartment(query: any): Promise<{
        message: string;
        result: any;
    }>;
    paginationDepartment(query: any): Promise<any>;
}
