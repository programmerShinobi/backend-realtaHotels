import { SpecialOfferCouponsService } from 'src/service/booking/special-offer-coupons.service';
export declare class SpecialOfferCouponController {
    private specialoffercouponService;
    constructor(specialoffercouponService: SpecialOfferCouponsService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: any): Promise<any>;
    update(params: any, body: any): Promise<any>;
    remove(params: any): Promise<any>;
}
