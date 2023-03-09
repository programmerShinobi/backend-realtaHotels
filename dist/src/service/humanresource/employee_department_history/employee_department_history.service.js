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
exports.EmployeeDepartmentHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const EmployeeDepartmentHistory_1 = require("../../../../entities/EmployeeDepartmentHistory");
const typeorm_2 = require("typeorm");
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let seconds = String(date.getSeconds()).padStart(2, '0');
let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
let EmployeeDepartmentHistoryService = class EmployeeDepartmentHistoryService {
    constructor(employeeDepartmentHistoryRepository) {
        this.employeeDepartmentHistoryRepository = employeeDepartmentHistoryRepository;
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
    async findAllEmployeeDepartmentHistory(edhiEmp) {
        return await this.employeeDepartmentHistoryRepository.query('select * from humanresource.getAllEmployeeDepartmentHistory($1)', [edhiEmp.edhiEmp]);
    }
    async findOneEmployeeDepartmentHistory(edhiId) {
        return await this.employeeDepartmentHistoryRepository.findOne({
            where: { edhiId: edhiId },
        });
    }
    async createEmployeeDepartmentHistory(data) {
        await this.employeeDepartmentHistoryRepository.insert({
            edhiStartDate: data.edhiStartDate,
            edhiEndDate: data.edhiEndDate,
            edhiEmp: data.edhiEmp,
            edhiDept: data.deptId,
            edhiShift: data.shiftId,
        });
        const res = await this.paginationEmployeeDepartmentHistory(data);
        return res;
    }
    async updateEmployeeDepartmentHistory(edhiId, data) {
        await this.employeeDepartmentHistoryRepository.update({
            edhiId: edhiId,
        }, {
            edhiStartDate: data.edhiStartDate,
            edhiEndDate: data.edhiEndDate,
            edhiEmp: data.edhiEmp,
            edhiDept: data.deptId,
            edhiShift: data.shiftId,
        });
        const res = await this.paginationEmployeeDepartmentHistory(data);
        return res;
    }
    async deleteEmployeeDepartmentHistory(data) {
        await this.employeeDepartmentHistoryRepository.delete({
            edhiId: data.edhiId,
        });
        const res = await this.paginationEmployeeDepartmentHistory(data);
        return res;
    }
    async paginationEmployeeDepartmentHistory(query) {
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const skip = (page - 1) * limit;
        const keyword = (query === null || query === void 0 ? void 0 : query.keyword) || '';
        const edhiEmp = query === null || query === void 0 ? void 0 : query.edhiEmp;
        const data = await this.employeeDepartmentHistoryRepository.findAndCount({
            relations: ['edhiEmp', 'edhiDept', 'edhiShift'],
            where: {
                edhiEmp: {
                    empId: edhiEmp,
                },
            },
            order: { edhiId: 'ASC' },
            take: limit,
            skip: skip,
        });
        return this.paginateResponse(data, page, limit);
    }
};
EmployeeDepartmentHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(EmployeeDepartmentHistory_1.EmployeeDepartmentHistory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmployeeDepartmentHistoryService);
exports.EmployeeDepartmentHistoryService = EmployeeDepartmentHistoryService;
//# sourceMappingURL=employee_department_history.service.js.map