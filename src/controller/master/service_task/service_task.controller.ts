import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode } from '@nestjs/common';
import { ServiceTaskService } from 'src/service/master/service_task/service_task.service';
@Controller('service-task')
export class ServiceTaskController {
    constructor(private readonly ServiceTaskRepository: ServiceTaskService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.ServiceTaskRepository.getAll()
        console.log({
            hasil : hasil
        })
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.ServiceTaskRepository.getById(Param.id)
        console.log({hasil : hasil})
        return hasil 
    }

    @Post('save')
    @HttpCode(200)
    async create(@Body() Body: any): Promise<any> {
        const hasil = await this.ServiceTaskRepository.create(Body)
        console.log(hasil + 'berhasil');
        return hasil
    }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.ServiceTaskRepository.edit(Body, id);
        console.log('Berhasil')
        return hasil
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param:number){
        const hasil = await this.ServiceTaskRepository.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
