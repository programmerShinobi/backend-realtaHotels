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
exports.Stocks = void 0;
const typeorm_1 = require("typeorm");
const StockDetail_1 = require("./StockDetail");
const StockPhoto_1 = require("./StockPhoto");
let Stocks = class Stocks {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "stock_id" }),
    __metadata("design:type", Number)
], Stocks.prototype, "stockId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stock_name",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Stocks.prototype, "stockName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stock_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Stocks.prototype, "stockDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "stock_quantity", nullable: true }),
    __metadata("design:type", Number)
], Stocks.prototype, "stockQuantity", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "stock_reorder_point", nullable: true }),
    __metadata("design:type", Number)
], Stocks.prototype, "stockReorderPoint", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "stock_used", nullable: true }),
    __metadata("design:type", Number)
], Stocks.prototype, "stockUsed", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "stock_scrap", nullable: true }),
    __metadata("design:type", Number)
], Stocks.prototype, "stockScrap", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "stock_price", nullable: true }),
    __metadata("design:type", String)
], Stocks.prototype, "stockPrice", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "stock_standar_cost", nullable: true }),
    __metadata("design:type", String)
], Stocks.prototype, "stockStandarCost", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stock_size",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], Stocks.prototype, "stockSize", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "stock_color",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], Stocks.prototype, "stockColor", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "stock_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Stocks.prototype, "stockModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => StockDetail_1.StockDetail, (stockDetail) => stockDetail.stodStock),
    __metadata("design:type", Array)
], Stocks.prototype, "stockDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => StockPhoto_1.StockPhoto, (stockPhoto) => stockPhoto.sphoStock),
    __metadata("design:type", Array)
], Stocks.prototype, "stockPhotos", void 0);
Stocks = __decorate([
    (0, typeorm_1.Index)("stock_id_pk", ["stockId"], { unique: true }),
    (0, typeorm_1.Entity)("stocks", { schema: "purchasing" })
], Stocks);
exports.Stocks = Stocks;
//# sourceMappingURL=Stocks.js.map