"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialOfferCouponController = void 0;
const common_1 = require("@nestjs/common");
const special_offer_coupons_service_1 = require("../../service/booking/special-offer-coupons.service");
let SpecialOfferCouponController = class SpecialOfferCouponController {
    constructor(specialoffercouponService) {
        this.specialoffercouponService = specialoffercouponService;
    }
    findall() {
        return this.specialoffercouponService.findAllSpecialOfferCoupon();
    }
    findbyid(id) {
        return this.specialoffercouponService.findOneSpecialOfferCoupon(id);
    }
    create(body) {
        return this.specialoffercouponService.createSpecialOfferCoupon(body);
    }
    update(params, body) {
        return this.specialoffercouponService.updateSpecialOfferCoupon(params.id, body);
    }
    remove(params) {
        return this.specialoffercouponService.deleteSpecialOfferCoupon(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialOfferCouponController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpecialOfferCouponController.prototype, "findbyid", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialOfferCouponController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecialOfferCouponController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialOfferCouponController.prototype, "remove", null);
SpecialOfferCouponController = __decorate([
    (0, common_1.Controller)('special-offer-coupon'),
    __metadata("design:paramtypes", [special_offer_coupons_service_1.SpecialOfferCouponsService])
], SpecialOfferCouponController);
exports.SpecialOfferCouponController = SpecialOfferCouponController;
//# sourceMappingURL=special-offer-coupon.controller.js.map