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
exports.WorkOrdersController = void 0;
const common_1 = require("@nestjs/common");
const work_orders_service_1 = require("../../../service/humanresource/work_orders/work_orders.service");
let WorkOrdersController = class WorkOrdersController {
    constructor(workordersService) {
        this.workordersService = workordersService;
    }
    async findAllWorkorder(query) {
        const result = await this.workordersService.paginationWorkorder(query);
        return result;
    }
    async findOneWorkorder(param) {
        const result = await this.workordersService.findOneWorkorder(param.id);
        if (result) {
            return result;
        }
        else {
            throw new common_1.HttpException({ message: 'Workorders not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async createWorkorder(body) {
        const result = await this.workordersService.createWorkorder(body);
        if (result) {
            return { message: 'Workorders created successfully', result: result };
        }
        else {
            throw new common_1.HttpException('Workorders created failed', common_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateWorkorder(id, body) {
        const getOneData = await this.workordersService.findOneWorkorder(id);
        if (getOneData) {
            const result = await this.workordersService.updateWorkorder(id, body);
            if (result) {
                return { message: 'Workorders updated successfully', result: result };
            }
            else {
                throw new common_1.HttpException('Workorders updated failed', common_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'Workorders not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async deleteWorkorder(id) {
        const getOneData = await this.workordersService.findOneWorkorder(id);
        if (getOneData) {
            const result = await this.workordersService.deleteWorkorder(id);
            if (result) {
                return { message: 'Workorders deleted successfully', result: result };
            }
            else {
                throw new common_1.HttpException('Workorders deleted failed', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        else {
            throw new common_1.HttpException({ message: 'Workorders not found' }, common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "findAllWorkorder", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "findOneWorkorder", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "createWorkorder", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "updateWorkorder", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], WorkOrdersController.prototype, "deleteWorkorder", null);
WorkOrdersController = __decorate([
    (0, common_1.Controller)('workorders'),
    __metadata("design:paramtypes", [work_orders_service_1.WorkOrdersService])
], WorkOrdersController);
exports.WorkOrdersController = WorkOrdersController;
//# sourceMappingURL=work_orders.controller.js.map