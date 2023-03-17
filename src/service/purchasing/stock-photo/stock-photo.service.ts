import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { StockPhoto } from 'entities/StockPhoto';

@Injectable()
export class StockPhotoService {
    constructor(@InjectRepository(StockPhoto)
    private sphoRepo:Repository<StockPhoto>
    ){}

    async getAllStockPhoto():Promise<any>{
        return this.sphoRepo.query('select * from purchasing.stock_photo')
    }

    async insertStockPhoto(fileUrl, data:StockPhoto){
        const res = await this.sphoRepo.save({
            sphoThumbnailFilename : fileUrl.originalname,
            sphoPhotoFilename: fileUrl.filename,
            sphoPrimary: data.sphoPrimary,
            sphoUrl:fileUrl.path,
            sphoStock: data.sphoStock
        })
        return{
            result:res
        }
    }

    async getStockPhotoForDesktop():Promise<any>{
        const res = await this.sphoRepo.query(`select * from purchasing.getphotoforstocks()`)
        return{
            result : res
        }
    }
}
