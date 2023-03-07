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
exports.JobroleController = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const enums_1 = require("@nestjs/common/enums");
const job_role_dto_1 = require("./job_role.dto");
const job_role_service_1 = require("../../../service/humanresource/job_role/job_role.service");
let JobroleController = class JobroleController {
    constructor(jobRoleService) {
        this.jobRoleService = jobRoleService;
    }
    findAllJobRole() {
        return this.jobRoleService.findAllJobRole();
    }
    async findOneJobRole(param) {
        const result = await this.jobRoleService.findOneJobRole(param.id);
        if (result) {
            return result;
        }
        else {
            throw new exceptions_1.HttpException('Job Role not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
    async createJobRole(body) {
        const result = await this.jobRoleService.createJobRole(body);
        if (result) {
            return { message: 'Job Role created successfully' };
        }
        else {
            throw new exceptions_1.HttpException('Job Role created failed', enums_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateJobRole(id, body) {
        const getOneData = await this.jobRoleService.findOneJobRole(id);
        if (getOneData) {
            const result = await this.jobRoleService.updateJobRole(id, body);
            if (result) {
                throw new exceptions_1.HttpException('Job Role updated successfully', enums_1.HttpStatus.ACCEPTED);
            }
            else {
                throw new exceptions_1.HttpException('Job Role updated failed', enums_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new exceptions_1.HttpException('Job Role not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteJobRole(id) {
        const getOneData = await this.jobRoleService.findOneJobRole(id);
        if (getOneData) {
            const result = this.jobRoleService.deleteJobRole(id);
            if (result) {
                throw new exceptions_1.HttpException('Job Role deleted successfully', enums_1.HttpStatus.ACCEPTED);
            }
            else {
                throw new exceptions_1.HttpException('Job Role deleted failed', enums_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new exceptions_1.HttpException('Job Role not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], JobroleController.prototype, "findAllJobRole", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobroleController.prototype, "findOneJobRole", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [job_role_dto_1.JobRoleDto]),
    __metadata("design:returntype", Promise)
], JobroleController.prototype, "createJobRole", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, job_role_dto_1.JobRoleDto]),
    __metadata("design:returntype", Promise)
], JobroleController.prototype, "updateJobRole", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], JobroleController.prototype, "deleteJobRole", null);
JobroleController = __decorate([
    (0, common_1.Controller)('jobrole'),
    __metadata("design:paramtypes", [job_role_service_1.JobRoleService])
], JobroleController);
exports.JobroleController = JobroleController;
//# sourceMappingURL=job_role.controller.js.map