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
exports.BookingOrderDetailExtraController = void 0;
const common_1 = require("@nestjs/common");
const booking_order_detail_extra_service_1 = require("../../service/booking/booking-order-detail-extra.service");
let BookingOrderDetailExtraController = class BookingOrderDetailExtraController {
    constructor(bookingorderdetailextraService) {
        this.bookingorderdetailextraService = bookingorderdetailextraService;
    }
    findall() {
        return this.bookingorderdetailextraService.findAllBookingOrderDetailExtra();
    }
    findbyid(id) {
        return this.bookingorderdetailextraService.findOneBookingOrderDetailExtra(id);
    }
    create(body) {
        return this.bookingorderdetailextraService.createBookingOrderDetailExtra(body);
    }
    update(params, body) {
        return this.bookingorderdetailextraService.updateBookingOrderExtra(params.id, body);
    }
    remove(params) {
        return this.bookingorderdetailextraService.deleteBookingOrderDetailExtra(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingOrderDetailExtraController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailExtraController.prototype, "findbyid", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailExtraController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailExtraController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrderDetailExtraController.prototype, "remove", null);
BookingOrderDetailExtraController = __decorate([
    (0, common_1.Controller)('booking-order-detail-extra'),
    __metadata("design:paramtypes", [booking_order_detail_extra_service_1.BookingOrderDetailExtraService])
], BookingOrderDetailExtraController);
exports.BookingOrderDetailExtraController = BookingOrderDetailExtraController;
//# sourceMappingURL=booking-order-detail-extra.controller.js.map