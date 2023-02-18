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
exports.PurchaseOrderDetail = void 0;
const typeorm_1 = require("typeorm");
const PurchaseOrderHeader_1 = require("./PurchaseOrderHeader");
let PurchaseOrderDetail = class PurchaseOrderDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "pode_id" }),
    __metadata("design:type", Number)
], PurchaseOrderDetail.prototype, "podeId", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "pode_order_qty", nullable: true }),
    __metadata("design:type", Number)
], PurchaseOrderDetail.prototype, "podeOrderQty", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "pode_price", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderDetail.prototype, "podePrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "pode_line_total", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderDetail.prototype, "podeLineTotal", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "pode_received_qty", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderDetail.prototype, "podeReceivedQty", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "pode_rejected_qty", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderDetail.prototype, "podeRejectedQty", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "pode_stocked_qty", nullable: true }),
    __metadata("design:type", String)
], PurchaseOrderDetail.prototype, "podeStockedQty", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "pode_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PurchaseOrderDetail.prototype, "podeModifiedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PurchaseOrderHeader_1.PurchaseOrderHeader, (purchaseOrderHeader) => purchaseOrderHeader.purchaseOrderDetails, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "pode_pohe_id", referencedColumnName: "poheId" }]),
    __metadata("design:type", PurchaseOrderHeader_1.PurchaseOrderHeader)
], PurchaseOrderDetail.prototype, "podePohe", void 0);
PurchaseOrderDetail = __decorate([
    (0, typeorm_1.Index)("pode_id_pk", ["podeId"], { unique: true }),
    (0, typeorm_1.Entity)("purchase_order_detail", { schema: "purchasing" })
], PurchaseOrderDetail);
exports.PurchaseOrderDetail = PurchaseOrderDetail;
//# sourceMappingURL=PurchaseOrderDetail.js.map