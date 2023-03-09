import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VendorProductService } from 'src/service/purchasing/vendor-product/vendor-product.service';

@Controller('vendor-product')
export class VendorProductController {
    constructor(private venproService:VendorProductService){}

    @Get()
    getVenproById(){
        return this.venproService.getVenpro()
    }

    @Post('addProduct/:id')
    insertVenpro(@Param() param, @Body() body){
        return this.venproService.insertVendorProduct(param.id,body)
    }
}
