import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { StocksService } from 'src/service/purchasing/stocks/stocks.service';

@Controller('stocks')
export class StocksController {
    constructor(private stockService:StocksService){}

    @Get()
    getAllStocks(){
        return this.stockService.getAllStocks()
    }

    @Post()
    createStocks(@Body() body){
        return this.stockService.createStocks(body)
    }

    @Put(':id')
    updateStocks(@Param() param, @Body() Body){
        return this.stockService.updateStocks(param.id, Body)
    }
}
