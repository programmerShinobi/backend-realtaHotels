import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { VendorService } from 'src/service/purchasing/vendor/vendor.service';

@Controller('vendor')
export class VendorController {
    constructor(private vendorService:VendorService){}

    @Get()
    getAllVendor(){
        return this.vendorService.getAllVendor()
    }

    @Post()
    createVendor(@Body() body){
        return this.vendorService.createVendor(body)
    }

    @Post(':id')
    getId(@Param() param){
        return this.vendorService.getVendorById(param.id)
    }

    @Put(':id')
    updateVendor(@Param() param, @Body() body){
        return this.vendorService.updateVendor(param.id, body)
    }
    
    @Delete(':id')
    deleteVendor(@Param() param){
        return this.vendorService.deleteVendor(param.id)
    }
}
