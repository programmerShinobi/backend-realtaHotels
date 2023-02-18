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
exports.Provinces = void 0;
const typeorm_1 = require("typeorm");
const Address_1 = require("./Address");
const Country_1 = require("./Country");
let Provinces = class Provinces {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "prov_id" }),
    __metadata("design:type", Number)
], Provinces.prototype, "provId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "prov_name",
        nullable: true,
        length: 85,
    }),
    __metadata("design:type", String)
], Provinces.prototype, "provName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Address_1.Address, (address) => address.addrProv),
    __metadata("design:type", Array)
], Provinces.prototype, "addresses", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Country_1.Country, (country) => country.provinces),
    (0, typeorm_1.JoinColumn)([{ name: "prov_country_id", referencedColumnName: "countryId" }]),
    __metadata("design:type", Country_1.Country)
], Provinces.prototype, "provCountry", void 0);
Provinces = __decorate([
    (0, typeorm_1.Index)("prov_id_pk", ["provId"], { unique: true }),
    (0, typeorm_1.Entity)("provinces", { schema: "master" })
], Provinces);
exports.Provinces = Provinces;
//# sourceMappingURL=Provinces.js.map