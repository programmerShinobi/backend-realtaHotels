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
exports.BankController = void 0;
const common_1 = require("@nestjs/common");
const bank_service_1 = require("../../../service/payment/bank/bank.service");
const bank_dto_1 = require("../../../dto/payment/bank.dto");
let BankController = class BankController {
    constructor(bankService) {
        this.bankService = bankService;
    }
    async findByFilter(filter) {
        return await this.bankService.find(filter);
    }
    async updateBank(code, body) {
        return await this.bankService.update(code, body);
    }
    async insertBank(body) {
        return await this.bankService.insert(body);
    }
    async deleteBank(code) {
        return await this.bankService.delete(code);
    }
};
__decorate([
    (0, common_1.Get)('filter?'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "findByFilter", null);
__decorate([
    (0, common_1.Put)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, bank_dto_1.BankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "updateBank", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bank_dto_1.BankDto]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "insertBank", null);
__decorate([
    (0, common_1.Delete)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BankController.prototype, "deleteBank", null);
BankController = __decorate([
    (0, common_1.Controller)('bank'),
    __metadata("design:paramtypes", [bank_service_1.BankService])
], BankController);
exports.BankController = BankController;
//# sourceMappingURL=bank.controller.js.map