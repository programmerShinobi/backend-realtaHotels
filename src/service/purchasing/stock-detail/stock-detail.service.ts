import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { StockDetail } from 'entities/StockDetail';

@Injectable()
export class StockDetailService {
    constructor(@InjectRepository(StockDetail)
    private stodRepo:Repository<StockDetail>
    ){}

    async getAllDetails():Promise<any>{
        return await this.stodRepo.query('select * from purchasing.getstockdetail()')
    }

    async getFaciNameandId():Promise<any>{
        return await this.stodRepo.query('select * from purchasing.getfacinameandid()')
    }
    async updateForDetail(id:number, data:StockDetail):Promise<any>{
        await this.stodRepo.update({stodId : id},{
            stodStatus: data.stodStatus,
            stodFaci :data.stodFaci
        })
        const res = await this.getAllDetails()
        return res
    }
}
