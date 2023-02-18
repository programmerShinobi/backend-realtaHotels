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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialOfferCoupons = void 0;
const typeorm_1 = require("typeorm");
const SpecialOffers_1 = require("./SpecialOffers");
const BookingOrderDetail_1 = require("./BookingOrderDetail");
let SpecialOfferCoupons = class SpecialOfferCoupons {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "soco_id" }),
    __metadata("design:type", Number)
], SpecialOfferCoupons.prototype, "socoId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => SpecialOffers_1.SpecialOffers, (specialOffers) => specialOffers.specialOfferCoupons, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "soco_spof_id", referencedColumnName: "spofId" }]),
    __metadata("design:type", SpecialOffers_1.SpecialOffers)
], SpecialOfferCoupons.prototype, "socoSpof", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BookingOrderDetail_1.BookingOrderDetail, (bookingOrderDetail) => bookingOrderDetail.specialOfferCoupons, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "soco_borde_id", referencedColumnName: "bordeId" }]),
    __metadata("design:type", BookingOrderDetail_1.BookingOrderDetail)
], SpecialOfferCoupons.prototype, "socoBorde", void 0);
SpecialOfferCoupons = __decorate([
    (0, typeorm_1.Index)("pk_soco_id", ["socoId"], { unique: true }),
    (0, typeorm_1.Entity)("special_offer_coupons", { schema: "booking" })
], SpecialOfferCoupons);
exports.SpecialOfferCoupons = SpecialOfferCoupons;
//# sourceMappingURL=SpecialOfferCoupons.js.map