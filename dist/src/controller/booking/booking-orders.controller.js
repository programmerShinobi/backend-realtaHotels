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
exports.BookingOrdersController = void 0;
const common_1 = require("@nestjs/common");
const booking_orders_service_1 = require("../../service/booking/booking-orders.service");
let BookingOrdersController = class BookingOrdersController {
    constructor(bokingorderService) {
        this.bokingorderService = bokingorderService;
    }
    findall() {
        return this.bokingorderService.findAllBookingOrders();
    }
    findbyid(id) {
        return this.bokingorderService.findOneBookingOrders(id);
    }
    create(body) {
        return this.bokingorderService.createBookingOrders(body);
    }
    update(params, body) {
        return this.bokingorderService.updateBokingOrders(params.id, body);
    }
    remove(params) {
        return this.bokingorderService.deleteBookinfOrders(params.id);
    }
    async bokingOrder(body) {
        return await this.bokingorderService.createBokingOrder(body);
    }
    async getInvoice() {
        return await this.bokingorderService.getInvoice();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "findbyid", null);
__decorate([
    (0, common_1.Post)("create"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('CreateBo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "bokingOrder", null);
__decorate([
    (0, common_1.Get)('invoice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookingOrdersController.prototype, "getInvoice", null);
BookingOrdersController = __decorate([
    (0, common_1.Controller)('bookingOrders'),
    __metadata("design:paramtypes", [booking_orders_service_1.BookingOrdersService])
], BookingOrdersController);
exports.BookingOrdersController = BookingOrdersController;
//# sourceMappingURL=booking-orders.controller.js.map