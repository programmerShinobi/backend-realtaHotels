import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { DepartmentDto } from './department.dto';

@Controller('department')
export class DepartmentController {
    constructor(private readonly departmentService : DepartmentService){}

    @Get()
    @HttpCode(200)
    findAllDepartment(): Promise<any>{
        return this.departmentService.findAllDepartment();
    }

    @Get(":id")
    @HttpCode(200)
    findOneDepartment(@Param() id : number): any {
        return this.departmentService.findOneDepartment(id);
    }
}
