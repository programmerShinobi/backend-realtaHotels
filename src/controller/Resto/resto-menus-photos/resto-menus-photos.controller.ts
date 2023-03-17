import {
  Body,
  Controller,
  Get,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenusPhotosService } from 'src/service/Resto/resto-menus-photos/resto-menus-photos.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Multer, diskStorage } from 'multer';
import { Express } from 'express';
import { join } from 'path';

@Controller('resto-menus-photos')
export class RestoMenusPhotosController {
  constructor(private readonly restoPhotosService: RestoMenusPhotosService) {}

  @Get("url")
  getOneRempUrl(): Promise<any> {
    return this.restoPhotosService.getOneRempUrl();
  }

  @Get()
  findAllRestoMenusPhotos() {
    return this.restoPhotosService.findAllRestoMenusPhotos();
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('file[]', 20))
  async logFiles(
    @UploadedFiles(
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
    // console.log(body);
    // console.log(file)
    const result = await this.restoPhotosService.uploadFile(file, body);
    if (!result) {
      return 'gagal upload';
    } else {
      return {
        message: 'berhasil upload',
        result: result.result,
      };
    }
  }

  // @Post()
  // async createRestoMenusPhotos(@Body() data: RestoMenuPhotos) {
  //   const resto = await this.restoPhotosService.createRestoMenusPhotos(data);
  //   if (!resto) {
  //     return 'failed insert to resto menus photos ';
  //   } else {
  //     return 'succes insert to restp menus photos';
  //   }
  // }

  // @Put(':id')
  // async updateRestoMenusPhotos(@Param('id') id: number, @Body() body: any) {
  //   const newData: any = await this.restoPhotosService.updateRestoMenusPhotos(
  //     id,
  //     body,
  //   );

  //   if (!newData) {
  //     return 'dont updated';
  //   } else {
  //     return 'updated';
  //   }
  // }

  // @Post('upload')
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
  // async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
  //   const result = await this.restoPhotosService.storeFileInfo(file, body);
  //   if (!result) {
  //     return {
  //       message: 'berhasil upload',
  //       result: result.result,
  //     };
  //   }
  // }

  @Get('public/upload/:fileName')
  getPhoto(@Param('fileName') fileName: string, @Res() res) {
    return res.sendFile(fileName, { root: join('public/upload') });
  }
}
