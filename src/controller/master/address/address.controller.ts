import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { AddressService } from 'src/service/master/address/address.service';
@Controller('address')
export class AddressController {
    constructor(private readonly AddressRepository: AddressService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.AddressRepository.getAll()
        console.log(hasil)
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.AddressRepository.getById(Param.id)
        console.log({ hasil: hasil })
        return hasil
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.AddressRepository.create(Body)
        // console.log(hasil + 'berhasil');
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.AddressRepository.edit(Body, id);
        console.log('Berhasil' + hasil)
        return "Berhasil" + hasil
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param: number) {
        const hasil = await this.AddressRepository.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
