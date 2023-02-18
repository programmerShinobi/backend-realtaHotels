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
exports.Members = void 0;
const typeorm_1 = require("typeorm");
const UserMembers_1 = require("./UserMembers");
let Members = class Members {
};
__decorate([
    (0, typeorm_1.Column)("character varying", { primary: true, name: "memb_name", length: 15 }),
    __metadata("design:type", String)
], Members.prototype, "membName", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "memb_description",
        nullable: true,
        length: 100,
    }),
    __metadata("design:type", String)
], Members.prototype, "membDescription", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserMembers_1.UserMembers, (userMembers) => userMembers.usmeMembName),
    __metadata("design:type", Array)
], Members.prototype, "userMembers", void 0);
Members = __decorate([
    (0, typeorm_1.Index)("memb_name", ["membName"], { unique: true }),
    (0, typeorm_1.Entity)("members", { schema: "master" })
], Members);
exports.Members = Members;
//# sourceMappingURL=Members.js.map