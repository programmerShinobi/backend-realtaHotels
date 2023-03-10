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
exports.WorkOrderDetailController = void 0;
const common_1 = require("@nestjs/common");
const work_order_detail_service_1 = require("../../../service/humanresource/work_order_detail/work_order_detail.service");
let WorkOrderDetailController = class WorkOrderDetailController {
    constructor(workOrderDetailService) {
        this.workOrderDetailService = workOrderDetailService;
    }
    async findAllWorkOrderDetails(query) {
        const result = await this.workOrderDetailService.paginationWorkOrderDetail(query);
        return result;
    }
    async findAllWorkOrderDetail(woroEmp) {
        const result = await this.workOrderDetailService.findAllWorkOrderDetail(woroEmp);
        return result;
    }
    async createWorkOrderDetail(body) {
        const result = await this.workOrderDetailService.createWorkOrderDetail(body);
        if (result) {
            return {
                message: 'WorkOrderDetail created successfully',
                result: result,
            };
        }
        else {
            throw new common_1.HttpException('WorkOrderDetail created failed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateWorkOrderDetail(id, body) {
        const getOneData = await this.workOrderDetailService.findOneWorkOrderDetail(id);
        if (getOneData) {
            const result = await this.workOrderDetailService.updateWorkOrderDetail(id, body);
            if (result) {
                return {
                    message: 'WorkOrderDetail updated successfully',
                    result: result,
                };
            }
            else {
                throw new common_1.HttpException('WorkOrderDetail updated failed', common_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'WorkOrderDetail not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteWorkOrderDetail(query) {
        const getOneData = await this.workOrderDetailService.findOneWorkOrderDetail(query.ephiId);
        if (getOneData) {
            const result = await this.workOrderDetailService.deleteWorkOrderDetail(query);
            if (result) {
                return {
                    message: 'WorkOrderDetail deleted successfully',
                    result: result,
                };
            }
            else {
                throw new common_1.HttpException('WorkOrderDetail deleted failed', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'WorkOrderDetail not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async paginationWorkOrderDetail(query) {
        const result = await this.workOrderDetailService.paginationWorkOrderDetail(query);
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
], WorkOrderDetailController.prototype, "findAllWorkOrderDetails", null);
__decorate([
    (0, common_1.Get)('alldata/:woroEmp'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrderDetailController.prototype, "findAllWorkOrderDetail", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrderDetailController.prototype, "createWorkOrderDetail", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WorkOrderDetailController.prototype, "updateWorkOrderDetail", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrderDetailController.prototype, "deleteWorkOrderDetail", null);
__decorate([
    (0, common_1.Get)('pagination'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrderDetailController.prototype, "paginationWorkOrderDetail", null);
WorkOrderDetailController = __decorate([
    (0, common_1.Controller)('work-order-detail'),
    __metadata("design:paramtypes", [work_order_detail_service_1.WorkOrderDetailService])
], WorkOrderDetailController);
exports.WorkOrderDetailController = WorkOrderDetailController;
//# sourceMappingURL=work_order_detail.controller.js.map