import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderMenuDetailService } from 'src/service/Resto/order-menu-detail/order-menu-detail.service';

@Controller('order-menu-detail')
export class OrderMenuDetailController {
  constructor(
    private readonly orderMenuDetailService: OrderMenuDetailService,
  ) {}

  @Get()
  findAllOrderMenuDetail(): Promise<any> {
    return this.orderMenuDetailService.findAllOrderMenuDetail();
  }

  @Get(':id')
  findOneOrderMenuDetail(@Param() params): Promise<any> {
    return this.orderMenuDetailService.findOneOrderMenuDetail(params.id);
  }

  @Post()
  createOrderMenuDetail(@Body() body) {
    const result = this.orderMenuDetailService.createOrderMenusDetail(body);
    // console.log(result);
    if (result) {
      console.log('Data Berhasil Detail');
    } else {
      console.log('GAGAL');
    }
  }

  @Put(':id')
  updateOrderMenuDetail(@Param() params: any, @Body() body): any {
    return this.orderMenuDetailService.updateOrdeMenuDetail(params.id, body);
  }

  @Delete(':id')
  deleteOrderMenuDetail(@Param() params): any {
    return this.orderMenuDetailService.deleteOrdeMenuDetail(params.id);
  }
}
