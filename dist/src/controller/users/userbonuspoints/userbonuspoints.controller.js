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
exports.UserbonuspointsController = void 0;
const common_1 = require("@nestjs/common");
const userbonuspoints_service_1 = require("../../../service/users/userbonuspoints/userbonuspoints.service");
const userbonuspoints_dto_1 = require("./userbonuspoints.dto");
let UserbonuspointsController = class UserbonuspointsController {
    constructor(userBonusPointsService) {
        this.userBonusPointsService = userBonusPointsService;
    }
    findAllUserBonusPoints() {
        return this.userBonusPointsService.findAllUserBonusPoints();
    }
    findAllJoinUserBonusPoints() {
        return this.userBonusPointsService.findAllJoinUserBonusPoints();
    }
    findOneUserBonusPoints(params) {
        return this.userBonusPointsService.findOneUserBonusPoints(params.id);
    }
    createUserBonusPoints(body) {
        return this.userBonusPointsService.createUserBonusPoints(body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserbonuspointsController.prototype, "findAllUserBonusPoints", null);
__decorate([
    (0, common_1.Get)('join-all-userbonuspoints'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserbonuspointsController.prototype, "findAllJoinUserBonusPoints", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserbonuspointsController.prototype, "findOneUserBonusPoints", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userbonuspoints_dto_1.bodyUserBonusPoints]),
    __metadata("design:returntype", void 0)
], UserbonuspointsController.prototype, "createUserBonusPoints", null);
UserbonuspointsController = __decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Controller)('userbonuspoints'),
    __metadata("design:paramtypes", [userbonuspoints_service_1.UserbonuspointsService])
], UserbonuspointsController);
exports.UserbonuspointsController = UserbonuspointsController;
//# sourceMappingURL=userbonuspoints.controller.js.map