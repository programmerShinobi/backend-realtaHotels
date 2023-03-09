import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stocks } from 'entities/Stocks';

@Injectable()
export class StocksService {
  constructor(
    @InjectRepository(Stocks)
    private stocksRepo: Repository<Stocks>,
  ) {}

  async getAllStocks():Promise<any>{
    return await this.stocksRepo.find({
        order: {stockId:'ASC'}
    })
  }

  async createStocks(data:Stocks):Promise<any>{
    await this.stocksRepo.save({
        stockName: data.stockName,
        stockDescription: data.stockDescription,
        stockQuantity: data.stockQuantity,
        stockReorderPoint: data.stockReorderPoint,
        stockUsed : data.stockUsed,
        stockScrap: data.stockScrap,
        stockSize: data.stockSize,
        stockColor:data.stockColor,
        stockModifiedDate: new Date()
    })
    const res = await this.getAllStocks()
    return{
        message:'Data Inserted',
        result : res
    }
  }
  async updateStocks(id:number, data:Stocks):Promise<any>{
    await this.stocksRepo.update({stockId:id},{
        stockName: data.stockName,
        stockDescription: data.stockDescription,
        stockQuantity: data.stockQuantity,
        stockReorderPoint: data.stockReorderPoint,
        stockUsed : data.stockUsed,
        stockScrap: data.stockScrap,
        stockSize: data.stockSize,
        stockColor:data.stockColor,
        stockModifiedDate: new Date()
    })
    const res = await this.getAllStocks()
    return{
        message:'Data Updated',
        result:res
    }
  }
}
