import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PurchaseOrderHeaderService } from 'src/service/purchasing/purchase-order-header/purchase-order-header.service';

@Controller('purchase-order-header')
export class PurchaseOrderHeaderController {
    constructor(private pohService : PurchaseOrderHeaderService){}

    @Get()
    getAllOrder(){
        return this.pohService.getAllPo()
    }

    @Get('/purchasing')
    getPOForPurchaseOrder(){
        return this.pohService.getPoForPurchaseOrder()
    }

    @Put(':id')
    updateStatus(@Param() param, @Body() body){
        return this.pohService.editStatus(param.id, body)
    }

    @Post()
    insertOrder(@Body() Body){
        return this.pohService.insertPO(Body)
    }
}
