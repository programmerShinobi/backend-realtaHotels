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
exports.UserRoles = void 0;
const typeorm_1 = require("typeorm");
const Roles_1 = require("./Roles");
const Users_1 = require("./Users");
let UserRoles = class UserRoles {
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "usro_user_id" }),
    __metadata("design:type", Number)
], UserRoles.prototype, "usroUserId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Roles_1.Roles, (roles) => roles.userRoles, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usro_role_id", referencedColumnName: "roleId" }]),
    __metadata("design:type", Roles_1.Roles)
], UserRoles.prototype, "usroRole", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Users_1.Users, (users) => users.userRoles, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "usro_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], UserRoles.prototype, "usroUser", void 0);
UserRoles = __decorate([
    (0, typeorm_1.Index)("user_roles_pkey", ["usroUserId"], { unique: true }),
    (0, typeorm_1.Entity)("user_roles", { schema: "users" })
], UserRoles);
exports.UserRoles = UserRoles;
//# sourceMappingURL=UserRoles.js.map