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
} from '@nestjs/common';
import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';

@Controller('workorders')
export class WorkOrdersController {
  constructor(private readonly workordersService: WorkOrdersService) {}

  @Get()
  @HttpCode(200)
  async findAllWorkorders(): Promise<any> {
    return this.workordersService.findAllWorkOrders();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneWorkorders(@Param() param: any): Promise<any> {
    const result = await this.workordersService.findOneWorkOrders(param.id);

    if (result) {
      return result;
    } else {
      throw new HttpException(
        { message: 'Workorders not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createWorkorders(@Body() body: any): Promise<any> {
    const result = await this.workordersService.createWorkOrders(body);

    if (result) {
      return { message: 'Workorders created successfully', result: result };
    } else {
      throw new HttpException(
        'Workorders created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateWorkorders(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    const getOneData = await this.workordersService.findOneWorkOrders(id);

    if (getOneData) {
      const result = await this.workordersService.updateWorkOrders(id, body);

      if (result) {
        return { message: 'Workorders updated successfully', result: result };
      } else {
        throw new HttpException(
          'Workorders updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException(
        { message: 'Workorders not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Delete('delete/:id')
  @HttpCode(200)
  async deleteWorkorders(@Param('id') id: number) {
    const getOneData = await this.workordersService.findOneWorkOrders(id);

    if (getOneData) {
      const result = await this.workordersService.deleteWorkOrders(id);

      if (result) {
        return { message: 'Workorders deleted successfully', result: result };
      } else {
        throw new HttpException(
          'Workorders deleted failed',
          HttpStatus.BAD_REQUEST,
        );
      }
    } else {
      throw new HttpException(
        { message: 'Workorders not found' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
