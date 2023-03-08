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
exports.HotelController = void 0;
const common_1 = require("@nestjs/common");
const hotel_service_1 = require("../../service/hotel/hotel.service");
const Hotels_1 = require("../../../entities/Hotels");
let HotelController = class HotelController {
    constructor(hotelService) {
        this.hotelService = hotelService;
    }
    findAllHotel() {
        return this.hotelService.findAllHotel();
    }
    findAddress() {
        return this.hotelService.findAddress();
    }
    async createHotel(data) {
        const result = await this.hotelService.createHotel(data);
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
    async updateHotel(id, body) {
        const newData = await this.hotelService.updateHotel(id, body);
        if (!newData) {
            return 'hotel dont updated';
        }
        else {
            return 'hotel updated';
        }
    }
    async deleteHotel(id) {
        return this.hotelService.deleteHotels(id);
    }
    findProcedure() {
        return this.hotelService.findProcedure();
    }
    findlastOrder() {
        return this.hotelService.findLastOrder();
    }
    async getInvoice() {
        return await this.hotelService.getInvoice();
    }
};
__decorate([
    (0, common_1.Get)('view'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findAllHotel", null);
__decorate([
    (0, common_1.Get)('address'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findAddress", null);
__decorate([
    (0, common_1.Post)('insert'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Hotels_1.Hotels]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "createHotel", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "updateHotel", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "deleteHotel", null);
__decorate([
    (0, common_1.Get)('card'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findProcedure", null);
__decorate([
    (0, common_1.Get)('lastOrder'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HotelController.prototype, "findlastOrder", null);
__decorate([
    (0, common_1.Get)('invoice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HotelController.prototype, "getInvoice", null);
HotelController = __decorate([
    (0, common_1.Controller)('hotel'),
    __metadata("design:paramtypes", [hotel_service_1.HotelService])
], HotelController);
exports.HotelController = HotelController;
//# sourceMappingURL=hotel.controller.js.map