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
exports.FacilityController = void 0;
const common_1 = require("@nestjs/common");
const facility_service_1 = require("../../service/hotel/facility.service");
let FacilityController = class FacilityController {
    constructor(faciService) {
        this.faciService = faciService;
    }
    findAllFacility() {
        return this.faciService.findAllFacility();
    }
    findallFaciHotel() {
        return this.faciService.findallFaciHotel();
    }
    findMaxRoomId() {
        return this.faciService.findMaxRoomId();
    }
    async insertFacilityAndPriceHistory(body) {
        const result = await this.faciService.insertFacilityAndPriceHistory(body);
        if (!result) {
            return 'failed';
        }
        else {
            return {
                message: 'berhasil insert',
                result: result.result,
            };
        }
    }
    async updateFacility(id, body) {
        return await this.faciService.updateFacility(id, body);
    }
    findByname(Params) {
        return this.faciService.findByNoRoom(Params);
    }
    async deleteFaci(id) {
        return this.faciService.deleteFaci(id);
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilityController.prototype, "findAllFacility", null);
__decorate([
    (0, common_1.Get)('faciall'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilityController.prototype, "findallFaciHotel", null);
__decorate([
    (0, common_1.Get)('maxroomid'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilityController.prototype, "findMaxRoomId", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "insertFacilityAndPriceHistory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "updateFacility", null);
__decorate([
    (0, common_1.Get)('viewByNoRoom'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FacilityController.prototype, "findByname", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FacilityController.prototype, "deleteFaci", null);
FacilityController = __decorate([
    (0, common_1.Controller)('facility'),
    __metadata("design:paramtypes", [facility_service_1.FacilityService])
], FacilityController);
exports.FacilityController = FacilityController;
//# sourceMappingURL=facility.controller.js.map