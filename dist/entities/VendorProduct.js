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
exports.VendorProduct = void 0;
const typeorm_1 = require("typeorm");
const Stocks_1 = require("./Stocks");
const Vendor_1 = require("./Vendor");
let VendorProduct = class VendorProduct {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "vepro_id" }),
    __metadata("design:type", Number)
], VendorProduct.prototype, "veproId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "vepro_qty_stocked", nullable: true }),
    __metadata("design:type", Number)
], VendorProduct.prototype, "veproQtyStocked", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "vepro_qty_remaining", nullable: true }),
    __metadata("design:type", Number)
], VendorProduct.prototype, "veproQtyRemaining", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "vepro_price", nullable: true }),
    __metadata("design:type", String)
], VendorProduct.prototype, "veproPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Stocks_1.Stocks, (stocks) => stocks.vendorProducts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "vepro_stock_id", referencedColumnName: "stockId" }]),
    __metadata("design:type", Stocks_1.Stocks)
], VendorProduct.prototype, "veproStock", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vendor_1.Vendor, (vendor) => vendor.vendorProducts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "vepro_vendor_id", referencedColumnName: "vendorEntityId" },
    ]),
    __metadata("design:type", Vendor_1.Vendor)
], VendorProduct.prototype, "veproVendor", void 0);
VendorProduct = __decorate([
    (0, typeorm_1.Index)("vepro_id_pk", ["veproId"], { unique: true }),
    (0, typeorm_1.Entity)("vendor_product", { schema: "purchasing" })
], VendorProduct);
exports.VendorProduct = VendorProduct;
//# sourceMappingURL=VendorProduct.js.map