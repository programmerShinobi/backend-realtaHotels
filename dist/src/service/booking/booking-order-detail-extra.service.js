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
exports.BookingOrderDetailExtraService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const BookingOrderDetailExtra_1 = require("../../../entities/BookingOrderDetailExtra");
let BookingOrderDetailExtraService = class BookingOrderDetailExtraService {
    constructor(bookingorderdetailextraRepository) {
        this.bookingorderdetailextraRepository = bookingorderdetailextraRepository;
    }
    async findAllBookingOrderDetailExtra() {
        return await this.bookingorderdetailextraRepository.find();
    }
    async findOneBookingOrderDetailExtra(boex_id) {
        return await this.bookingorderdetailextraRepository.findOne({
            where: {
                boexId: boex_id
            }
        });
    }
    async createBookingOrderDetailExtra(data) {
        return await this.bookingorderdetailextraRepository.save(data);
    }
    async updateBookingOrderExtra(boex_id, data) {
        return await this.bookingorderdetailextraRepository.update({ boexId: boex_id }, data)
            .then(result => {
            return 'Data berhasil Di Update';
        }).catch(error => {
            return error;
        });
    }
    async deleteBookingOrderDetailExtra(boex_id) {
        return await this.bookingorderdetailextraRepository.delete({
            boexId: boex_id
        });
    }
};
BookingOrderDetailExtraService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(BookingOrderDetailExtra_1.BookingOrderDetailExtra)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookingOrderDetailExtraService);
exports.BookingOrderDetailExtraService = BookingOrderDetailExtraService;
//# sourceMappingURL=booking-order-detail-extra.service.js.map