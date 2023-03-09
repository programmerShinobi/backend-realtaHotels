import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  Next,
} from '@nestjs/common';
import { HotelService } from 'src/service/hotel/hotel.service';
import { Hotels } from 'entities/Hotels';
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('view')
  findAllHotel() {
    return this.hotelService.findAllHotel();
  }
  @Get('address')
  findAddress() {
    return this.hotelService.findAddress();
  }

  @Post('insert')
  async createHotel(@Body() data: Hotels) {
    const result = await this.hotelService.createHotel(data);
    if (!result) {
      return 'failed';
    } else {
      return {
        message: 'berhasil insert',
        result: result.result,
      };
    }
    // console.log(data);
  }

  @Put(':id')
  async updateHotel(@Param('id') id: any, @Body() body: any) {
    const newData: any = await this.hotelService.updateHotel(id, body);
    if (!newData) {
      return 'hotel dont updated';
    } else {
      return 'hotel updated';
    }
  }
  @Delete('delete/:id')
  async deleteHotel(@Param('id') id: any) {
    return this.hotelService.deleteHotels(id);
  }

  @Get('card')
  findProcedure() {
    return this.hotelService.findProcedure();
  }

  @Get('lastOrder')
  findlastOrder() {
    return this.hotelService.findLastOrder();
  }

  @Get('invoice')
  async getInvoice(){
      return await this.hotelService.getInvoice()
  }
}
