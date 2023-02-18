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
exports.SpecialOffers = void 0;
const typeorm_1 = require("typeorm");
const SpecialOfferCoupons_1 = require("./SpecialOfferCoupons");
let SpecialOffers = class SpecialOffers {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "spof_id" }),
    __metadata("design:type", Number)
], SpecialOffers.prototype, "spofId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "spof_name",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], SpecialOffers.prototype, "spofName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "spof_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], SpecialOffers.prototype, "spofDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "spof_type",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], SpecialOffers.prototype, "spofType", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "spof_discount", nullable: true }),
    __metadata("design:type", String)
], SpecialOffers.prototype, "spofDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "spof_start_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], SpecialOffers.prototype, "spofStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "spof_end_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], SpecialOffers.prototype, "spofEndDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "spof_min_qty", nullable: true }),
    __metadata("design:type", Number)
], SpecialOffers.prototype, "spofMinQty", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "spof_max_qty", nullable: true }),
    __metadata("design:type", Number)
], SpecialOffers.prototype, "spofMaxQty", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "spof_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], SpecialOffers.prototype, "spofModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => SpecialOfferCoupons_1.SpecialOfferCoupons, (specialOfferCoupons) => specialOfferCoupons.socoSpof),
    __metadata("design:type", Array)
], SpecialOffers.prototype, "specialOfferCoupons", void 0);
SpecialOffers = __decorate([
    (0, typeorm_1.Index)("pk_spof_id", ["spofId"], { unique: true }),
    (0, typeorm_1.Entity)("special_offers", { schema: "booking" })
], SpecialOffers);
exports.SpecialOffers = SpecialOffers;
//# sourceMappingURL=SpecialOffers.js.map