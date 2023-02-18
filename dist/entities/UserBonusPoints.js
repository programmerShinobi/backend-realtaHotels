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
exports.UserBonusPoints = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
let UserBonusPoints = class UserBonusPoints {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "ubpo_id" }),
    __metadata("design:type", Number)
], UserBonusPoints.prototype, "ubpoId", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "ubpo_total_points", nullable: true }),
    __metadata("design:type", Number)
], UserBonusPoints.prototype, "ubpoTotalPoints", void 0);
__decorate([
    (0, typeorm_1.Column)("character", { name: "ubpo_bonus_type", nullable: true, length: 1 }),
    __metadata("design:type", String)
], UserBonusPoints.prototype, "ubpoBonusType", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp without time zone", {
        name: "ubpo_create_on",
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserBonusPoints.prototype, "ubpoCreateOn", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Users_1.Users, (users) => users.userBonusPoints, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "ubpo_user_id", referencedColumnName: "userId" }]),
    __metadata("design:type", Users_1.Users)
], UserBonusPoints.prototype, "ubpoUser", void 0);
UserBonusPoints = __decorate([
    (0, typeorm_1.Index)("user_bonus_points_pkey", ["ubpoId"], { unique: true }),
    (0, typeorm_1.Entity)("user_bonus_points", { schema: "users" })
], UserBonusPoints);
exports.UserBonusPoints = UserBonusPoints;
//# sourceMappingURL=UserBonusPoints.js.map