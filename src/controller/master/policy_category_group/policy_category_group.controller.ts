import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { PolicyCategoryGroupService } from 'src/service/master/policy_category_group/policy_category_group.service';

@Controller('policy-category-group')
export class PolicyCategoryGroupController {
    constructor(private readonly PolicyCategoryGroupServiceRepository: PolicyCategoryGroupService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.PolicyCategoryGroupServiceRepository.getAll()
        console.log({
            hasil : hasil
        })
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.PolicyCategoryGroupServiceRepository.getById(Param.id)
        console.log({hasil : hasil})
        return hasil 
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.PolicyCategoryGroupServiceRepository.create(Body)
        console.log(hasil + 'berhasil');
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any , @Body() Body: any): Promise<any> {
        const hasil = await this.PolicyCategoryGroupServiceRepository.edit(Body, id);
        console.log('Berhasil')
        return {hasil:hasil}
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param:number){
        const hasil = await this.PolicyCategoryGroupServiceRepository.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
