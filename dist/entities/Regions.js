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
exports.Regions = void 0;
const typeorm_1 = require("typeorm");
const Country_1 = require("./Country");
let Regions = class Regions {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "region_code" }),
    __metadata("design:type", Number)
], Regions.prototype, "regionCode", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "region_name",
        nullable: true,
        unique: true,
        length: 35,
    }),
    __metadata("design:type", String)
], Regions.prototype, "regionName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Country_1.Country, (country) => country.countryRegion),
    __metadata("design:type", Array)
], Regions.prototype, "countries", void 0);
Regions = __decorate([
    (0, typeorm_1.Index)("region_code_pk", ["regionCode"], { unique: true }),
    (0, typeorm_1.Index)("regions_region_name_key", ["regionName"], { unique: true }),
    (0, typeorm_1.Entity)("regions", { schema: "master" })
], Regions);
exports.Regions = Regions;
//# sourceMappingURL=Regions.js.map