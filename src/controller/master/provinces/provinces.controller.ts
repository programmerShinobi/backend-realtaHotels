import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ProvincesService } from 'src/service/master/provinces/provinces.service';

@Controller('provinces')
export class ProvincesController {
    constructor(private readonly ProvincesRepository: ProvincesService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.ProvincesRepository.getAll()
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.ProvincesRepository.getById(Param.id)
        return hasil
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.ProvincesRepository.create(Body)
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.ProvincesRepository.edit(Body,id);
        return hasil 
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param: any) {
        const hasil = await this.ProvincesRepository.delete(Param)
        return hasil
    }
}
