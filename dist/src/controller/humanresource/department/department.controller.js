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
exports.DepartmentController = void 0;
const common_1 = require("@nestjs/common");
const department_service_1 = require("../../../service/humanresource/department/department.service");
const department_dto_1 = require("./department.dto");
let DepartmentController = class DepartmentController {
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    async findAllDepartments() {
        const result = await this.departmentService.paginationDepartment();
        return result;
    }
    async findAllDepartment() {
        const result = await this.departmentService.findAllDepartment();
        return result;
    }
    async createDepartment(body) {
        const result = await this.departmentService.createDepartment(body);
        if (result) {
            return { message: 'Department created successfully', result: result };
        }
        else {
            throw new common_1.HttpException('Department created failed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateDepartment(id, body) {
        const getOneData = await this.departmentService.findOneDepartment(id);
        if (getOneData) {
            const result = await this.departmentService.updateDepartment(id, body);
            if (result) {
                return { message: 'Department updated successfully', result: result };
            }
            else {
                throw new common_1.HttpException('Department updated failed', common_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'Department not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteDepartment(query) {
        const getOneData = await this.departmentService.findOneDepartment(query.deptId);
        if (getOneData) {
            const result = await this.departmentService.deleteDepartment(query);
            if (result) {
                return { message: 'Department deleted successfully', result: result };
            }
            else {
                throw new common_1.HttpException('Department deleted failed', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'Department not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async paginationDepartment(query) {
        const result = await this.departmentService.paginationDepartment(query);
        return result;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findAllDepartments", null);
__decorate([
    (0, common_1.Get)('alldata'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findAllDepartment", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [department_dto_1.DepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "createDepartment", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, department_dto_1.DepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "updateDepartment", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "deleteDepartment", null);
__decorate([
    (0, common_1.Get)('pagination'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "paginationDepartment", null);
DepartmentController = __decorate([
    (0, common_1.Controller)('department'),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentController);
exports.DepartmentController = DepartmentController;
//# sourceMappingURL=department.controller.js.map