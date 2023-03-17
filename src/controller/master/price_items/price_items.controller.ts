import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { PriceItemsService } from 'src/service/master/price_items/price_items.service';

@Controller('price-items')
export class PriceItemsController {
    constructor(private readonly PriceItemsRepository: PriceItemsService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.PriceItemsRepository.getAll()
        console.log({
            hasil : hasil
        })
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.PriceItemsRepository.getById(Param.id)
        console.log({hasil : hasil})
        return hasil 
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.PriceItemsRepository.create(Body)
        console.log(hasil + 'berhasil');
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.PriceItemsRepository.edit(Body, id);
        console.log('Berhasil')
        return hasil
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param:number){
        const hasil = await this.PriceItemsRepository.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
