import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { PolicyService } from 'src/service/master/policy/policy.service';
@Controller('policy')
export class PolicyController {
    constructor(private readonly PolicyRepository: PolicyService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.PolicyRepository.getAll()
        console.log({
            hasil : hasil
        })
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.PolicyRepository.getById(Param.id)
        console.log({hasil : hasil})
        return hasil 
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.PolicyRepository.create(Body)
        console.log(hasil + 'berhasil');
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.PolicyRepository.edit(Body, id);
        console.log('Berhasil')
        return {hasil:hasil}
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param:number){
        const hasil = await this.PolicyRepository.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
