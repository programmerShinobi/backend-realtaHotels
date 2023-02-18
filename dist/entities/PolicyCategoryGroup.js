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
exports.PolicyCategoryGroup = void 0;
const typeorm_1 = require("typeorm");
const CategoryGroup_1 = require("./CategoryGroup");
const Policy_1 = require("./Policy");
let PolicyCategoryGroup = class PolicyCategoryGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "poca_poli_id" }),
    __metadata("design:type", Number)
], PolicyCategoryGroup.prototype, "pocaPoliId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CategoryGroup_1.CategoryGroup, (categoryGroup) => categoryGroup.policyCategoryGroups),
    (0, typeorm_1.JoinColumn)([{ name: "poca_cagro_id", referencedColumnName: "cagroId" }]),
    __metadata("design:type", CategoryGroup_1.CategoryGroup)
], PolicyCategoryGroup.prototype, "pocaCagro", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Policy_1.Policy, (policy) => policy.policyCategoryGroup),
    (0, typeorm_1.JoinColumn)([{ name: "poca_poli_id", referencedColumnName: "poliId" }]),
    __metadata("design:type", Policy_1.Policy)
], PolicyCategoryGroup.prototype, "pocaPoli", void 0);
PolicyCategoryGroup = __decorate([
    (0, typeorm_1.Index)("policy_category_group_pkey", ["pocaPoliId"], { unique: true }),
    (0, typeorm_1.Entity)("policy_category_group", { schema: "master" })
], PolicyCategoryGroup);
exports.PolicyCategoryGroup = PolicyCategoryGroup;
//# sourceMappingURL=PolicyCategoryGroup.js.map