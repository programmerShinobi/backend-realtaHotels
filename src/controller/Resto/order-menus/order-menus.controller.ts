import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderMenusService } from 'src/service/Resto/order-menus/order-menus.service';

@Controller('order-menus')
export class OrderMenusController {
  constructor(private readonly orderMenusService: OrderMenusService) {}

  @Get('last')
  findlastOrderMenus(): Promise<any> {
    return this.orderMenusService.findLastOrder();
  }

  @Get('lastId')
  getIdLast(): Promise<any> {
    return this.orderMenusService.getIdLast();
  }

  @Get()
  findAllOrderMenus(): Promise<any> {
    return this.orderMenusService.findAllOrderMenus();
  }

  @Get(':id')
  findOneOrderMenus(@Param() Params): Promise<any> {
    return this.orderMenusService.findOneOrderMenus(Params.id);
  }

  @Post()
  createOrderMenus(@Body() body) {
    const result = this.orderMenusService.createOrderMenus(body);
    // console.log(result);
    if (result) {
      console.log('Data Berhasil order Menus');
    } else {
      console.log('GAGAL');
    }
  }

  @Put(':id')
  updateOrderMenus(@Param() params: any, @Body() body): any {
    return this.orderMenusService.updateOrderMenus(params.id, body);
  }

  @Delete(':id')
  deleteOrderMenus(@Param() params): any {
    return this.orderMenusService.deleteOrderMenus(params.id);
  }
}
