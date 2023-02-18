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
exports.Country = void 0;
const typeorm_1 = require("typeorm");
const Regions_1 = require("./Regions");
const Provinces_1 = require("./Provinces");
let Country = class Country {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "country_id" }),
    __metadata("design:type", Number)
], Country.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "country_name",
        nullable: true,
        unique: true,
        length: 55,
    }),
    __metadata("design:type", String)
], Country.prototype, "countryName", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Regions_1.Regions, (regions) => regions.countries),
    (0, typeorm_1.JoinColumn)([
        { name: "country_region_id", referencedColumnName: "regionCode" },
    ]),
    __metadata("design:type", Regions_1.Regions)
], Country.prototype, "countryRegion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Provinces_1.Provinces, (provinces) => provinces.provCountry),
    __metadata("design:type", Array)
], Country.prototype, "provinces", void 0);
Country = __decorate([
    (0, typeorm_1.Index)("country_id_pk", ["countryId"], { unique: true }),
    (0, typeorm_1.Index)("country_country_name_key", ["countryName"], { unique: true }),
    (0, typeorm_1.Entity)("country", { schema: "master" })
], Country);
exports.Country = Country;
//# sourceMappingURL=Country.js.map