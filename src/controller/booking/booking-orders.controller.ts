import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { BookingOrdersService } from 'src/service/booking/booking-orders.service'; 

@Controller('bookingOrders')
export class BookingOrdersController {

    constructor(private bokingorderService: BookingOrdersService){}

    @Get()
    findall(): Promise<any> {
        return this.bokingorderService.findAllBookingOrders();
    }
    @Get(':id')
    findbyid(@Param('id') id: number): Promise<any> {
        return this.bokingorderService.findOneBookingOrders(id);
    }
    @Post("create")
    create(@Body() body: any): Promise<any> {
        return this.bokingorderService.createBookingOrders(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body: any): Promise<any> {
        return this.bokingorderService.updateBokingOrders(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.bokingorderService.deleteBookinfOrders(params.id);
    }

    @Post('CreateBo')
    async bokingOrder(@Body() body:any) {
      return await this.bokingorderService.createBokingOrder(body);
    }

    @Get('invoice')
    async getInvoice(){
        return await this.bokingorderService.getInvoice()
    }

    @Put("/status/:id")
    async updateStatus(@Param() params,@Body() body: any): Promise<any>{
        return await this.bokingorderService.updateStatus(params.id,body)
    }

}


