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
    findAllEmployee(param) {
        return this.employeeDepartmentHistoryService.findAllEmployeeDepartmentHistory(param);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EmployeeDepartmentHistoryController.prototype, "findAllEmployee", null);
EmployeeDepartmentHistoryController = __decorate([
    (0, common_1.Controller)('employee-department-history'),
    __metadata("design:paramtypes", [employee_department_history_service_1.EmployeeDepartmentHistoryService])
], EmployeeDepartmentHistoryController);
exports.EmployeeDepartmentHistoryController = EmployeeDepartmentHistoryController;
//# sourceMappingURL=employee_department_history.controller.js.map