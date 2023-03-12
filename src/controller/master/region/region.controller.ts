import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
// import { Regions } from 'entities/Regions';
import { RegionService } from 'src/service/master/region/region.service';
@Controller('region')
export class RegionController {
    constructor(private readonly RegionService: RegionService) { }


    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.RegionService.getAll()
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.RegionService.getById(Param.id)
        return hasil 
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.RegionService.create(Body)
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.RegionService.edit(Body, id);
        return hasil
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param:number){
        const hasil = await this.RegionService.delete(Param)
        return hasil
    }
}
