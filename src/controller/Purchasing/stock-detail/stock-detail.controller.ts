import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { StockDetailService } from 'src/service/purchasing/stock-detail/stock-detail.service';

@Controller('stock-detail')
export class StockDetailController {
    constructor(private stodService:StockDetailService){}

    @Get()
    getAllDetails(){
        return this.stodService.getAllDetails()
    }

    @Get('facilities')
    getAllFacilitiesAndId(){
        return this.stodService.getFaciNameandId()
    }

    @Put(':id')
    updateStockStatusAndFacilities(@Param() param, @Body() body){
        return this.stodService.updateForDetail(param.id, body)
    }
}
