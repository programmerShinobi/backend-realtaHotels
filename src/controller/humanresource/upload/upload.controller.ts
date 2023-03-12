import 'dotenv/config';
import {
  Body,
  Controller,
  Post,
  UseInterceptors,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  UploadedFiles,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from 'src/service/humanresource/upload/upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FilesInterceptor('files[]', 20))
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
    // console.log(file);
    // console.log(body);
    // console.log(process.env.CONFIG_FIREBASE);
    const result = await this.uploadService.uploadFile(file)

    // console.log(result)
  }
}
