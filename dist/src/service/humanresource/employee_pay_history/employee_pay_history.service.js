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
exports.EmployeePayHistoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const EmployeePayHistory_1 = require("../../../../entities/EmployeePayHistory");
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let seconds = String(date.getSeconds()).padStart(2, '0');
let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
let EmployeePayHistoryService = class EmployeePayHistoryService {
    constructor(employeePayHistoryRepository) {
        this.employeePayHistoryRepository = employeePayHistoryRepository;
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
    async findAllEmployeePayHistory(ephiEmp) {
        return await this.employeePayHistoryRepository.query('select * from humanresource.getAllEmployeePayHistory($1)', [ephiEmp.ephiEmp]);
    }
    async findOneEmployeePayHistory(ephiId) {
        return await this.employeePayHistoryRepository.findOne({
            where: { ephiId: ephiId },
        });
    }
    async createEmployeePayHistory(data) {
        await this.employeePayHistoryRepository.insert({
            ephiRateSalary: data.ephiRateSalary,
            ephiPayFrequence: data.ephiPayFrequence,
            ephiEmp: data.ephiEmp,
            ephiRateChangeDate: formattedDate,
            ephiModifiedDate: formattedDate,
        });
        const res = await this.paginationEmployeePayHistory(data);
        return res;
    }
    async updateEmployeePayHistory(ephiId, data) {
        await this.employeePayHistoryRepository.update({
            ephiId: ephiId,
        }, {
            ephiRateSalary: data.ephiRateSalary,
            ephiPayFrequence: data.ephiPayFrequence,
            ephiModifiedDate: formattedDate,
        });
        const res = await this.paginationEmployeePayHistory(data);
        return res;
    }
    async deleteEmployeePayHistory(data) {
        await this.employeePayHistoryRepository.delete({
            ephiId: data.ephiId,
        });
        const res = await this.paginationEmployeePayHistory(data);
        return res;
    }
    async paginationEmployeePayHistory(query) {
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const skip = (page - 1) * limit;
        const keyword = (query === null || query === void 0 ? void 0 : query.keyword) || '';
        const ephiEmp = query === null || query === void 0 ? void 0 : query.ephiEmp;
        const data = await this.employeePayHistoryRepository.findAndCount({
            relations: ['ephiEmp'],
            where: {
                ephiEmp: {
                    empId: ephiEmp,
                },
            },
            order: { ephiId: 'ASC' },
            take: limit,
            skip: skip,
        });
        return this.paginateResponse(data, page, limit);
    }
};
EmployeePayHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(EmployeePayHistory_1.EmployeePayHistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], EmployeePayHistoryService);
exports.EmployeePayHistoryService = EmployeePayHistoryService;
//# sourceMappingURL=employee_pay_history.service.js.map