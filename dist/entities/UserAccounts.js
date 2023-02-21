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
exports.UserAccounts = void 0;
const typeorm_1 = require("typeorm");
const Entities_1 = require("./Entities");
const Users_1 = require("./Users");
let UserAccounts = class UserAccounts {
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "usac_entity_id" }),
    __metadata("design:type", Number)
], UserAccounts.prototype, "usacEntityId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "usac_user_id" }),
    __metadata("design:type", Number)
], UserAccounts.prototype, "usacUserId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usac_account_number",
        nullable: true,
        unique: true,
        length: 25,
    }),
    __metadata("design:type", String)
], UserAccounts.prototype, "usacAccountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)("numeric", { name: "usac_saldo", nullable: true }),
    __metadata("design:type", String)
], UserAccounts.prototype, "usacSaldo", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usac_type",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], UserAccounts.prototype, "usacType", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "usac_expmonth", nullable: true }),
    __metadata("design:type", Number)
], UserAccounts.prototype, "usacExpmonth", void 0);
__decorate([
    (0, typeorm_1.Column)("smallint", { name: "usac_expyear", nullable: true }),
    __metadata("design:type", Number)
], UserAccounts.prototype, "usacExpyear", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "usac_modified_date",
        nullable: true,
        default: () => "now()",
    }),
    __metadata("design:type", Date)
], UserAccounts.prototype, "usacModifiedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Entities_1.Entities, (entities) => entities.userAccounts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usac_entity_id", referencedColumnName: "entityId" }]),
    __metadata("design:type", Entities_1.Entities)
], UserAccounts.prototype, "usacEntity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.userAccounts, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usac_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], UserAccounts.prototype, "usacUser", void 0);
UserAccounts = __decorate([
    (0, typeorm_1.Index)("user_accounts_usac_account_number_key", ["usacAccountNumber"], {
        unique: true,
    }),
    (0, typeorm_1.Index)("user_accounts_pk", ["usacEntityId", "usacUserId"], { unique: true }),
    (0, typeorm_1.Entity)("user_accounts", { schema: "payment" })
], UserAccounts);
exports.UserAccounts = UserAccounts;
//# sourceMappingURL=UserAccounts.js.map