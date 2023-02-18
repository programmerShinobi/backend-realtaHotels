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
exports.RestoMenus = void 0;
const typeorm_1 = require("typeorm");
const OrderMenuDetail_1 = require("./OrderMenuDetail");
const RestoMenuPhotos_1 = require("./RestoMenuPhotos");
const Facilities_1 = require("./Facilities");
let RestoMenus = class RestoMenus {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "reme_id" }),
    __metadata("design:type", Number)
], RestoMenus.prototype, "remeId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "reme_name",
        nullable: true,
        length: 55,
    }),
    __metadata("design:type", String)
], RestoMenus.prototype, "remeName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "reme_description",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], RestoMenus.prototype, "remeDescription", void 0);
__decorate([
    (0, typeorm_1.Column)("money", { name: "reme_price", nullable: true }),
    __metadata("design:type", String)
], RestoMenus.prototype, "remePrice", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "reme_status",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], RestoMenus.prototype, "remeStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "reme_modified_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], RestoMenus.prototype, "remeModifiedDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderMenuDetail_1.OrderMenuDetail, (orderMenuDetail) => orderMenuDetail.omdeReme),
    __metadata("design:type", Array)
], RestoMenus.prototype, "orderMenuDetails", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RestoMenuPhotos_1.RestoMenuPhotos, (restoMenuPhotos) => restoMenuPhotos.rempReme),
    __metadata("design:type", Array)
], RestoMenus.prototype, "restoMenuPhotos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Facilities_1.Facilities, (facilities) => facilities.restoMenus, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "reme_faci_id", referencedColumnName: "faciId" }]),
    __metadata("design:type", Facilities_1.Facilities)
], RestoMenus.prototype, "remeFaci", void 0);
RestoMenus = __decorate([
    (0, typeorm_1.Index)("pk_resto_menus", ["remeId"], { unique: true }),
    (0, typeorm_1.Entity)("resto_menus", { schema: "resto" })
], RestoMenus);
exports.RestoMenus = RestoMenus;
//# sourceMappingURL=RestoMenus.js.map