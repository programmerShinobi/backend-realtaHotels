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
exports.EmployeeDepartmentHistoryController = void 0;
const common_1 = require("@nestjs/common");
const employee_department_history_service_1 = require("../../../service/humanresource/employee_department_history/employee_department_history.service");
let EmployeeDepartmentHistoryController = class EmployeeDepartmentHistoryController {
    constructor(employeeDepartmentHistoryService) {
        this.employeeDepartmentHistoryService = employeeDepartmentHistoryService;
    }
    async findAllEmployeeDepartmentHistorys(query) {
        const result = await this.employeeDepartmentHistoryService.paginationEmployeeDepartmentHistory(query);
        return result;
    }
    async findAllEmployeeDepartmentHistory(edhiEmp) {
        const result = await this.employeeDepartmentHistoryService.findAllEmployeeDepartmentHistory(edhiEmp);
        return result;
    }
    async createEmployeeDepartmentHistory(body) {
        const result = await this.employeeDepartmentHistoryService.createEmployeeDepartmentHistory(body);
        if (result) {
            return {
                message: 'EmployeeDepartmentHistory created successfully',
                result: result,
            };
        }
        else {
            throw new common_1.HttpException('EmployeeDepartmentHistory created failed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateEmployeeDepartmentHistory(id, body) {
        const getOneData = await this.employeeDepartmentHistoryService.findOneEmployeeDepartmentHistory(id);
        if (getOneData) {
            const result = await this.employeeDepartmentHistoryService.updateEmployeeDepartmentHistory(id, body);
            if (result) {
                return {
                    message: 'EmployeeDepartmentHistory updated successfully',
                    result: result,
                };
            }
            else {
                throw new common_1.HttpException('EmployeeDepartmentHistory updated failed', common_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'EmployeeDepartmentHistory not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteEmployeeDepartmentHistory(query) {
        const getOneData = await this.employeeDepartmentHistoryService.findOneEmployeeDepartmentHistory(query.edhiId);
        if (getOneData) {
            const result = await this.employeeDepartmentHistoryService.deleteEmployeeDepartmentHistory(query);
            if (result) {
                return {
                    message: 'EmployeeDepartmentHistory deleted successfully',
                    result: result,
                };
            }
            else {
                throw new common_1.HttpException('EmployeeDepartmentHistory deleted failed', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'EmployeeDepartmentHistory not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async paginationEmployeeDepartmentHistory(query) {
        const result = await this.employeeDepartmentHistoryService.paginationEmployeeDepartmentHistory(query);
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
], EmployeeDepartmentHistoryController.prototype, "findAllEmployeeDepartmentHistorys", null);
__decorate([
    (0, common_1.Get)('alldata/:edhiEmp'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeDepartmentHistoryController.prototype, "findAllEmployeeDepartmentHistory", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeDepartmentHistoryController.prototype, "createEmployeeDepartmentHistory", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], EmployeeDepartmentHistoryController.prototype, "updateEmployeeDepartmentHistory", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeDepartmentHistoryController.prototype, "deleteEmployeeDepartmentHistory", null);
__decorate([
    (0, common_1.Get)('pagination'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeDepartmentHistoryController.prototype, "paginationEmployeeDepartmentHistory", null);
EmployeeDepartmentHistoryController = __decorate([
    (0, common_1.Controller)('employee-department-history'),
    __metadata("design:paramtypes", [employee_department_history_service_1.EmployeeDepartmentHistoryService])
], EmployeeDepartmentHistoryController);
exports.EmployeeDepartmentHistoryController = EmployeeDepartmentHistoryController;
//# sourceMappingURL=employee_department_history.controller.js.map