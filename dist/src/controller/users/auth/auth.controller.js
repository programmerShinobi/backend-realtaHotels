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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const auth_service_1 = require("../../../service/users/auth/auth.service");
const userpassword_service_1 = require("../../../service/users/userpassword/userpassword.service");
const auth_dto_1 = require("./auth.dto");
let AuthController = class AuthController {
    constructor(userpasswordService, authService) {
        this.userpasswordService = userpasswordService;
        this.authService = authService;
    }
    findPassword(params) {
        return this.userpasswordService.findPassword(params.id);
    }
    findEmail(params) {
        return this.authService.findEmail(params.email);
    }
    login(body) {
        return this.authService.login(body);
    }
    register(body1, body2, body3) {
        return this.authService.register(body1, body2, body3);
    }
    registerGuest(body1, body2, body3) {
        return this.authService.registerGuest(body1, body2, body3);
    }
    changePassword(params, body) {
        return this.authService.changePassword(params.id, body);
    }
};
__decorate([
    (0, common_1.Get)('password/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findPassword", null);
__decorate([
    (0, common_1.Get)('email/:email'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "findEmail", null);
__decorate([
    (0, decorators_1.Post)('login'),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.bodyLoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, decorators_1.Post)('register'),
    __param(0, (0, decorators_1.Body)()),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.bodyRegister1Dto, Object, auth_dto_1.bodyRegister2Dto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, decorators_1.Post)('registerGuest'),
    __param(0, (0, decorators_1.Body)()),
    __param(1, (0, decorators_1.Body)()),
    __param(2, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.bodyRegisterGuest1Dto, Object, auth_dto_1.bodyRegisterGuest2Dto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "registerGuest", null);
__decorate([
    (0, decorators_1.Put)('changePassword/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "changePassword", null);
AuthController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [userpassword_service_1.UserpasswordService,
        auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map