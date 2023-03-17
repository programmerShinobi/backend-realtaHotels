import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, UseInterceptors, UploadedFile, Res, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { CategoryGroupService } from 'src/service/master/category_group/category_group.service';
import { join } from 'path';
@Controller('category-group')
export class CategoryGroupController {
  constructor(private readonly CategoryGroupRepository: CategoryGroupService) { }
  @Get()
  @HttpCode(200)
  async getAll(): Promise<any> {
    const hasil = await this.CategoryGroupRepository.getAll()
    console.log({
      hasil: hasil
    })
    return hasil
  }

  @Get(':id')
  @HttpCode(200)
  async getById(@Param() Param: any): Promise<any> {
    const hasil = await this.CategoryGroupRepository.getById(Param.id)
    console.log({ hasil: hasil })
    return hasil
  }

  @Delete('delete/:id')
  @HttpCode(200)
  async delete(@Param('id') Param: number) {
    const hasil = await this.CategoryGroupRepository.delete(Param)
    console.log('berhasil di hapus' + hasil)
    if (!hasil) {
      return 'failed'
    } else {
      return 'succes'
    }
  }

  // add data category
  @Post('upload/firebase')
  @UseInterceptors(FileInterceptor('file'))
  async logFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
          // new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
        ],
      }),
    )
    file,
    @Body() body: any,
  ): Promise<"gagal upload" | { message: string; }> {
    const result = await this.CategoryGroupRepository.UploadFirebase(file, body);
    console.log("berhasil", result)
    if (!result) {
      return 'gagal upload';
    } else {
      return {
        message: 'berhasil upload'
      };
    }
  }

  // update category
  @Put('edit/:id')
  @HttpCode(200)
  async edit(@Param('id') id: any, @Body() Body: any): Promise<any> {
    const hasil = await this.CategoryGroupRepository.edit(Body, id);
    console.log('Berhasil')
    return hasil
  }




  // @Put('upload-edit/:id')
  // @UseInterceptors(FileInterceptor('file'))
  // async updateFile(
  //   @Param('id') cagroId: any,
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [
  //         // new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
  //         // new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
  //       ],
  //     }),
  //   )
  //   file, 
  //   @Body() body: any,
  // ): Promise<"gagal update" | { message: string; }> {

  //   const result = await this.CategoryGroupRepository.UpdateFirebase(file, body, cagroId);
  //   console.log("berhasil update",result)
  //   if (result== null) {
  //     return { message: 'Gagal update' };

  //   } else {
  //     return {
  //       message: 'berhasil update'
  //     };
  //   }
  // }


}
