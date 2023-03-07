/// <reference types="multer" />
import { EmployeeService } from 'src/service/humanresource/employee/employee.service';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    findAllEmployee(): Promise<any>;
    findOneEmployee(param: any): Promise<any>;
    createEmployee(body: any): Promise<any>;
    updateEmployee(id: any, body: any): Promise<any>;
    deleteEmployee(id: number): Promise<{
        message: string;
        result: Promise<import("typeorm").DeleteResult>;
    }>;
    uploadAvatar(file: Express.Multer.File): Promise<{
        message: string;
        result: any;
    }>;
}
