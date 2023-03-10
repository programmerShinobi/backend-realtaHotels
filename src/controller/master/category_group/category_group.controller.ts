import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, UseInterceptors, UploadedFile ,Res, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe} from '@nestjs/common';
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

    // @Post('save')
    // @HttpCode(200)
    // @UseInterceptors(
    //   FileInterceptor('file', {
    //     dest: 'public/upload',
    //     storage: diskStorage({
    //       destination: 'public/upload',
    //       filename(req, file, cb) {
    //         return cb(null, file.originalname);
    //       },
    //     }),
    //   }),
    // )
    // async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body:any) {
    //   const result = await this.CategoryGroupRepository.storeFileInfo(file, body);
    //   if (!result) {
    //     return 'gagal upload';
    //   } else {
    //     return {
    //       message: 'berhasil upload',
    //       result: result.result,
    //     };
    //   }
    //   // console.log('object', file)
    // }

  //   @Post('save')
  //   @HttpCode(200)
  //   async create(@Body() Body: any,@UploadedFile() file: Express.Multer.File): Promise<any> {
  //       const hasil = await this.CategoryGroupRepository.create(Body,file)
  //       console.log(hasil + 'berhasil');
  //       return hasil
  //   }
  //   @Post('upload')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadAvatar(
  //   @UploadedFile(
  //     new ParseFilePipe({
  //       validators: [
  //         new FileTypeValidator({ fileType: '.(png|jpeg|jpg)' }),
  //         new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
  //       ],
  //     }),
  //   )
  //   // @Body() data :any,
  //   file: Express.Multer.File,
  // ) {
  //   const result = await this.CategoryGroupRepository.uploadImage(file);
  //   return { message: 'Image upload successfully', result: result };
  // }
    
  @Post('save')
  @HttpCode(200)
  async create(@Body() Body: any ,file: Express.Multer.File): Promise<any> {
      const hasil = await this.CategoryGroupRepository.create(Body,file)
      console.log(hasil + 'berhasil');
      return hasil
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
        if(!hasil){
            return 'failed'
        }else{
            return 'succes'
        }
    }

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
    ) {
      const result = await this.CategoryGroupRepository.UploadFirebase(file, body);
      if (!result) {
        return 'gagal upload';
      } else {
        return {
          message: 'berhasil upload'
        };
      }
    }

}
