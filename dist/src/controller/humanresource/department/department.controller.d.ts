import { DepartmentService } from 'src/service/humanresource/department/department.service';
export declare class DepartmentController {
    private readonly departmentService;
    constructor(departmentService: DepartmentService);
    findAllDepartment(): Promise<any>;
    findOneDepartment(id: number): any;
}
