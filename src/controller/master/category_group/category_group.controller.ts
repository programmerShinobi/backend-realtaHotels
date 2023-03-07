import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CategoryGroupService } from 'src/service/master/category_group/category_group.service';
@Controller('category-group')
export class CategoryGroupController {
    constructor(private readonly CategoryGroupRepository: CategoryGroupService) { }
    @Get()
    @HttpCode(200)
    async getAll(): Promise<any> {
        const hasil = await this.CategoryGroupRepository.getAll()
        console.log({
            hasil : hasil
        })
        return hasil
    }

    @Get(':id')
    @HttpCode(200)
    async getById(@Param() Param: any): Promise<any> {
        const hasil = await this.CategoryGroupRepository.getById(Param.id)
        console.log({hasil : hasil})
        return hasil 
    }

    @Post('save')
    @HttpCode(200)
    @UseInterceptors(FileInterceptor('file'))
  async create(@Body() data:any, @UploadedFile() file: Express.Multer.File): Promise<any> {
    // const iconUrl = await this.uploadGambarService.upload(file);
    const addData = await this.CategoryGroupRepository.create({
        cagroName: data.cagroName,
        cagroDescription: data.cagroDescription,
        cagroType: data.cagroType,
        cagroIcon: file.originalname,
        cagroIconUrl: data.upload(file),
        cagroId: 0,
        facilities: [],
        policyCategoryGroups: []
    });

    if (addData) {
      return { message: 'Data berhasil ditambahkan', addData: addData };
    } else {
      return { message: 'Data gagal ditambahkan' };
    }
  }
    @Put('edit/:id')
    @HttpCode(200)
    async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
        const hasil = await this.CategoryGroupRepository.edit(Body, id);
        console.log('Berhasil')
        return hasil 
    }

    @Delete('delete/:id')
    @HttpCode(200)
    async delete(@Param('id') Param:number){
        const hasil = await this.CategoryGroupRepository.delete(Param)
        console.log('berhasil di hapus' + hasil)
        return hasil
    }
}
function upload(file: Express.Multer.File) {
    throw new Error('Function not implemented.');
}

