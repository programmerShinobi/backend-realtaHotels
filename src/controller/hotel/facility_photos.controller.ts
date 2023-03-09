import {
  Body,
  Controller,
  Delete,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Put,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FacilityPhotosService } from 'src/service/hotel/facility_photos.service';
import { FacilityPhotos } from 'entities/FacilityPhotos';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import { join } from 'path';

@Controller('facility-photos')
export class FacilityPhotosController {
  constructor(private readonly faphoService: FacilityPhotosService) {}

  @Get('view')
  findAllFaciPhotos() {
    return this.faphoService.findAllFaciPhotos();
  }

  @Post('insert')
  async createFaciPhotos(@Body() data: FacilityPhotos) {
    const hotel = await this.faphoService.createFaciPhotos(data);
    if (!hotel) {
      return 'failed insert to hotels';
    } else {
      return 'success insert to hotel';
    }
  }

  @Put(':id')
  async updateFacilityPhotos(@Param('id') id: string, @Body() body: any) {
    const newData: any = await this.faphoService.updateFacilityPhotos(id, body);
    if (!newData) {
      return 'dont updated';
    } else {
      return 'updated';
    }
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'public/upload',
      storage: diskStorage({
        destination: 'public/upload',
        filename(req, file, cb) {
          return cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    const result = await this.faphoService.storeFileInfo(file, body);
    if (!result) {
      return 'gagal upload';
    } else {
      return {
        message: 'berhasil upload',
        result: result.result,
      };
    }
  }

  @Post('upload/firebase')
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
    const result = await this.faphoService.UploadFirebase(file, body);
    if (!result) {
      return 'gagal upload';
    } else {
      return {
        message: 'berhasil upload',
        result: result.result,
      };
    }
  }

  @Get('public/upload/:fileName')
  getPhoto(@Param('fileName') fileName: string, @Res() res) {
    return res.sendFile(fileName, { root: join('public/upload') });
  }
}
