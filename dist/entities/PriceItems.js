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
exports.PriceItems = void 0;
const typeorm_1 = require("typeorm");
const BookingOrderDetailExtra_1 = require("./BookingOrderDetailExtra");
let PriceItems = class PriceItems {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "prit_id" }),
    __metadata("design:type", Number)
], PriceItems.prototype, "pritId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "prit_name",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], PriceItems.prototype, "pritName", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "prit_price", nullable: true }),
    __metadata("design:type", String)
], PriceItems.prototype, "pritPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "prit_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], PriceItems.prototype, "pritDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "prit_type",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], PriceItems.prototype, "pritType", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "prit_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PriceItems.prototype, "pritModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BookingOrderDetailExtra_1.BookingOrderDetailExtra, (bookingOrderDetailExtra) => bookingOrderDetailExtra.boexPrit),
    __metadata("design:type", Array)
], PriceItems.prototype, "bookingOrderDetailExtras", void 0);
PriceItems = __decorate([
    (0, typeorm_1.Index)("prit_id_pk", ["pritId"], { unique: true }),
    (0, typeorm_1.Index)("price_items_prit_name_key", ["pritName"], { unique: true }),
    (0, typeorm_1.Entity)("price_items", { schema: "master" })
], PriceItems);
exports.PriceItems = PriceItems;
//# sourceMappingURL=PriceItems.js.map