import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { VendorProduct } from 'entities/VendorProduct';
import { Repository} from 'typeorm'

@Injectable()
export class VendorProductService {
    constructor(@InjectRepository(VendorProduct)
    private venproRepo:Repository<VendorProduct>
    ){}

    async getVenpro():Promise<any>{
        const res = await this.venproRepo.query(`select * from purchasing.getVendorProductId()`)

        return {
            res
        }
    }

    async insertVendorProduct(id:number,data:any):Promise<any>{
        await this.venproRepo.query(`call purchasing.insertvendorproduct($1,$2,$3,$4,$5)`,[data.stockname, data.stockquantity, data.stockremain, data.stockprice, id])
        const res = await this.getVenpro()
        return {
            message:'data Inserted',
            res: res.res
        }
    }
}
