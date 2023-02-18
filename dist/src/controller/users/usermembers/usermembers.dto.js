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
exports.bodyUserMembersDto = void 0;
const class_validator_1 = require("class-validator");
var Type;
(function (Type) {
    Type["default"] = "default";
    Type["expired"] = "expired";
})(Type || (Type = {}));
var Name;
(function (Name) {
    Name["SILVER"] = "SILVER";
    Name["GOLD"] = "GOLD";
    Name["VIP"] = "VIP";
    Name["WIZARD"] = "WIZARD";
})(Name || (Name = {}));
class bodyUserMembersDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Name),
    __metadata("design:type", String)
], bodyUserMembersDto.prototype, "usmeMembName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], bodyUserMembersDto.prototype, "usmePoints", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Type),
    __metadata("design:type", String)
], bodyUserMembersDto.prototype, "usmeType", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Date)
], bodyUserMembersDto.prototype, "usmePromoteDate", void 0);
exports.bodyUserMembersDto = bodyUserMembersDto;
//# sourceMappingURL=usermembers.dto.js.map