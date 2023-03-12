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
import { WorkOrderDetailService } from 'src/service/humanresource/work_order_detail/work_order_detail.service';

@Controller('work-order-detail')
export class WorkOrderDetailController {
  constructor(
    private readonly workOrderDetailService: WorkOrderDetailService,
  ) {}

  @Get()
  @HttpCode(200)
  async findAllWorkOrderDetails(@Query() query: any): Promise<any> {
    const result =
      await this.workOrderDetailService.paginationWorkOrderDetail(query);
    return result;
  }

  @Get('alldata/:woroEmp')
  @HttpCode(200)
  async findAllWorkOrderDetail(@Param() woroEmp: any): Promise<any> {
    const result =
      await this.workOrderDetailService.findAllWorkOrderDetail(woroEmp);
    return result;
  }

  @Post('insert')
  @HttpCode(201)
  async createWorkOrderDetail(@Body() body: any): Promise<any> {
    const result =
      await this.workOrderDetailService.createWorkOrderDetail(body);

    if (result) {
      return {
        message: 'WorkOrderDetail created successfully',
        result: result,
      };
    } else {
      throw new HttpException(
        'WorkOrderDetail created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateWorkOrderDetail(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    const getOneData =
      await this.workOrderDetailService.findOneWorkOrderDetail(id);

    if (getOneData) {
      const result =
        await this.workOrderDetailService.updateWorkOrderDetail(id, body);
      if (result) {
        return {
          message: 'WorkOrderDetail updated successfully',
          result: result,
        };
      } else {
        throw new HttpException(
          'WorkOrderDetail updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException(
        { message: 'WorkOrderDetail not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete')
  @HttpCode(200)
  async deleteWorkOrderDetail(@Query() query: any) {
    const getOneData = await this.workOrderDetailService.findOneWorkOrderDetail(
      query.wodeId,
    );

    if (getOneData) {
      const result =
        await this.workOrderDetailService.deleteWorkOrderDetail(query);

      if (result) {
        return {
          message: 'WorkOrderDetail deleted successfully',
          result: result,
        };
      } else {
        throw new HttpException(
          'WorkOrderDetail deleted failed',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        { message: 'WorkOrderDetail not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('pagination')
  @HttpCode(200)
  async paginationWorkOrderDetail(@Query() query: any): Promise<any> {
    const result =
      await this.workOrderDetailService.paginationWorkOrderDetail(query);
    return result;
  }
}
