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
exports.Address = void 0;
const typeorm_1 = require("typeorm");
const Provinces_1 = require("./Provinces");
const Hotels_1 = require("./Hotels");
const UserProfiles_1 = require("./UserProfiles");
let Address = class Address {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "addr_id" }),
    __metadata("design:type", Number)
], Address.prototype, "addrId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "addr_line1",
        nullable: true,
        length: 225,
    }),
    __metadata("design:type", String)
], Address.prototype, "addrLine1", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "addr_line2",
        nullable: true,
        length: 225,
    }),
    __metadata("design:type", String)
], Address.prototype, "addrLine2", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "addr_postal_code",
        nullable: true,
        length: 5,
    }),
    __metadata("design:type", String)
], Address.prototype, "addrPostalCode", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { name: "addr_spatial_location", nullable: true }),
    __metadata("design:type", Object)
], Address.prototype, "addrSpatialLocation", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Provinces_1.Provinces, (provinces) => provinces.addresses),
    (0, typeorm_1.JoinColumn)([{ name: "addr_prov_id", referencedColumnName: "provId" }]),
    __metadata("design:type", Provinces_1.Provinces)
], Address.prototype, "addrProv", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Hotels_1.Hotels, (hotels) => hotels.hotelAddr),
    __metadata("design:type", Array)
], Address.prototype, "hotels", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserProfiles_1.UserProfiles, (userProfiles) => userProfiles.usproAddr),
    __metadata("design:type", Array)
], Address.prototype, "userProfiles", void 0);
Address = __decorate([
    (0, typeorm_1.Index)("addr_id", ["addrId"], { unique: true }),
    (0, typeorm_1.Entity)("address", { schema: "master" })
], Address);
exports.Address = Address;
//# sourceMappingURL=Address.js.map