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
exports.StockDetail = void 0;
const typeorm_1 = require("typeorm");
const Facilities_1 = require("./Facilities");
const PurchaseOrderHeader_1 = require("./PurchaseOrderHeader");
const Stocks_1 = require("./Stocks");
let StockDetail = class StockDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "stod_id" }),
    __metadata("design:type", Number)
], StockDetail.prototype, "stodId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stod_barcode_number",
        nullable: true,
        unique: true,
        length: 225,
    }),
    __metadata("design:type", String)
], StockDetail.prototype, "stodBarcodeNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stod_status",
        nullable: true,
        length: 2,
    }),
    __metadata("design:type", String)
], StockDetail.prototype, "stodStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stod_notes",
        nullable: true,
        length: 1024,
    }),
    __metadata("design:type", String)
], StockDetail.prototype, "stodNotes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Facilities_1.Facilities, (facilities) => facilities.stockDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "stod_faci_id", referencedColumnName: "faciId" }]),
    __metadata("design:type", Facilities_1.Facilities)
], StockDetail.prototype, "stodFaci", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PurchaseOrderHeader_1.PurchaseOrderHeader, (purchaseOrderHeader) => purchaseOrderHeader.stockDetails, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([{ name: "stod_pohe_id", referencedColumnName: "poheId" }]),
    __metadata("design:type", PurchaseOrderHeader_1.PurchaseOrderHeader)
], StockDetail.prototype, "stodPohe", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Stocks_1.Stocks, (stocks) => stocks.stockDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "stod_stock_id", referencedColumnName: "stockId" }]),
    __metadata("design:type", Stocks_1.Stocks)
], StockDetail.prototype, "stodStock", void 0);
StockDetail = __decorate([
    (0, typeorm_1.Index)("stock_detail_stod_barcode_number_key", ["stodBarcodeNumber"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("stod_id_pk", ["stodId"], { unique: true }),
    (0, typeorm_1.Entity)("stock_detail", { schema: "purchasing" })
], StockDetail);
exports.StockDetail = StockDetail;
//# sourceMappingURL=StockDetail.js.map