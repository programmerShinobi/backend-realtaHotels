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
exports.OrderMenus = void 0;
const typeorm_1 = require("typeorm");
const OrderMenuDetail_1 = require("./OrderMenuDetail");
const Users_1 = require("./Users");
let OrderMenus = class OrderMenus {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "orme_id" }),
    __metadata("design:type", Number)
], OrderMenus.prototype, "ormeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "orme_order_number",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], OrderMenus.prototype, "ormeOrderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "orme_order_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], OrderMenus.prototype, "ormeOrderDate", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "orme_total_item", nullable: true }),
    __metadata("design:type", Number)
], OrderMenus.prototype, "ormeTotalItem", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "orme_total_discount", nullable: true }),
    __metadata("design:type", String)
], OrderMenus.prototype, "ormeTotalDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "orme_total_amount", nullable: true }),
    __metadata("design:type", String)
], OrderMenus.prototype, "ormeTotalAmount", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "orme_pay_type", nullable: true, length: 2 }),
    __metadata("design:type", String)
], OrderMenus.prototype, "ormePayType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "orme_cardnumber",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], OrderMenus.prototype, "ormeCardnumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "orme_is_paid", nullable: true, length: 2 }),
    __metadata("design:type", String)
], OrderMenus.prototype, "ormeIsPaid", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "orme_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], OrderMenus.prototype, "ormeModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderMenuDetail_1.OrderMenuDetail, (orderMenuDetail) => orderMenuDetail.omdeOrme),
    __metadata("design:type", Array)
], OrderMenus.prototype, "orderMenuDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.orderMenus, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "orme_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], OrderMenus.prototype, "ormeUser", void 0);
OrderMenus = __decorate([
    (0, typeorm_1.Index)("pk_orme_id", ["ormeId"], { unique: true }),
    (0, typeorm_1.Entity)("order_menus", { schema: "resto" })
], OrderMenus);
exports.OrderMenus = OrderMenus;
//# sourceMappingURL=OrderMenus.js.map