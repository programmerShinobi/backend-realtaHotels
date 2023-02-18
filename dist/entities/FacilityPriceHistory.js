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
exports.FacilityPriceHistory = void 0;
const typeorm_1 = require("typeorm");
const Facilities_1 = require("./Facilities");
const Users_1 = require("./Users");
let FacilityPriceHistory = class FacilityPriceHistory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "faph_id" }),
    __metadata("design:type", Number)
], FacilityPriceHistory.prototype, "faphId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "faph_startdate",
        nullable: true,
    }),
    __metadata("design:type", Date)
], FacilityPriceHistory.prototype, "faphStartdate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "faph_enddate",
        nullable: true,
    }),
    __metadata("design:type", Date)
], FacilityPriceHistory.prototype, "faphEnddate", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faph_low_price", nullable: true }),
    __metadata("design:type", String)
], FacilityPriceHistory.prototype, "faphLowPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faph_high_price", nullable: true }),
    __metadata("design:type", String)
], FacilityPriceHistory.prototype, "faphHighPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faph_discount", nullable: true }),
    __metadata("design:type", String)
], FacilityPriceHistory.prototype, "faphDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faph_tax_rate", nullable: true }),
    __metadata("design:type", String)
], FacilityPriceHistory.prototype, "faphTaxRate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "faph_modified_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], FacilityPriceHistory.prototype, "faphModifiedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Facilities_1.Facilities, (facilities) => facilities.facilityPriceHistories),
    (0, typeorm_1.JoinColumn)([{ name: "faph_faci_id", referencedColumnName: "faciId" }]),
    __metadata("design:type", Facilities_1.Facilities)
], FacilityPriceHistory.prototype, "faphFaci", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.facilityPriceHistories),
    (0, typeorm_1.JoinColumn)([{ name: "faph_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], FacilityPriceHistory.prototype, "faphUser", void 0);
FacilityPriceHistory = __decorate([
    (0, typeorm_1.Index)("facility_price_history_pk", ["faphId"], { unique: true }),
    (0, typeorm_1.Entity)("facility_price_history", { schema: "hotel" })
], FacilityPriceHistory);
exports.FacilityPriceHistory = FacilityPriceHistory;
//# sourceMappingURL=FacilityPriceHistory.js.map