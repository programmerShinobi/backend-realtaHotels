import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';

@Injectable()
export class SpecialOfferCouponsService {
    constructor ( @InjectRepository(SpecialOfferCoupons)
    private specialoffercouponRepository: Repository<SpecialOfferCoupons>
    ){}

    async findAllSpecialOfferCoupon() :Promise<any> {
        return await this.specialoffercouponRepository.find()
    }

    async findOneSpecialOfferCoupon(soco_id:number):Promise<any> {
        return await this.specialoffercouponRepository.findOne({
            where :{
                socoId : soco_id
            }
        })
    }

    async createSpecialOfferCoupon(data:SpecialOfferCoupons):Promise<any> {
        return await this.specialoffercouponRepository.save(data)
    }

    async updateSpecialOfferCoupon(soco_id:number, data: SpecialOfferCoupons):Promise<any>{
        return await this.specialoffercouponRepository.update({socoId:soco_id},data)
    }

    async deleteSpecialOfferCoupon(soco_id:number):Promise<any> { 
        return await this.specialoffercouponRepository.delete({
            socoId: soco_id
        })
    }

}
