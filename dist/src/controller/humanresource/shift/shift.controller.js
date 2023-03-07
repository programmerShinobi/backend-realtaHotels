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
exports.ShiftController = void 0;
const common_1 = require("@nestjs/common");
const shift_dto_1 = require("./shift.dto");
const shift_service_1 = require("../../../service/humanresource/shift/shift.service");
const exceptions_1 = require("@nestjs/common/exceptions");
const enums_1 = require("@nestjs/common/enums");
let ShiftController = class ShiftController {
    constructor(shiftService) {
        this.shiftService = shiftService;
    }
    findAllShift() {
        return this.shiftService.findAllShift();
    }
    async findOneShift(param) {
        const result = await this.shiftService.findOneShift(param.id);
        if (result) {
            return result;
        }
        else {
            throw new exceptions_1.HttpException('Shift not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
    async createShift(body) {
        const result = await this.shiftService.createShift(body);
        if (result) {
            return { message: 'Shift created successfully' };
        }
        else {
            throw new exceptions_1.HttpException('Shift created failed', enums_1.HttpStatus.EXPECTATION_FAILED);
        }
    }
    async updateShift(id, body) {
        const getOneData = await this.shiftService.findOneShift(id);
        if (getOneData) {
            const result = await this.shiftService.updateShift(id, body);
            if (result) {
                throw new exceptions_1.HttpException('Shift updated successfully', enums_1.HttpStatus.ACCEPTED);
            }
            else {
                throw new exceptions_1.HttpException('Shift updated failed', enums_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new exceptions_1.HttpException('Shift not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
    async deleteShift(id) {
        const getOneData = await this.shiftService.findOneShift(id);
        if (getOneData) {
            const result = this.shiftService.deleteShift(id);
            if (result) {
                throw new exceptions_1.HttpException('Shift deleted successfully', enums_1.HttpStatus.ACCEPTED);
            }
            else {
                throw new exceptions_1.HttpException('Shift deleted failed', enums_1.HttpStatus.EXPECTATION_FAILED);
            }
        }
        else {
            throw new exceptions_1.HttpException('Shift not found', enums_1.HttpStatus.NOT_FOUND);
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShiftController.prototype, "findAllShift", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShiftController.prototype, "findOneShift", null);
__decorate([
    (0, common_1.Post)('insert'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shift_dto_1.ShiftDto]),
    __metadata("design:returntype", Promise)
], ShiftController.prototype, "createShift", null);
__decorate([
    (0, common_1.Put)('update/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, shift_dto_1.ShiftDto]),
    __metadata("design:returntype", Promise)
], ShiftController.prototype, "updateShift", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ShiftController.prototype, "deleteShift", null);
ShiftController = __decorate([
    (0, common_1.Controller)('shift'),
    __metadata("design:paramtypes", [shift_service_1.ShiftService])
], ShiftController);
exports.ShiftController = ShiftController;
//# sourceMappingURL=shift.controller.js.map