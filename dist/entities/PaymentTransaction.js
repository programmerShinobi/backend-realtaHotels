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
exports.PaymentTransaction = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let PaymentTransaction = class PaymentTransaction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "patr_id" }),
    __metadata("design:type", Number)
], PaymentTransaction.prototype, "patrId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "patr_trx_number",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrTrxNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "patr_debet", nullable: true }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrDebet", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "patr_credit", nullable: true }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrCredit", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "patr_type", nullable: true, length: 3 }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "patr_note",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrNote", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "patr_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentTransaction.prototype, "patrModifiedDate", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "patr_order_number",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrOrderNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "patr_trx_number_ref",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], PaymentTransaction.prototype, "patrTrxNumberRef", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "patr_source_id", nullable: true }),
    __metadata("design:type", Number)
], PaymentTransaction.prototype, "patrSourceId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "patr_target_id", nullable: true }),
    __metadata("design:type", Number)
], PaymentTransaction.prototype, "patrTargetId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.paymentTransactions, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "patr_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], PaymentTransaction.prototype, "patrUser", void 0);
PaymentTransaction = __decorate([
    (0, typeorm_1.Index)("payment_transaction_pkey", ["patrId"], { unique: true }),
    (0, typeorm_1.Index)("payment_transaction_patr_trx_number_key", ["patrTrxNumber"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("payment_transaction_patr_trx_number_ref_key", ["patrTrxNumberRef"], {
        unique: true,
    }),
    (0, typeorm_1.Entity)("payment_transaction", { schema: "payment" })
], PaymentTransaction);
exports.PaymentTransaction = PaymentTransaction;
//# sourceMappingURL=PaymentTransaction.js.map