import { Repository } from 'typeorm';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';
export declare class SpecialOfferCouponsService {
    private specialoffercouponRepository;
    constructor(specialoffercouponRepository: Repository<SpecialOfferCoupons>);
    findAllSpecialOfferCoupon(): Promise<any>;
    findOneSpecialOfferCoupon(soco_id: number): Promise<any>;
    createSpecialOfferCoupon(data: SpecialOfferCoupons): Promise<any>;
    updateSpecialOfferCoupon(soco_id: number, data: SpecialOfferCoupons): Promise<any>;
    deleteSpecialOfferCoupon(soco_id: number): Promise<any>;
}
