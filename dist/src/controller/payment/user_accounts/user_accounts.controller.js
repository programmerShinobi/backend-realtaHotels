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
exports.UserAccountsController = void 0;
const common_1 = require("@nestjs/common");
const route_params_decorator_1 = require("@nestjs/common/decorators/http/route-params.decorator");
const userAccounts_dto_1 = require("../../../dto/payment/userAccounts.dto");
const user_accounts_service_1 = require("../../../service/payment/user_accounts/user_accounts.service");
let UserAccountsController = class UserAccountsController {
    constructor(userAccountsService) {
        this.userAccountsService = userAccountsService;
    }
    async findAllAccounts() {
        return await this.userAccountsService.find();
    }
    async findByFilter(filter) {
        switch (true) {
            case filter.userId !== undefined:
                return await this.userAccountsService.find(`
					SELECT *
					FROM payment.user_payment_methods
					WHERE "userId" = ${filter.userId}
					`);
            case filter.userName != undefined:
                return await this.userAccountsService.find(`
					SELECT *
					FROM payment.user_payment_methods
					WHERE "fullName" ILIKE '%${filter.userName}%'
					`);
            case filter.accountNumber != undefined:
                return await this.userAccountsService.find(`
					SELECT *
					FROM payment.user_payment_methods
					WHERE "accountNumber" = '${filter.accountNumber}'
					`);
        }
    }
    async addAccount(body) {
        console.log('data di controller', body);
        return await this.userAccountsService.create(body);
    }
    async updateAccount(accountNumber, body) {
        return await this.userAccountsService.update(accountNumber, body);
    }
    async deleteAccouunt(accountNumber) {
        return await this.userAccountsService.delete(accountNumber);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserAccountsController.prototype, "findAllAccounts", null);
__decorate([
    (0, common_1.Get)('filter?'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAccountsController.prototype, "findByFilter", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [userAccounts_dto_1.UserAccountsDto]),
    __metadata("design:returntype", Promise)
], UserAccountsController.prototype, "addAccount", null);
__decorate([
    (0, common_1.Put)('/:accountNumber'),
    __param(0, (0, route_params_decorator_1.Param)('accountNumber')),
    __param(1, (0, route_params_decorator_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserAccountsController.prototype, "updateAccount", null);
__decorate([
    (0, common_1.Delete)('/:accountNumber'),
    __param(0, (0, route_params_decorator_1.Param)('accountNumber')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserAccountsController.prototype, "deleteAccouunt", null);
UserAccountsController = __decorate([
    (0, common_1.Controller)('user-accounts'),
    __metadata("design:paramtypes", [user_accounts_service_1.UserAccountsService])
], UserAccountsController);
exports.UserAccountsController = UserAccountsController;
//# sourceMappingURL=user_accounts.controller.js.map