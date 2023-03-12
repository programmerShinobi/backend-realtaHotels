import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CountriesService } from 'src/service/master/countries/countries.service';
@Controller('countries')
export class CountriesController {
    constructor(private readonly CountryService: CountriesService) { }

    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.CountryService.getAll()
        return hasil
    }
    @Get(':id')
    @HttpCode(200)
    async getById(@Param('id') id: number) {
        const hasil = await this.CountryService.getById(id)
        return ({ hasil: hasil })
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.CountryService.create(Body)
        return hasil
    }

    //update
  @Put('edit/:id')
  update(@Param() params, @Body() body: any): Promise<any> {
    return this.CountryService.updateCountry(params.id, body);
  }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param: any) {
        const hasil = await this.CountryService.delete(Param)
        return hasil
    }
}
