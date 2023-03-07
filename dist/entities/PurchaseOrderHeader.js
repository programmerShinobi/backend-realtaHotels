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
exports.PurchaseOrderHeader = void 0;
const typeorm_1 = require("typeorm");
const PurchaseOrderDetail_1 = require("./PurchaseOrderDetail");
const Vendor_1 = require("./Vendor");
const StockDetail_1 = require("./StockDetail");
let PurchaseOrderHeader = class PurchaseOrderHeader {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "pohe_id" }),
    __metadata("design:type", Number)
], PurchaseOrderHeader.prototype, "poheId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "pohe_number",
        unique: true,
        length: 20,
    }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "pohe_status" }),
    __metadata("design:type", Number)
], PurchaseOrderHeader.prototype, "poheStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "pohe_order_date" }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheOrderDate", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "pohe_subtotal", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheSubtotal", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "pohe_tax", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheTax", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "pohe_total_amount", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheTotalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "pohe_refund", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheRefund", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "pohe_arrival_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], PurchaseOrderHeader.prototype, "poheArrivalDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "pohe_pay_type",
        nullable: true,
        length: 2,
    }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "pohePayType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "pohe_emp_id",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], PurchaseOrderHeader.prototype, "poheEmpId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PurchaseOrderDetail_1.PurchaseOrderDetail, (purchaseOrderDetail) => purchaseOrderDetail.podePohe),
    __metadata("design:type", Array)
], PurchaseOrderHeader.prototype, "purchaseOrderDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vendor_1.Vendor, (vendor) => vendor.purchaseOrderHeaders, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([
        { name: "pohe_vendor_id", referencedColumnName: "vendorEntityId" },
    ]),
    __metadata("design:type", Vendor_1.Vendor)
], PurchaseOrderHeader.prototype, "poheVendor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => StockDetail_1.StockDetail, (stockDetail) => stockDetail.stodPohe),
    __metadata("design:type", Array)
], PurchaseOrderHeader.prototype, "stockDetails", void 0);
PurchaseOrderHeader = __decorate([
    (0, typeorm_1.Index)("pohe_id_pk", ["poheId"], { unique: true }),
    (0, typeorm_1.Index)("purchase_order_header_pohe_number_key", ["poheNumber"], {
        unique: true,
    }),
    (0, typeorm_1.Entity)("purchase_order_header", { schema: "purchasing" })
], PurchaseOrderHeader);
exports.PurchaseOrderHeader = PurchaseOrderHeader;
//# sourceMappingURL=PurchaseOrderHeader.js.map