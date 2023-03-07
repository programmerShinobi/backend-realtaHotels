/// <reference types="multer" />
import { Employee } from 'entities/Employee';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';
import 'dotenv/config';
export declare class EmployeeService {
    private employeeRepository;
    private readonly httpService;
    constructor(employeeRepository: Repository<Employee>, httpService: HttpService);
    findAllEmployee(): Promise<any>;
    findOneEmployee(id: any): Promise<any>;
    createEmployee(data: any): Promise<any>;
    updateEmployee(empId: number, data: any): Promise<any>;
    deleteEmployee(empId: number): Promise<import("typeorm").DeleteResult>;
    uploadImage(file: Express.Multer.File): Promise<any>;
}
