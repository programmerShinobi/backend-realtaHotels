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
exports.BookingOrderDetailExtra = void 0;
const typeorm_1 = require("typeorm");
const PriceItems_1 = require("./PriceItems");
const BookingOrderDetail_1 = require("./BookingOrderDetail");
let BookingOrderDetailExtra = class BookingOrderDetailExtra {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "boex_id" }),
    __metadata("design:type", Number)
], BookingOrderDetailExtra.prototype, "boexId", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "boex_price", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetailExtra.prototype, "boexPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "boex_qty", nullable: true }),
    __metadata("design:type", Number)
], BookingOrderDetailExtra.prototype, "boexQty", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "boex_subtotal", nullable: true }),
    __metadata("design:type", String)
], BookingOrderDetailExtra.prototype, "boexSubtotal", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "boex_measure_unit",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], BookingOrderDetailExtra.prototype, "boexMeasureUnit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PriceItems_1.PriceItems, (priceItems) => priceItems.bookingOrderDetailExtras, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "boex_prit_id", referencedColumnName: "pritId" }]),
    __metadata("design:type", PriceItems_1.PriceItems)
], BookingOrderDetailExtra.prototype, "boexPrit", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BookingOrderDetail_1.BookingOrderDetail, (bookingOrderDetail) => bookingOrderDetail.bookingOrderDetailExtras, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "boex_borde_id", referencedColumnName: "bordeId" }]),
    __metadata("design:type", BookingOrderDetail_1.BookingOrderDetail)
], BookingOrderDetailExtra.prototype, "boexBorde", void 0);
BookingOrderDetailExtra = __decorate([
    (0, typeorm_1.Index)("pk_boex_id", ["boexId"], { unique: true }),
    (0, typeorm_1.Entity)("booking_order_detail_extra", { schema: "booking" })
], BookingOrderDetailExtra);
exports.BookingOrderDetailExtra = BookingOrderDetailExtra;
//# sourceMappingURL=BookingOrderDetailExtra.js.map