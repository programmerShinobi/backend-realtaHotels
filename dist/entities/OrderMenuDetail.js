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
exports.OrderMenuDetail = void 0;
const typeorm_1 = require("typeorm");
const OrderMenus_1 = require("./OrderMenus");
const RestoMenus_1 = require("./RestoMenus");
let OrderMenuDetail = class OrderMenuDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "omde_id" }),
    __metadata("design:type", Number)
], OrderMenuDetail.prototype, "omdeId", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "orme_price", nullable: true }),
    __metadata("design:type", String)
], OrderMenuDetail.prototype, "ormePrice", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "orme_qty", nullable: true }),
    __metadata("design:type", Number)
], OrderMenuDetail.prototype, "ormeQty", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "orme_subtotal", nullable: true }),
    __metadata("design:type", String)
], OrderMenuDetail.prototype, "ormeSubtotal", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "orme_discount", nullable: true }),
    __metadata("design:type", String)
], OrderMenuDetail.prototype, "ormeDiscount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderMenus_1.OrderMenus, (orderMenus) => orderMenus.orderMenuDetails),
    (0, typeorm_1.JoinColumn)([{ name: "omde_orme_id", referencedColumnName: "ormeId" }]),
    __metadata("design:type", OrderMenus_1.OrderMenus)
], OrderMenuDetail.prototype, "omdeOrme", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RestoMenus_1.RestoMenus, (restoMenus) => restoMenus.orderMenuDetails, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "omde_reme_id", referencedColumnName: "remeId" }]),
    __metadata("design:type", RestoMenus_1.RestoMenus)
], OrderMenuDetail.prototype, "omdeReme", void 0);
OrderMenuDetail = __decorate([
    (0, typeorm_1.Index)("pk_omde_id", ["omdeId"], { unique: true }),
    (0, typeorm_1.Entity)("order_menu_detail", { schema: "resto" })
], OrderMenuDetail);
exports.OrderMenuDetail = OrderMenuDetail;
//# sourceMappingURL=OrderMenuDetail.js.map