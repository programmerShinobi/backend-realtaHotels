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
exports.UserBreakfeast = void 0;
const typeorm_1 = require("typeorm");
const BookingOrderDetail_1 = require("./BookingOrderDetail");
let UserBreakfeast = class UserBreakfeast {
};
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        primary: true,
        name: "usbr_modified_date",
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], UserBreakfeast.prototype, "usbrModifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "usbr_total_vacant", nullable: true }),
    __metadata("design:type", Number)
], UserBreakfeast.prototype, "usbrTotalVacant", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => BookingOrderDetail_1.BookingOrderDetail, (bookingOrderDetail) => bookingOrderDetail.userBreakfeasts, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "usbr_borde_id", referencedColumnName: "bordeId" }]),
    __metadata("design:type", BookingOrderDetail_1.BookingOrderDetail)
], UserBreakfeast.prototype, "usbrBorde", void 0);
UserBreakfeast = __decorate([
    (0, typeorm_1.Index)("pk_borde_modified_id", ["usbrModifiedDate"], { unique: true }),
    (0, typeorm_1.Entity)("user_breakfeast", { schema: "booking" })
], UserBreakfeast);
exports.UserBreakfeast = UserBreakfeast;
//# sourceMappingURL=UserBreakfeast.js.map