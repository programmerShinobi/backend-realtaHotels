import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
import { BookingOrderDetailService } from 'src/service/booking/booking-order-detail.service';

@Controller('booking-order-detail')
export class BookingOrderDetailController {
    constructor(private bookingorderdetailService:BookingOrderDetailService){}

    @Get()
    findall(): Promise<any> {
        return this.bookingorderdetailService.findAllBookingOrderDetail();
    }
    @Get(':id')
    findbyid(@Param('id') id: number): Promise<any> {
        return this.bookingorderdetailService.findOneBookinfOrderDetail(id);
    }
    @Post("create")
    create(@Body() body:any): Promise<any> {
        return this.bookingorderdetailService.createBookingOrderDetail(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body:any): Promise<any> {
        return this.bookingorderdetailService.updateBokingOrderDetail(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.bookingorderdetailService.deleteBookingOrdeDetail(params.id);
    }
}
