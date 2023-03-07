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
exports.ShiftService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Shift_1 = require("../../../../entities/Shift");
let ShiftService = class ShiftService {
    constructor(ShiftRepository) {
        this.ShiftRepository = ShiftRepository;
    }
    async findAllShift() {
        return await this.ShiftRepository.find();
    }
    async findOneShift(shiftId) {
        return await this.ShiftRepository.findOne({
            where: { shiftId: shiftId },
        });
    }
    async createShift(data) {
        return await this.ShiftRepository.insert({
            shiftName: data.shiftName,
            shiftStartTime: data.shiftStartTime,
            shiftEndTime: data.shiftEndTime,
        });
    }
    async updateShift(shiftId, data) {
        return await this.ShiftRepository.update({
            shiftId: shiftId,
        }, {
            shiftName: data.shiftName,
            shiftStartTime: data.shiftStartTime,
            shiftEndTime: data.shiftEndTime,
        });
    }
    async deleteShift(shiftId) {
        return await this.ShiftRepository.delete({
            shiftId: shiftId,
        });
    }
};
ShiftService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Shift_1.Shift)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ShiftService);
exports.ShiftService = ShiftService;
//# sourceMappingURL=shift.service.js.map