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
exports.UserPassword = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let UserPassword = class UserPassword {
};
__decorate([
    (0, typeorm_1.Column)("integer", { primary: true, name: "uspa_user_id" }),
    __metadata("design:type", Number)
], UserPassword.prototype, "uspaUserId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "uspa_passwordhash",
        nullable: true,
        length: 128,
    }),
    __metadata("design:type", String)
], UserPassword.prototype, "uspaPasswordhash", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "uspa_passwordsalt",
        nullable: true,
        length: 10,
    }),
    __metadata("design:type", String)
], UserPassword.prototype, "uspaPasswordsalt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Users_1.Users, (users) => users.userPassword, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "uspa_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], UserPassword.prototype, "uspaUser", void 0);
UserPassword = __decorate([
    (0, typeorm_1.Index)("user_password_pkey", ["uspaUserId"], { unique: true }),
    (0, typeorm_1.Entity)("user_password", { schema: "users" })
], UserPassword);
exports.UserPassword = UserPassword;
//# sourceMappingURL=UserPassword.js.map