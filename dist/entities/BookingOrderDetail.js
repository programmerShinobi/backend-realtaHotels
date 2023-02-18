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
exports.BookingOrderDetail = void 0;
const typeorm_1 = require("typeorm");
const Facilities_1 = require("./Facilities");
const BookingOrders_1 = require("./BookingOrders");
const BookingOrderDetailExtra_1 = require("./BookingOrderDetailExtra");
const SpecialOfferCoupons_1 = require("./SpecialOfferCoupons");
const UserBreakfeast_1 = require("./UserBreakfeast");
let BookingOrderDetail = class BookingOrderDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "borde_id" }),
    __metadata("design:type", Number)
], BookingOrderDetail.prototype, "bordeId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "borde_checkin",
        nullable: true,
    }),
    __metadata("design:type", Date)
], BookingOrderDetail.prototype, "bordeCheckin", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "borde_checkout",
        nullable: true,
    }),
    __metadata("design:type", Date)
], BookingOrderDetail.prototype, "bordeCheckout", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "borde_adults", nullable: true }),
    __metadata("design:type", Number)
], BookingOrderDetail.prototype, "bordeAdults", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "borde_kids", nullable: true }),
    __metadata("design:type", Number)
], BookingOrderDetail.prototype, "bordeKids", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "borde_price", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetail.prototype, "bordePrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "borde_extra", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetail.prototype, "bordeExtra", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "borde_discount", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetail.prototype, "bordeDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "borde_tax", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetail.prototype, "bordeTax", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "borde_subtotal", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetail.prototype, "bordeSubtotal", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Facilities_1.Facilities, (facilities) => facilities.bookingOrderDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "borde_faci_id", referencedColumnName: "faciId" }]),
    __metadata("design:type", Facilities_1.Facilities)
], BookingOrderDetail.prototype, "bordeFaci", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BookingOrders_1.BookingOrders, (bookingOrders) => bookingOrders.bookingOrderDetails, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "border_boor_id", referencedColumnName: "boorId" }]),
    __metadata("design:type", BookingOrders_1.BookingOrders)
], BookingOrderDetail.prototype, "borderBoor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BookingOrderDetailExtra_1.BookingOrderDetailExtra, (bookingOrderDetailExtra) => bookingOrderDetailExtra.boexBorde),
    __metadata("design:type", Array)
], BookingOrderDetail.prototype, "bookingOrderDetailExtras", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SpecialOfferCoupons_1.SpecialOfferCoupons, (specialOfferCoupons) => specialOfferCoupons.socoBorde),
    __metadata("design:type", Array)
], BookingOrderDetail.prototype, "specialOfferCoupons", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserBreakfeast_1.UserBreakfeast, (userBreakfeast) => userBreakfeast.usbrBorde),
    __metadata("design:type", Array)
], BookingOrderDetail.prototype, "userBreakfeasts", void 0);
BookingOrderDetail = __decorate([
    (0, typeorm_1.Index)("pk_boor_borde_id", ["bordeId"], { unique: true }),
    (0, typeorm_1.Entity)("booking_order_detail", { schema: "booking" })
], BookingOrderDetail);
exports.BookingOrderDetail = BookingOrderDetail;
//# sourceMappingURL=BookingOrderDetail.js.map