import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { DepartmentDto } from './department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  @HttpCode(200)
  async findAllDepartments(): Promise<any> {
    const result = await this.departmentService.paginationDepartment();
    return result;
  }

  @Get('alldata')
  @HttpCode(200)
  async findAllDepartment(): Promise<any> {
    const result = await this.departmentService.findAllDepartment();
    return result;
  }

  @Post('insert')
  @HttpCode(201)
  async createDepartment(@Body() body: DepartmentDto): Promise<any> {
    const result = await this.departmentService.createDepartment(body);

    if (result) {
      return { message: 'Department created successfully', result: result };
    } else {
      throw new HttpException(
        'Department created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateDepartment(
    @Param('id') id: number,
    @Body() body: DepartmentDto,
  ): Promise<any> {
    const getOneData = await this.departmentService.findOneDepartment(id);

    if (getOneData) {
      const result = await this.departmentService.updateDepartment(id, body);

      if (result) {
        return { message: 'Department updated successfully', result: result };
      } else {
        throw new HttpException(
          'Department updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException(
        { message: 'Department not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete')
  @HttpCode(200)
  async deleteDepartment(@Query() query: any) {
    const getOneData = await this.departmentService.findOneDepartment(
      query.deptId,
    );

    if (getOneData) {
      const result = await this.departmentService.deleteDepartment(query);

      if (result) {
        return { message: 'Department deleted successfully', result: result };
      } else {
        throw new HttpException(
          'Department deleted failed',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        { message: 'Department not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('pagination')
  @HttpCode(200)
  async paginationDepartment(@Query() query: any): Promise<any> {
    const result = await this.departmentService.paginationDepartment(query);
    return result;
  }
}
