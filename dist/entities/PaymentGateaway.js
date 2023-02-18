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
exports.PaymentGateaway = void 0;
const typeorm_1 = require("typeorm");
const Entities_1 = require("./Entities");
let PaymentGateaway = class PaymentGateaway {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "paga_entity_id" }),
    __metadata("design:type", Number)
], PaymentGateaway.prototype, "pagaEntityId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "paga_code",
        nullable: true,
        unique: true,
        length: 10,
    }),
    __metadata("design:type", String)
], PaymentGateaway.prototype, "pagaCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "paga_name",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], PaymentGateaway.prototype, "pagaName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "paga_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], PaymentGateaway.prototype, "pagaModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Entities_1.Entities, (entities) => entities.paymentGateaway, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "paga_entity_id", referencedColumnName: "entityId" }]),
    __metadata("design:type", Entities_1.Entities)
], PaymentGateaway.prototype, "pagaEntity", void 0);
PaymentGateaway = __decorate([
    (0, typeorm_1.Index)("payment_gateaway_paga_code_key", ["pagaCode"], { unique: true }),
    (0, typeorm_1.Index)("payment_gateaway_pkey", ["pagaEntityId"], { unique: true }),
    (0, typeorm_1.Index)("payment_gateaway_paga_name_key", ["pagaName"], { unique: true }),
    (0, typeorm_1.Entity)("payment_gateaway", { schema: "payment" })
], PaymentGateaway);
exports.PaymentGateaway = PaymentGateaway;
//# sourceMappingURL=PaymentGateaway.js.map