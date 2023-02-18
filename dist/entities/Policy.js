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
exports.Policy = void 0;
const typeorm_1 = require("typeorm");
const PolicyCategoryGroup_1 = require("./PolicyCategoryGroup");
let Policy = class Policy {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "poli_id" }),
    __metadata("design:type", Number)
], Policy.prototype, "poliId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "poli_name",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], Policy.prototype, "poliName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "poli_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], Policy.prototype, "poliDescription", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => PolicyCategoryGroup_1.PolicyCategoryGroup, (policyCategoryGroup) => policyCategoryGroup.pocaPoli),
    __metadata("design:type", PolicyCategoryGroup_1.PolicyCategoryGroup)
], Policy.prototype, "policyCategoryGroup", void 0);
Policy = __decorate([
    (0, typeorm_1.Index)("poli_id_pk", ["poliId"], { unique: true }),
    (0, typeorm_1.Entity)("policy", { schema: "master" })
], Policy);
exports.Policy = Policy;
//# sourceMappingURL=Policy.js.map