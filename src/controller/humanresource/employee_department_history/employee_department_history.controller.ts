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
import { EmployeeDepartmentHistoryService } from 'src/service/humanresource/employee_department_history/employee_department_history.service';

@Controller('employee-department-history')
export class EmployeeDepartmentHistoryController {
  constructor(
    private readonly employeeDepartmentHistoryService: EmployeeDepartmentHistoryService,
  ) {}

  @Get()
  @HttpCode(200)
  async findAllEmployeeDepartmentHistorys(@Query() query: any): Promise<any> {
    const result =
      await this.employeeDepartmentHistoryService.paginationEmployeeDepartmentHistory(
        query,
      );
    return result;
  }

  @Get('alldata/:edhiEmp')
  @HttpCode(200)
  async findAllEmployeeDepartmentHistory(@Param() edhiEmp: any): Promise<any> {
    const result =
      await this.employeeDepartmentHistoryService.findAllEmployeeDepartmentHistory(
        edhiEmp,
      );
    return result;
  }

  @Post('insert')
  @HttpCode(201)
  async createEmployeeDepartmentHistory(@Body() body: any): Promise<any> {
    const result =
      await this.employeeDepartmentHistoryService.createEmployeeDepartmentHistory(
        body,
      );

    if (result) {
      return {
        message: 'EmployeeDepartmentHistory created successfully',
        result: result,
      };
    } else {
      throw new HttpException(
        'EmployeeDepartmentHistory created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateEmployeeDepartmentHistory(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    const getOneData =
      await this.employeeDepartmentHistoryService.findOneEmployeeDepartmentHistory(id);

    if (getOneData) {
      const result =
        await this.employeeDepartmentHistoryService.updateEmployeeDepartmentHistory(
          id,
          body,
        );
      if (result) {
        return {
          message: 'EmployeeDepartmentHistory updated successfully',
          result: result,
        };
      } else {
        throw new HttpException(
          'EmployeeDepartmentHistory updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException(
        { message: 'EmployeeDepartmentHistory not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete')
  @HttpCode(200)
  async deleteEmployeeDepartmentHistory(@Query() query: any) {

    const getOneData =
      await this.employeeDepartmentHistoryService.findOneEmployeeDepartmentHistory(
        query.edhiId,
      );

    if (getOneData) {
      const result =
        await this.employeeDepartmentHistoryService.deleteEmployeeDepartmentHistory(
          query,
        );

      if (result) {
        return {
          message: 'EmployeeDepartmentHistory deleted successfully',
          result: result,
        };
      } else {
        throw new HttpException(
          'EmployeeDepartmentHistory deleted failed',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        { message: 'EmployeeDepartmentHistory not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('pagination')
  @HttpCode(200)
  async paginationEmployeeDepartmentHistory(@Query() query: any): Promise<any> {
    const result =
      await this.employeeDepartmentHistoryService.paginationEmployeeDepartmentHistory(
        query,
      );
    return result;
  }
}
