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
exports.UserpasswordController = void 0;
const common_1 = require("@nestjs/common");
const userpassword_service_1 = require("../../../service/users/userpassword/userpassword.service");
const userpassword_dto_1 = require("./userpassword.dto");
let UserpasswordController = class UserpasswordController {
    constructor(userPasswordService) {
        this.userPasswordService = userPasswordService;
    }
    findAllUserPassword() {
        return this.userPasswordService.findAllUserPassword();
    }
    findAllJoinUserPassword() {
        return this.userPasswordService.findAllJoinUserPassword();
    }
    findOneUserPassword(params) {
        return this.userPasswordService.findOneUserPassword(params.id);
    }
    createUserPassword(body) {
        return this.userPasswordService.createUserPassword(body);
    }
    updateUserPassword(params, body) {
        return this.userPasswordService.updateUserPassword(params.id, body);
    }
    deleteUserPassword(params) {
        return this.userPasswordService.deleteUserPassword(params.id);
    }
    findPassword(params) {
        return this.userPasswordService.findPassword(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "findAllUserPassword", null);
__decorate([
    (0, common_1.Get)('join-all-userpassword'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "findAllJoinUserPassword", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "findOneUserPassword", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userpassword_dto_1.bodyUserPasswordDto]),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "createUserPassword", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, userpassword_dto_1.bodyUserPasswordDto]),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "updateUserPassword", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "deleteUserPassword", null);
__decorate([
    (0, common_1.Get)('findPassword/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserpasswordController.prototype, "findPassword", null);
UserpasswordController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)('userpassword'),
    __metadata("design:paramtypes", [userpassword_service_1.UserpasswordService])
], UserpasswordController);
exports.UserpasswordController = UserpasswordController;
//# sourceMappingURL=userpassword.controller.js.map