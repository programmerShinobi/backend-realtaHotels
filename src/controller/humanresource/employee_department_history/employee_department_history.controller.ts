import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { FileInterceptor } from '@nestjs/platform-express';
import { EmployeeDepartmentHistoryService } from 'src/service/humanresource/employee_department_history/employee_department_history.service';

@Controller('employee-department-history')
export class EmployeeDepartmentHistoryController {
  constructor(
    private readonly employeeDepartmentHistoryService: EmployeeDepartmentHistoryService,
  ) {}

  @Get(':id')
  @HttpCode(200)
  findAllEmployee(@Param() param: any): Promise<any> {
    return this.employeeDepartmentHistoryService.findAllEmployeeDepartmentHistory(
      param
    );
  }
}
