import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { CountriesService } from 'src/service/master/countries/countries.service';
@Controller('countries')
export class CountriesController {
    constructor(private readonly CountryService: CountriesService) { }

    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.CountryService.getAll()
        console.log(hasil)
        return hasil
    }
    @Get(':id')
    @HttpCode(200)
    async getById(@Param('id') id: number) {
        const hasil = await this.CountryService.getById(id)
        console.log({ hasil: hasil })
        return ({ hasil: hasil })
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.CountryService.create(Body)
        console.log({ message: 'berhasil', hasil: hasil })
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.CountryService.edit(Body, id);
        console.log('Berhasil')
        return hasil
    }

    //update
    // @Put('edit/:id')
    // async update(@Param('id') params: any, @Body() body: any): Promise<any> {
    //     const hasil = await this.CountryService.updateCountry(params.id, body);
    //     console.log(hasil)
    //     return hasil
    // }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param: any) {
        const hasil = await this.CountryService.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
