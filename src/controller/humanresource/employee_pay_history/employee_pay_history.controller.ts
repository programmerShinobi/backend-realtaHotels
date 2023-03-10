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
import { EmployeePayHistoryService } from 'src/service/humanresource/employee_pay_history/employee_pay_history.service';

@Controller('employee-pay-history')
export class EmployeePayHistoryController {
  constructor(
    private readonly employeePayHistoryService: EmployeePayHistoryService,
  ) {}

  @Get()
  @HttpCode(200)
  async findAllEmployeePayHistorys(@Query() query: any): Promise<any> {
    const result =
      await this.employeePayHistoryService.paginationEmployeePayHistory(query);
    return result;
  }

  @Get('alldata/:ephiEmpId')
  @HttpCode(200)
  async findAllEmployeePayHistory(@Param() ephiEmpId: any): Promise<any> {
    const result =
      await this.employeePayHistoryService.findAllEmployeePayHistory(ephiEmpId);
    return result;
  }

  @Post('insert')
  @HttpCode(201)
  async createEmployeePayHistory(@Body() body: any): Promise<any> {
    const result =
      await this.employeePayHistoryService.createEmployeePayHistory(body);

    if (result) {
      return {
        message: 'EmployeePayHistory created successfully',
        result: result,
      };
    } else {
      throw new HttpException(
        'EmployeePayHistory created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateEmployeePayHistory(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    const getOneData =
      await this.employeePayHistoryService.findOneEmployeePayHistory(id);

    if (getOneData) {
      const result =
        await this.employeePayHistoryService.updateEmployeePayHistory(id, body);
      if (result) {
        return {
          message: 'EmployeePayHistory updated successfully',
          result: result,
        };
      } else {
        throw new HttpException(
          'EmployeePayHistory updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException(
        { message: 'EmployeePayHistory not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete')
  @HttpCode(200)
  async deleteEmployeePayHistory(@Query() query: any) {
    const getOneData =
      await this.employeePayHistoryService.findOneEmployeePayHistory(
        query.ephiId,
      );

    if (getOneData) {
      const result =
        await this.employeePayHistoryService.deleteEmployeePayHistory(query);

      if (result) {
        return {
          message: 'EmployeePayHistory deleted successfully',
          result: result,
        };
      } else {
        throw new HttpException(
          'EmployeePayHistory deleted failed',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        { message: 'EmployeePayHistory not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('pagination')
  @HttpCode(200)
  async paginationEmployeePayHistory(@Query() query: any): Promise<any> {
    const result =
      await this.employeePayHistoryService.paginationEmployeePayHistory(query);
    return result;
  }
}
