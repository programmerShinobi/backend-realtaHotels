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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("@nestjs/common/decorators");
const roles_service_1 = require("../../../service/users/roles/roles.service");
const roles_dto_1 = require("./roles.dto");
let RolesController = class RolesController {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    findAllRoles() {
        return this.rolesService.findAllRoles();
    }
    findAllJoinRoles() {
        return this.rolesService.findAllJoinRoles();
    }
    findOneRoles(params) {
        return this.rolesService.findOneRoles(params.id);
    }
    createRoles(body) {
        return this.rolesService.createRoles(body);
    }
    updateRoles(params, body) {
        return this.rolesService.updateRoles(params.id, body);
    }
    deleteRoles(params) {
        return this.rolesService.deleteRoles(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findAllRoles", null);
__decorate([
    (0, common_1.Get)('join-all-roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findAllJoinRoles", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "findOneRoles", null);
__decorate([
    (0, decorators_1.Post)(),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [roles_dto_1.bodyRolesDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "createRoles", null);
__decorate([
    (0, decorators_1.Put)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __param(1, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, roles_dto_1.bodyRolesDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "updateRoles", null);
__decorate([
    (0, decorators_1.Delete)(':id'),
    __param(0, (0, decorators_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "deleteRoles", null);
RolesController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map