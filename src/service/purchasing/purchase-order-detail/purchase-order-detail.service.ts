import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm'
import { PurchaseOrderDetail } from 'entities/PurchaseOrderDetail';

@Injectable()
export class PurchaseOrderDetailService {
    constructor(@InjectRepository(PurchaseOrderDetail)
    private podRepo:Repository<PurchaseOrderDetail>
    ){}

    async getAllDetails ():Promise<any>{
        return this.podRepo.query('select * from purchasing.purchaseorderdetail()')
    }

    async editDetails (id:number, data:PurchaseOrderDetail):Promise<any>{
        try{
            await this.podRepo.update({podeId:id},{
                podeOrderQty : data.podeOrderQty,
                podeReceivedQty: data.podeReceivedQty,
                podeRejectedQty: data.podeRejectedQty
            })
            const res = await this.getAllDetails()
            return{
                message:'Order Updated',
                result: res
            }
        }catch(e:any){
            return e
        }
    }
}
