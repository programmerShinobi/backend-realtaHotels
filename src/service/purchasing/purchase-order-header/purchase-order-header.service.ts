import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrderHeader } from 'entities/PurchaseOrderHeader';

@Injectable()
export class PurchaseOrderHeaderService {
  constructor(
    @InjectRepository(PurchaseOrderHeader)
    private pohRepo: Repository<PurchaseOrderHeader>,
  ) {}


  async getAllPo():Promise<any>{
    return this.pohRepo.find()
  }

  async getPoForPurchaseOrder():Promise<any>{
    return this.pohRepo.query('select * from purchasing.getPO()')
  }
  async insertPO(data: any): Promise<any> {
    try{
        await this.pohRepo
      .query(
        'call purchasing.purchaseorderinsert($1, $2,$3,$4,$5::int[],$6::int[],$7::int[],$8::int[])',
        [
          data.vendorid,
          data.subtotalbyvendor,
          data.taxbyvendor,
          data.totalbyvendor,
          data.stockQuantity,
          data.stockPrice,
          data.stockLineTotal,
          data.stocksid,
        ],
      )
      return {
        message: 'Order Sent'
      }
    }catch(e:any){
        return e
    }
  }

  async editStatus(id:number, data:PurchaseOrderHeader):Promise<any>{
    try{
      await this.pohRepo.update({poheId : id},{
        poheStatus : data.poheStatus
      })
      const res = await this.getPoForPurchaseOrder()
      return{
        message: 'Status Updated',
        result: res
      }
    }catch(e:any){
      return e
    }
  }
}
