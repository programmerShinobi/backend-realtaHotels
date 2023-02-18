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
exports.deleteUsersDto = exports.detailUsersDto = exports.bodyUpdateUsersDto = exports.bodyUsersDto = void 0;
const class_validator_1 = require("class-validator");
var Role;
(function (Role) {
    Role["T"] = "T";
    Role["C"] = "C";
    Role["I"] = "I";
})(Role || (Role = {}));
class bodyUsersDto {
}
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], bodyUsersDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], bodyUsersDto.prototype, "userFullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Role),
    __metadata("design:type", String)
], bodyUsersDto.prototype, "userType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], bodyUsersDto.prototype, "userEmail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], bodyUsersDto.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], bodyUsersDto.prototype, "userIsverified", void 0);
exports.bodyUsersDto = bodyUsersDto;
class bodyUpdateUsersDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], bodyUpdateUsersDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEnum)(Role),
    __metadata("design:type", String)
], bodyUpdateUsersDto.prototype, "userType", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], bodyUpdateUsersDto.prototype, "userEmail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", String)
], bodyUpdateUsersDto.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], bodyUpdateUsersDto.prototype, "userIsverified", void 0);
exports.bodyUpdateUsersDto = bodyUpdateUsersDto;
class detailUsersDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], detailUsersDto.prototype, "userId", void 0);
exports.detailUsersDto = detailUsersDto;
class deleteUsersDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], deleteUsersDto.prototype, "userId", void 0);
exports.deleteUsersDto = deleteUsersDto;
//# sourceMappingURL=users.dto.js.map