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
exports.CategoryGroup = void 0;
const typeorm_1 = require("typeorm");
const Facilities_1 = require("./Facilities");
const PolicyCategoryGroup_1 = require("./PolicyCategoryGroup");
let CategoryGroup = class CategoryGroup {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "cagro_id" }),
    __metadata("design:type", Number)
], CategoryGroup.prototype, "cagroId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cagro_name",
        nullable: true,
        unique: true,
        length: 25,
    }),
    __metadata("design:type", String)
], CategoryGroup.prototype, "cagroName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cagro_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], CategoryGroup.prototype, "cagroDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cagro_type",
        nullable: true,
        length: 25,
    }),
    __metadata("design:type", String)
], CategoryGroup.prototype, "cagroType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cagro_icon",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], CategoryGroup.prototype, "cagroIcon", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "cagro_icon_url",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], CategoryGroup.prototype, "cagroIconUrl", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Facilities_1.Facilities, (facilities) => facilities.faciCagro),
    __metadata("design:type", Array)
], CategoryGroup.prototype, "facilities", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => PolicyCategoryGroup_1.PolicyCategoryGroup, (policyCategoryGroup) => policyCategoryGroup.pocaCagro),
    __metadata("design:type", Array)
], CategoryGroup.prototype, "policyCategoryGroups", void 0);
CategoryGroup = __decorate([
    (0, typeorm_1.Index)("cagro_id_pk", ["cagroId"], { unique: true }),
    (0, typeorm_1.Index)("category_group_cagro_name_key", ["cagroName"], { unique: true }),
    (0, typeorm_1.Entity)("category_group", { schema: "master" })
], CategoryGroup);
exports.CategoryGroup = CategoryGroup;
//# sourceMappingURL=CategoryGroup.js.map