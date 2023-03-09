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
  MaxFileSizeValidator
} from '@nestjs/common';
import { EmployeeService } from 'src/service/humanresource/employee/employee.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @HttpCode(200)
  findAllEmployee(): Promise<any> {
    return this.employeeService.findAllEmployee();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneEmployee(@Param() param: any): Promise<any> {
    const result = await this.employeeService.findOneEmployee(param.id);

    if (result) {
      return result;
    } else {
      throw new HttpException(
        { message: 'Employee not found' },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createEmployee(@Body() body: any): Promise<any> {
    const checkNationalId = await this.employeeService.findOneEmployee({
      empNationalId: body.emp_national_id,
    });

    if (checkNationalId) {
      throw new HttpException(
        { message: 'NationalId is already exist' },
        HttpStatus.CONFLICT,
      );
    } else {
      const result = await this.employeeService.createEmployee(body);

      if (result) {
        const getAll = await this.employeeService.findAllEmployee();

        return { message: 'Employee created successfully', result: getAll };
      } else {
        throw new HttpException(
          { message: 'Employee created failed', err: result },
          HttpStatus.CONFLICT,
        );
      }
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateEmployee(
    @Param('id') id: any, 
    @Body() body: any,
  ): Promise<any> {
 
    const checkEmployee = await this.employeeService.findOneEmployee({
      empId: id,
    });

    if (checkEmployee) {
      const result = await this.employeeService.updateEmployee(id, body);

      if (result) {
        const getAll = await this.employeeService.findAllEmployee();

        return { message: 'Employee updated successfully', result: getAll };
      } else {
        throw new HttpException(
          { message: 'Employee updated failed', err: result },
          HttpStatus.CONFLICT,
        );
      }
    } else {
      throw new HttpException(
        { message: 'Employee not found' },
        HttpStatus.CONFLICT,
      );
    }
  }

  @Delete('delete/:id/')
  @HttpCode(200)
  async deleteEmployee(@Param('id') id: number) {
    const getOneData = await this.employeeService.findOneEmployee(id);

    if (getOneData) {
      const result = this.employeeService.deleteEmployee(id);

      if (result) {
        return { message: 'Employee deleted successfully', result: result };
      } else {
        throw new HttpException(
          'Employee deleted failed',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadAvatar(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    const result = await this.employeeService.uploadImage(file);
    return { message: 'Image upload successfully', result: result };
  }
}
