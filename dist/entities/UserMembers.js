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
exports.UserMembers = void 0;
const typeorm_1 = require("typeorm");
const Members_1 = require("./Members");
const Users_1 = require("./Users");
let UserMembers = class UserMembers {
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "usme_user_id" }),
    __metadata("design:type", Number)
], UserMembers.prototype, "usmeUserId", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "usme_promote_date",
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserMembers.prototype, "usmePromoteDate", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "usme_points", nullable: true }),
    __metadata("design:type", Number)
], UserMembers.prototype, "usmePoints", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "usme_type",
        nullable: true,
        length: 15,
    }),
    __metadata("design:type", String)
], UserMembers.prototype, "usmeType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Members_1.Members, (members) => members.userMembers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usme_memb_name", referencedColumnName: "membName" }]),
    __metadata("design:type", Members_1.Members)
], UserMembers.prototype, "usmeMembName", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Users_1.Users, (users) => users.userMembers, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usme_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], UserMembers.prototype, "usmeUser", void 0);
UserMembers = __decorate([
    (0, typeorm_1.Index)("user_members_pkey", ["usmeUserId"], { unique: true }),
    (0, typeorm_1.Entity)("user_members", { schema: "users" })
], UserMembers);
exports.UserMembers = UserMembers;
//# sourceMappingURL=UserMembers.js.map