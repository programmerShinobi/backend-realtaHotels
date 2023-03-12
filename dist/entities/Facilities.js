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
exports.Facilities = void 0;
const typeorm_1 = require("typeorm");
const BookingOrderDetail_1 = require("./BookingOrderDetail");
const CategoryGroup_1 = require("./CategoryGroup");
const Hotels_1 = require("./Hotels");
const FacilityPhotos_1 = require("./FacilityPhotos");
const FacilityPriceHistory_1 = require("./FacilityPriceHistory");
const RestoMenus_1 = require("./RestoMenus");
const StockDetail_1 = require("./StockDetail");
const WorkOrderDetail_1 = require("./WorkOrderDetail");
let Facilities = class Facilities {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "faci_id" }),
    __metadata("design:type", Number)
], Facilities.prototype, "faciId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "faci_name",
        nullable: true,
        length: 155,
    }),
    __metadata("design:type", String)
], Facilities.prototype, "faciName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "faci_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Facilities.prototype, "faciDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "faci_max_number", nullable: true }),
    __metadata("design:type", Number)
], Facilities.prototype, "faciMaxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "faci_measure_unit",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], Facilities.prototype, "faciMeasureUnit", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "faci_room_number",
        nullable: true,
        unique: true,
        length: 6,
    }),
    __metadata("design:type", String)
], Facilities.prototype, "faciRoomNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "faci_startdate",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Facilities.prototype, "faciStartdate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "faci_endate",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Facilities.prototype, "faciEndate", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faci_low_price", nullable: true }),
    __metadata("design:type", String)
], Facilities.prototype, "faciLowPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faci_hight_price", nullable: true }),
    __metadata("design:type", String)
], Facilities.prototype, "faciHightPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faci_rate_price", nullable: true }),
    __metadata("design:type", String)
], Facilities.prototype, "faciRatePrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faci_discount", nullable: true }),
    __metadata("design:type", String)
], Facilities.prototype, "faciDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "faci_tax_rate", nullable: true }),
    __metadata("design:type", String)
], Facilities.prototype, "faciTaxRate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "faci_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Facilities.prototype, "faciModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => BookingOrderDetail_1.BookingOrderDetail, (bookingOrderDetail) => bookingOrderDetail.bordeFaci),
    __metadata("design:type", Array)
], Facilities.prototype, "bookingOrderDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoryGroup_1.CategoryGroup, (categoryGroup) => categoryGroup.facilities),
    (0, typeorm_1.JoinColumn)([{ name: "faci_cagro_id", referencedColumnName: "cagroId" }]),
    __metadata("design:type", CategoryGroup_1.CategoryGroup)
], Facilities.prototype, "faciCagro", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Hotels_1.Hotels, (hotels) => hotels.facilities),
    (0, typeorm_1.JoinColumn)([{ name: "faci_hotel_id", referencedColumnName: "hotelId" }]),
    __metadata("design:type", Hotels_1.Hotels)
], Facilities.prototype, "faciHotel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FacilityPhotos_1.FacilityPhotos, (facilityPhotos) => facilityPhotos.faphoFaci),
    __metadata("design:type", Array)
], Facilities.prototype, "facilityPhotos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FacilityPriceHistory_1.FacilityPriceHistory, (facilityPriceHistory) => facilityPriceHistory.faphFaci),
    __metadata("design:type", Array)
], Facilities.prototype, "facilityPriceHistories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RestoMenus_1.RestoMenus, (restoMenus) => restoMenus.remeFaci),
    __metadata("design:type", Array)
], Facilities.prototype, "restoMenus", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => StockDetail_1.StockDetail, (stockDetail) => stockDetail.stodFaci),
    __metadata("design:type", Array)
], Facilities.prototype, "stockDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => WorkOrderDetail_1.WorkOrderDetail, (workOrderDetail) => workOrderDetail.wodeFaci),
    __metadata("design:type", Array)
], Facilities.prototype, "workOrderDetails", void 0);
Facilities = __decorate([
    (0, typeorm_1.Index)("faci_id_pk", ["faciId"], { unique: true }),
    (0, typeorm_1.Index)("facilities_faci_room_number_key", ["faciRoomNumber"], { unique: true }),
    (0, typeorm_1.Entity)("facilities", { schema: "hotel" })
], Facilities);
exports.Facilities = Facilities;
//# sourceMappingURL=Facilities.js.map