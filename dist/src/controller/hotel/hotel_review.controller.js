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
exports.HotelReviewController = void 0;
const common_1 = require("@nestjs/common");
const hotel_review_service_1 = require("../../service/hotel/hotel_review.service");
const HotelReviews_1 = require("../../../entities/HotelReviews");
let HotelReviewController = class HotelReviewController {
    constructor(hotelReviewService) {
        this.hotelReviewService = hotelReviewService;
    }
    findAllHotelReview() {
        return this.hotelReviewService.findAllHotelReview();
    }
    async createHotel(data) {
        const hotel = await this.hotelReviewService.createHotelReview(data);
        if (!hotel) {
            return 'failed insert to hotels';
        }
        else {
            return 'success insert to hotel';
        }
    }
    async updateHotel(id, body) {
        const newData = await this.hotelReviewService.updateHotelReview(id, body);
        if (!newData) {
            return 'dont updated';
        }
        else {
            return 'updated';
        }
    }
    findByname(Params) {
        return this.hotelReviewService.findByUser(Params.id);
    }
    getProcedureHore() {
        return this.hotelReviewService.findProsedurHore();
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelReviewController.prototype, "findAllHotelReview", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [HotelReviews_1.HotelReviews]),
    __metadata("design:returntype", Promise)
], HotelReviewController.prototype, "createHotel", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], HotelReviewController.prototype, "updateHotel", null);
__decorate([
    (0, common_1.Get)('viewByUser/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HotelReviewController.prototype, "findByname", null);
__decorate([
    (0, common_1.Get)('alluser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelReviewController.prototype, "getProcedureHore", null);
HotelReviewController = __decorate([
    (0, common_1.Controller)('hore'),
    __metadata("design:paramtypes", [hotel_review_service_1.HotelReviewService])
], HotelReviewController);
exports.HotelReviewController = HotelReviewController;
//# sourceMappingURL=hotel_review.controller.js.map