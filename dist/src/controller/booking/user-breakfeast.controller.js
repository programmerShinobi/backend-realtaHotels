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
exports.UserBreakfeastController = void 0;
const common_1 = require("@nestjs/common");
const user_breakfeast_service_1 = require("../../service/booking/user-breakfeast.service");
let UserBreakfeastController = class UserBreakfeastController {
    constructor(userbreakfeastService) {
        this.userbreakfeastService = userbreakfeastService;
    }
    findall() {
        return this.userbreakfeastService.findAllUserBreakfeast();
    }
    findbyid(id) {
        return this.userbreakfeastService.findOneUserBreakfeast(id);
    }
    create(body) {
        return this.userbreakfeastService.createUserBreakfeast(body);
    }
    update(params, body) {
        return this.userbreakfeastService.updateUserBreakfeast(params.id, body);
    }
    remove(params) {
        return this.userbreakfeastService.deleteUserBreakfeast(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserBreakfeastController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Date]),
    __metadata("design:returntype", Promise)
], UserBreakfeastController.prototype, "findbyid", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserBreakfeastController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserBreakfeastController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserBreakfeastController.prototype, "remove", null);
UserBreakfeastController = __decorate([
    (0, common_1.Controller)('user-breakfeast'),
    __metadata("design:paramtypes", [user_breakfeast_service_1.UserBreakfeastService])
], UserBreakfeastController);
exports.UserBreakfeastController = UserBreakfeastController;
//# sourceMappingURL=user-breakfeast.controller.js.map