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
exports.DepartmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Department_1 = require("../../../../entities/Department");
const date = new Date();
let DepartmentService = class DepartmentService {
    constructor(departmentRepository) {
        this.departmentRepository = departmentRepository;
        this.paginateResponse = (data, page, limit) => {
            const [result, total] = data;
            const lastPage = Math.ceil(total / limit);
            const nextPage = parseInt(page) + 1 > lastPage ? null : parseInt(page) + 1;
            const prevPage = parseInt(page) - 1 < 1 ? null : parseInt(page) - 1;
            return {
                statusCode: 'success',
                data: [...result],
                count: total,
                currentPage: page,
                nextPage: nextPage,
                prevPage: prevPage,
                lastPage: lastPage,
            };
        };
    }
    ucwords(str) {
        return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    }
    async findAllDepartment() {
        return await this.departmentRepository.find();
    }
    async findOneDepartment(deptId) {
        return await this.departmentRepository.findOne({
            where: { deptId: deptId },
        });
    }
    async createDepartment(data) {
        await this.departmentRepository.insert({
            deptName: this.ucwords(data.deptName),
        });
        const res = await this.paginationDepartment(data);
        return res;
    }
    async updateDepartment(deptId, data) {
        await this.departmentRepository.update({
            deptId: deptId,
        }, {
            deptName: this.ucwords(data.deptName),
            deptModifiedDate: date,
        });
        const res = await this.paginationDepartment(data);
        return res;
    }
    async deleteDepartment(data) {
        await this.departmentRepository.delete({
            deptId: data.deptId,
        });
        const res = await this.paginationDepartment(data);
        return res;
    }
    async paginationDepartment(query) {
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const skip = (page - 1) * limit;
        const keyword = (query === null || query === void 0 ? void 0 : query.keyword) || '';
        const data = await this.departmentRepository.findAndCount({
            where: { deptName: (0, typeorm_1.Like)(`%${keyword}%`) },
            order: { deptId: 'ASC' },
            take: limit,
            skip: skip,
        });
        return this.paginateResponse(data, page, limit);
    }
};
DepartmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Department_1.Department)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], DepartmentService);
exports.DepartmentService = DepartmentService;
//# sourceMappingURL=department.service.js.map