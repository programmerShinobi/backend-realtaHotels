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
exports.UserrolesController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const userroles_service_1 = require("../../../service/users/userroles/userroles.service");
const userroles_dto_1 = require("./userroles.dto");
const decorators_2 = require("@nestjs/common/decorators");
const auth_service_1 = require("../../../service/users/auth/auth.service");
let UserrolesController = class UserrolesController {
    constructor(userRolesService) {
        this.userRolesService = userRolesService;
    }
    findAllRuleRoles() {
        return this.userRolesService.findAllUserRoles();
    }
    findAllJoinUserRoles() {
        return this.userRolesService.findAllJoinUserRoles();
    }
    findOneUserRoles(params) {
        return this.userRolesService.findOneUserRoles(params.id);
    }
    createUserRoles(body) {
        return this.userRolesService.createUserRoles(body);
    }
    updateUserRoles(params, body) {
        return this.userRolesService.updateUserRoles(params.id, body);
    }
    deleteUserRoles(params) {
        return this.userRolesService.deleteUserRoles(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserrolesController.prototype, "findAllRuleRoles", null);
__decorate([
    (0, common_1.Get)('join-all-userroles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserrolesController.prototype, "findAllJoinUserRoles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserrolesController.prototype, "findOneUserRoles", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userroles_dto_1.bodyUserRolesDto]),
    __metadata("design:returntype", void 0)
], UserrolesController.prototype, "createUserRoles", null);
__decorate([
    (0, decorators_1.Put)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, userroles_dto_1.bodyUserRolesDto]),
    __metadata("design:returntype", void 0)
], UserrolesController.prototype, "updateUserRoles", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserrolesController.prototype, "deleteUserRoles", null);
UserrolesController = __decorate([
    (0, decorators_2.UseGuards)(auth_service_1.AuthService),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)('userroles'),
    __metadata("design:paramtypes", [userroles_service_1.UserrolesService])
], UserrolesController);
exports.UserrolesController = UserrolesController;
//# sourceMappingURL=userroles.controller.js.map