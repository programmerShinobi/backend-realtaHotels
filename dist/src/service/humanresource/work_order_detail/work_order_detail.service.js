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
exports.WorkOrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const WorkOrderDetail_1 = require("../../../../entities/WorkOrderDetail");
let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let seconds = String(date.getSeconds()).padStart(2, '0');
let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
let WorkOrderDetailService = class WorkOrderDetailService {
    constructor(workOrderDetailRepository) {
        this.workOrderDetailRepository = workOrderDetailRepository;
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
    async findAllWorkOrderDetail(ephiEmp) {
        return await this.workOrderDetailRepository.query('select * from humanresource.getAllWorkOrderDetail($1)', [ephiEmp.ephiEmp]);
    }
    async findOneWorkOrderDetail(wodeId) {
        return await this.workOrderDetailRepository.findOne({
            where: { wodeId: wodeId },
        });
    }
    async createWorkOrderDetail(data) {
        await this.workOrderDetailRepository.insert({
            wodeTaskName: data.wodeTaskName,
            wodeStatus: 'INPROGRESS',
            wodeStartDate: formattedDate,
            wodeNotes: data.wodeNotes,
            wodeEmp: data.wodeEmp,
            wodeSeta: data.wodeSeta,
            wodeWoro: data.wodeWoro,
        });
        const res = await this.paginationWorkOrderDetail(data);
        return res;
    }
    async updateWorkOrderDetail(wodeId, data) {
        await this.workOrderDetailRepository.update({
            wodeId: wodeId,
        }, {
            wodeTaskName: data.wodeTaskName,
            wodeStatus: data.wodeStatus,
            wodeStartDate: formattedDate,
            wodeNotes: data.wodeNotes,
            wodeEmp: data.wodeEmp,
            wodeSeta: data.wodeSeta,
            wodeWoro: data.wodeWoro,
        });
        const res = await this.paginationWorkOrderDetail(data);
        return res;
    }
    async deleteWorkOrderDetail(data) {
        await this.workOrderDetailRepository.delete({
            wodeId: data.wodeId,
        });
        const res = await this.paginationWorkOrderDetail(data);
        return res;
    }
    async paginationWorkOrderDetail(query) {
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const skip = (page - 1) * limit;
        const keyword = (query === null || query === void 0 ? void 0 : query.keyword) || '';
        const wodeWoro = query === null || query === void 0 ? void 0 : query.wodeWoro;
        const data = await this.workOrderDetailRepository.findAndCount({
            relations: ['wodeEmp', 'wodeSeta', 'wodeWoro', 'wodeEmp.empUser'],
            where: {
                wodeWoro: {
                    woroId: wodeWoro,
                },
            },
            order: { wodeId: 'ASC' },
            take: limit,
            skip: skip,
        });
        return this.paginateResponse(data, page, limit);
    }
};
WorkOrderDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(WorkOrderDetail_1.WorkOrderDetail)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], WorkOrderDetailService);
exports.WorkOrderDetailService = WorkOrderDetailService;
//# sourceMappingURL=work_order_detail.service.js.map