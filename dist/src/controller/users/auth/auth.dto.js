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
exports.bodyRegisterGuest2Dto = exports.bodyRegisterGuest1Dto = exports.bodyRegister2Dto = exports.bodyRegister1Dto = exports.bodyLoginDto = void 0;
const class_validator_1 = require("class-validator");
class bodyLoginDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], bodyLoginDto.prototype, "userPassword", void 0);
exports.bodyLoginDto = bodyLoginDto;
class bodyRegister1Dto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], bodyRegister1Dto.prototype, "userFullName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], bodyRegister1Dto.prototype, "userEmail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", Object)
], bodyRegister1Dto.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], bodyRegister1Dto.prototype, "userId", void 0);
exports.bodyRegister1Dto = bodyRegister1Dto;
class bodyRegister2Dto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], bodyRegister2Dto.prototype, "uspaPasswordhash", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], bodyRegister2Dto.prototype, "uspaUserId", void 0);
exports.bodyRegister2Dto = bodyRegister2Dto;
class bodyRegisterGuest1Dto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPhoneNumber)(),
    __metadata("design:type", Object)
], bodyRegisterGuest1Dto.prototype, "userPhoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", String)
], bodyRegisterGuest1Dto.prototype, "userFullName", void 0);
exports.bodyRegisterGuest1Dto = bodyRegisterGuest1Dto;
class bodyRegisterGuest2Dto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], bodyRegisterGuest2Dto.prototype, "uspaPasswordhash", void 0);
__decorate([
    (0, class_validator_1.IsEmpty)(),
    __metadata("design:type", Number)
], bodyRegisterGuest2Dto.prototype, "uspaUserId", void 0);
exports.bodyRegisterGuest2Dto = bodyRegisterGuest2Dto;
//# sourceMappingURL=auth.dto.js.map