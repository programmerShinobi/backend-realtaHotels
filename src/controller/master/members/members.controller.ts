import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { MembersService } from 'src/service/master/members/members.service';
@Controller('members')
export class MembersController {
    constructor(private readonly MembersRepository: MembersService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.MembersRepository.getAll()
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.MembersRepository.getById(Param.id)
        return hasil
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.MembersRepository.create(Body)
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.MembersRepository.edit(Body, id);
        return hasil
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param: number) {
        const hasil = await this.MembersRepository.delete(Param)
        return hasil
    }
}
