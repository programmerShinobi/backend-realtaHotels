import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { PurchaseOrderDetailService } from 'src/service/purchasing/purchase-order-detail/purchase-order-detail.service';

@Controller('purchase-order-detail')
export class PurchaseOrderDetailController {
    constructor(private podService:PurchaseOrderDetailService){}

    @Get()
    getAllPoDetails(){
        return this.podService.getAllDetails()
    }

    @Put('/:id')
    editPoDetails(@Param() param, @Body() body){
        return this.podService.editDetails(param.id, body)
    }
}
