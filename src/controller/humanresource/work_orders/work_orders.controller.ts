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
  Query,
  Put,
} from '@nestjs/common';
import { WorkOrdersService } from 'src/service/humanresource/work_orders/work_orders.service';

@Controller('workorders')
export class WorkOrdersController {
  constructor(private readonly workordersService: WorkOrdersService) {}

  @Get()
  @HttpCode(200)
  async findAllWorkorder(@Query() query): Promise<any> {
    const result = await this.workordersService.paginationWorkorder(
      query,
    );
    return result;
  }

  @Get(':id')
  @HttpCode(200)
  async findOneWorkorder(@Param() param: any): Promise<any> {
    const result = await this.workordersService.findOneWorkorder(param.id);
 
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
  async createWorkorder(@Body() body: any): Promise<any> {
    const result = await this.workordersService.createWorkorder(body);

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
  async updateWorkorder(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    const getOneData = await this.workordersService.findOneWorkorder(id);

    if (getOneData) {
      const result = await this.workordersService.updateWorkorder(id, body);

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
  async deleteWorkorder(@Param('id') id: number) {
    const getOneData = await this.workordersService.findOneWorkorder(id);

    if (getOneData) {
      const result = await this.workordersService.deleteWorkorder(id);

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
