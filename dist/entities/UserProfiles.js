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
exports.UserProfiles = void 0;
const typeorm_1 = require("typeorm");
const Address_1 = require("./Address");
const Users_1 = require("./Users");
let UserProfiles = class UserProfiles {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "uspro_id" }),
    __metadata("design:type", Number)
], UserProfiles.prototype, "usproId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "uspro_national_id",
        nullable: true,
        length: 20,
    }),
    __metadata("design:type", String)
], UserProfiles.prototype, "usproNationalId", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "uspro_birth", nullable: true }),
    __metadata("design:type", String)
], UserProfiles.prototype, "usproBirth", void 0);
__decorate([
    (0, typeorm_1.Column)("text", {
        name: "uspro_photo",
        nullable: true,
        default: () => "'user.png'",
    }),
    __metadata("design:type", String)
], UserProfiles.prototype, "usproPhoto", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "uspro_job_title",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], UserProfiles.prototype, "usproJobTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("character", {
        name: "uspro_marital_status",
        nullable: true,
        length: 1,
    }),
    __metadata("design:type", String)
], UserProfiles.prototype, "usproMaritalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "uspro_gender", nullable: true, length: 1 }),
    __metadata("design:type", String)
], UserProfiles.prototype, "usproGender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Address_1.Address, (address) => address.userProfiles, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "uspro_addr_id", referencedColumnName: "addrId" }]),
    __metadata("design:type", Address_1.Address)
], UserProfiles.prototype, "usproAddr", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.userProfiles, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "uspro_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], UserProfiles.prototype, "usproUser", void 0);
UserProfiles = __decorate([
    (0, typeorm_1.Index)("user_profiles_pkey", ["usproId"], { unique: true }),
    (0, typeorm_1.Entity)("user_profiles", { schema: "users" })
], UserProfiles);
exports.UserProfiles = UserProfiles;
//# sourceMappingURL=UserProfiles.js.map