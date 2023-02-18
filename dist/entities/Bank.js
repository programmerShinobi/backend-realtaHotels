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
exports.Bank = void 0;
const typeorm_1 = require("typeorm");
const Entities_1 = require("./Entities");
let Bank = class Bank {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "bank_entity_id" }),
    __metadata("design:type", Number)
], Bank.prototype, "bankEntityId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "bank_code",
        nullable: true,
        unique: true,
        length: 10,
    }),
    __metadata("design:type", String)
], Bank.prototype, "bankCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "bank_name",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], Bank.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "bank_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], Bank.prototype, "bankModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Entities_1.Entities, (entities) => entities.bank, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "bank_entity_id", referencedColumnName: "entityId" }]),
    __metadata("design:type", Entities_1.Entities)
], Bank.prototype, "bankEntity", void 0);
Bank = __decorate([
    (0, typeorm_1.Index)("bank_bank_code_key", ["bankCode"], { unique: true }),
    (0, typeorm_1.Index)("bank_pkey", ["bankEntityId"], { unique: true }),
    (0, typeorm_1.Index)("bank_bank_name_key", ["bankName"], { unique: true }),
    (0, typeorm_1.Entity)("bank", { schema: "payment" })
], Bank);
exports.Bank = Bank;
//# sourceMappingURL=Bank.js.map