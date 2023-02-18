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
exports.StockPhoto = void 0;
const typeorm_1 = require("typeorm");
const Stocks_1 = require("./Stocks");
let StockPhoto = class StockPhoto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "spho_id" }),
    __metadata("design:type", Number)
], StockPhoto.prototype, "sphoId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "spho_thumbnail_filename",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], StockPhoto.prototype, "sphoThumbnailFilename", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "spho_photo_filename",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], StockPhoto.prototype, "sphoPhotoFilename", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "spho_primary", nullable: true }),
    __metadata("design:type", Number)
], StockPhoto.prototype, "sphoPrimary", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "spho_url",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], StockPhoto.prototype, "sphoUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Stocks_1.Stocks, (stocks) => stocks.stockPhotos, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "spho_stock_id", referencedColumnName: "stockId" }]),
    __metadata("design:type", Stocks_1.Stocks)
], StockPhoto.prototype, "sphoStock", void 0);
StockPhoto = __decorate([
    (0, typeorm_1.Index)("spho_id_pk", ["sphoId"], { unique: true }),
    (0, typeorm_1.Entity)("stock_photo", { schema: "purchasing" })
], StockPhoto);
exports.StockPhoto = StockPhoto;
//# sourceMappingURL=StockPhoto.js.map