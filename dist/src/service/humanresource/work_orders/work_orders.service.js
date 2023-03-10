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
exports.WorkOrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const WorkOrders_1 = require("../../../../entities/WorkOrders");
const date = new Date();
let WorkOrdersService = class WorkOrdersService {
    constructor(workorderRepository) {
        this.workorderRepository = workorderRepository;
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
    async findAllWorkorder() {
        return await this.workorderRepository.find();
    }
    async findOneWorkorder(woroId) {
        return await this.workorderRepository.findOne({
            where: { woroId: woroId },
        });
    }
    async createWorkorder(data) {
        await this.workorderRepository.insert({
            woroStartDate: data.woroStartDate,
            woroUser: data.userId,
            woroStatus: 'OPEN',
        });
        const res = await this.paginationWorkorder(data);
        return res;
    }
    async updateWorkorder(woroId, data) {
        await this.workorderRepository.update({
            woroId: woroId,
        }, {
            woroStartDate: data.woroStartDate,
            woroStatus: data.woroStatus,
        });
        const res = await this.paginationWorkorder(data);
        return res;
    }
    async deleteWorkorder(data) {
        await this.workorderRepository.delete({
            woroId: data.woroId,
        });
        const res = await this.paginationWorkorder(data);
        return res;
    }
    async paginationWorkorder(query) {
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const skip = (page - 1) * limit;
        const keyword = (query === null || query === void 0 ? void 0 : query.keyword) || '';
        const data = await this.workorderRepository.findAndCount({
            relations: ['woroUser'],
            where: {
                woroUser: {
                    userFullName: (0, typeorm_1.Like)(`%${keyword}%`),
                },
            },
            order: { woroId: 'ASC' },
            take: limit,
            skip: skip,
        });
        return this.paginateResponse(data, page, limit);
    }
};
WorkOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(WorkOrders_1.WorkOrders)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], WorkOrdersService);
exports.WorkOrdersService = WorkOrdersService;
//# sourceMappingURL=work_orders.service.js.map