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
exports.Vendor = void 0;
const typeorm_1 = require("typeorm");
const PurchaseOrderHeader_1 = require("./PurchaseOrderHeader");
let Vendor = class Vendor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "vendor_id" }),
    __metadata("design:type", Number)
], Vendor.prototype, "vendorId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "vendor_name",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], Vendor.prototype, "vendorName", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "vendor_active", nullable: true }),
    __metadata("design:type", Number)
], Vendor.prototype, "vendorActive", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "vendor_priority", nullable: true }),
    __metadata("design:type", Number)
], Vendor.prototype, "vendorPriority", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "vendor_register_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], Vendor.prototype, "vendorRegisterDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "vendor_weburi",
        nullable: true,
        length: 1024,
    }),
    __metadata("design:type", String)
], Vendor.prototype, "vendorWeburi", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "vendor_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Vendor.prototype, "vendorModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PurchaseOrderHeader_1.PurchaseOrderHeader, (purchaseOrderHeader) => purchaseOrderHeader.poheVendor),
    __metadata("design:type", Array)
], Vendor.prototype, "purchaseOrderHeaders", void 0);
Vendor = __decorate([
    (0, typeorm_1.Index)("vendor_id_pk", ["vendorId"], { unique: true }),
    (0, typeorm_1.Entity)("vendor", { schema: "purchasing" })
], Vendor);
exports.Vendor = Vendor;
//# sourceMappingURL=Vendor.js.map