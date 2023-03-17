import { Body, Controller, Get, Param, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {join} from 'path';
import { saveImageToStorage } from 'src/imageHelper/saveImage';
import { StockPhotoService } from 'src/service/purchasing/stock-photo/stock-photo.service';

@Controller('stock-photo')
export class StockPhotoController {
    constructor(private stockPhotoService:StockPhotoService){}

    @Get()
    getAllStockPhoto(){
        return this.stockPhotoService.getAllStockPhoto()
    }

    @Post()
    @UseInterceptors(FileInterceptor('sphoUrl', saveImageToStorage))
    insertPhoto(@UploadedFile() file:Express.Multer.File, @Body() body)
    {
        const fileName = file?.filename
        if (!fileName) return {error : 'File Must Be jpg. , .jpeg, .png'}
        else return this.stockPhotoService.insertStockPhoto(file,body) 
    }

    @Get('image/:fileName')
    getPhoto(@Param('fileName')fileName:string, @Res() res){
        return res.sendFile(fileName, {root: join('image')})    
    }

    @Get('dashboard')
    getDashboardPhoto(){
        return this.stockPhotoService.getStockPhotoForDesktop()
    }
}
