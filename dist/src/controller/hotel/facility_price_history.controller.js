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
exports.FacilityPriceHistoryController = void 0;
const common_1 = require("@nestjs/common");
const facility_price_history_service_1 = require("../../service/hotel/facility_price_history.service");
const FacilityPriceHistory_1 = require("../../../entities/FacilityPriceHistory");
let FacilityPriceHistoryController = class FacilityPriceHistoryController {
    constructor(faphService) {
        this.faphService = faphService;
    }
    findAllHotelReview() {
        return this.faphService.findAllFacilitiPriceHistory();
    }
    async createHotel(data) {
        const faph = await this.faphService.createFacilitiPriceHisty(data);
        if (!faph) {
            return 'failed insert to hotels';
        }
        else {
            return 'success insert to hotel';
        }
    }
    async updateHotel(id, body) {
        const newData = await this.faphService.updateFaph(id, body);
        if (!newData) {
            return 'dont updated';
        }
        else {
            return 'updated';
        }
    }
    findByname(Params) {
        return this.faphService.findByUser(Params);
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilityPriceHistoryController.prototype, "findAllHotelReview", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FacilityPriceHistory_1.FacilityPriceHistory]),
    __metadata("design:returntype", Promise)
], FacilityPriceHistoryController.prototype, "createHotel", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], FacilityPriceHistoryController.prototype, "updateHotel", null);
__decorate([
    (0, common_1.Get)('viewByUser'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FacilityPriceHistoryController.prototype, "findByname", null);
FacilityPriceHistoryController = __decorate([
    (0, common_1.Controller)('facility-price-history'),
    __metadata("design:paramtypes", [facility_price_history_service_1.FacilityPriceHistoryService])
], FacilityPriceHistoryController);
exports.FacilityPriceHistoryController = FacilityPriceHistoryController;
//# sourceMappingURL=facility_price_history.controller.js.map