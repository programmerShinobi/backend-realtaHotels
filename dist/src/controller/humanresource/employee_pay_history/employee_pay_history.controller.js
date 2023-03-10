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
exports.EmployeePayHistoryController = void 0;
const common_1 = require("@nestjs/common");
const employee_pay_history_service_1 = require("../../../service/humanresource/employee_pay_history/employee_pay_history.service");
let EmployeePayHistoryController = class EmployeePayHistoryController {
    constructor(employeePayHistoryService) {
        this.employeePayHistoryService = employeePayHistoryService;
    }
    async findAllEmployeePayHistorys(query) {
        const result = await this.employeePayHistoryService.paginationEmployeePayHistory(query);
        return result;
    }
    async findAllEmployeePayHistory(ephiEmpId) {
        const result = await this.employeePayHistoryService.findAllEmployeePayHistory(ephiEmpId);
        return result;
    }
    async createEmployeePayHistory(body) {
        const result = await this.employeePayHistoryService.createEmployeePayHistory(body);
        if (result) {
            return {
                message: 'EmployeePayHistory created successfully',
                result: result,
            };
        }
        else {
            throw new common_1.HttpException('EmployeePayHistory created failed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateEmployeePayHistory(id, body) {
        const getOneData = await this.employeePayHistoryService.findOneEmployeePayHistory(id);
        if (getOneData) {
            const result = await this.employeePayHistoryService.updateEmployeePayHistory(id, body);
            if (result) {
                return {
                    message: 'EmployeePayHistory updated successfully',
                    result: result,
                };
            }
            else {
                throw new common_1.HttpException('EmployeePayHistory updated failed', common_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'EmployeePayHistory not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteEmployeePayHistory(query) {
        const getOneData = await this.employeePayHistoryService.findOneEmployeePayHistory(query.ephiId);
        if (getOneData) {
            const result = await this.employeePayHistoryService.deleteEmployeePayHistory(query);
            if (result) {
                return {
                    message: 'EmployeePayHistory deleted successfully',
                    result: result,
                };
            }
            else {
                throw new common_1.HttpException('EmployeePayHistory deleted failed', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'EmployeePayHistory not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async paginationEmployeePayHistory(query) {
        const result = await this.employeePayHistoryService.paginationEmployeePayHistory(query);
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeePayHistoryController.prototype, "findAllEmployeePayHistorys", null);
__decorate([
    (0, common_1.Get)('alldata/:ephiEmpId'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeePayHistoryController.prototype, "findAllEmployeePayHistory", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeePayHistoryController.prototype, "createEmployeePayHistory", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeePayHistoryController.prototype, "updateEmployeePayHistory", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeePayHistoryController.prototype, "deleteEmployeePayHistory", null);
__decorate([
    (0, common_1.Get)('pagination'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeePayHistoryController.prototype, "paginationEmployeePayHistory", null);
EmployeePayHistoryController = __decorate([
    (0, common_1.Controller)('employee-pay-history'),
    __metadata("design:paramtypes", [employee_pay_history_service_1.EmployeePayHistoryService])
], EmployeePayHistoryController);
exports.EmployeePayHistoryController = EmployeePayHistoryController;
//# sourceMappingURL=employee_pay_history.controller.js.map