import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { BookingOrderDetailExtraService } from 'src/service/booking/booking-order-detail-extra.service';

@Controller('booking-order-detail-extra')
export class BookingOrderDetailExtraController {
    
   constructor (private bookingorderdetailextraService: BookingOrderDetailExtraService){}

   @Get()
    findall(): Promise<any> {
        return this.bookingorderdetailextraService.findAllBookingOrderDetailExtra();
    }
    @Get(':id')
    findbyid(@Param('id') id: number): Promise<any> {
        return this.bookingorderdetailextraService.findOneBookingOrderDetailExtra(id);
    }
    @Get('invoice/:id')
    findbyUser(@Param('id') id: number): Promise<any> {
        return this.bookingorderdetailextraService.getInvoiceBoex(id);
    }
    @Post("create")
    create(@Body() body:any): Promise<any> {
        return this.bookingorderdetailextraService.createBookingOrderDetailExtra(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body:any): Promise<any> {
        return this.bookingorderdetailextraService.updateBookingOrderExtra(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.bookingorderdetailextraService.deleteBookingOrderDetailExtra(params.id);
    }
    @Post('createBoexArray')
    createExtraMultiple(@Body() body){
        return this.bookingorderdetailextraService.createExtraMultiple(body)
    }
}
