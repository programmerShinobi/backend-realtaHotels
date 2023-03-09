import { Body, Get, Param, Controller, Post, Delete,Put } from '@nestjs/common';
import { SpecialOfferCouponsService } from 'src/service/booking/special-offer-coupons.service';
import { SpecialOfferCoupons } from 'entities/SpecialOfferCoupons';

@Controller('special-offer-coupon')
export class SpecialOfferCouponController {
    constructor( private specialoffercouponService: SpecialOfferCouponsService){}

    @Get()
    findall(): Promise<any> {
        return this.specialoffercouponService.findAllSpecialOfferCoupon();
    }
    @Get(':id')
    findbyid(@Param('id') id: number): Promise<any> {
        return this.specialoffercouponService.findOneSpecialOfferCoupon(id);
    }
    @Post("create")
    create(@Body() body: any): Promise<any> {
        return this.specialoffercouponService.createSpecialOfferCoupon(body);
    }
    @Put(":id")
    update(@Param() params,@Body() body: any): Promise<any> {
        return this.specialoffercouponService.updateSpecialOfferCoupon(params.id,body);
    }
    @Delete(':id')
    remove(@Param() params): Promise<any> {
        return this.specialoffercouponService.deleteSpecialOfferCoupon(params.id);
    }
}
