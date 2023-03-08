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
exports.BookingOrderDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const BookingOrderDetail_1 = require("../../../entities/BookingOrderDetail");
let BookingOrderDetailService = class BookingOrderDetailService {
    constructor(bookingorderdeatailRepository) {
        this.bookingorderdeatailRepository = bookingorderdeatailRepository;
    }
    async findAllBookingOrderDetail() {
        return await this.bookingorderdeatailRepository.find();
    }
    async findOneBookinfOrderDetail(boder_id) {
        return await this.bookingorderdeatailRepository.findOne({
            where: {
                bordeId: boder_id,
            }
        });
    }
    async createBookingOrderDetail(data) {
        return await this.bookingorderdeatailRepository.save(data);
    }
    async updateBokingOrderDetail(borde_id, data) {
        return await this.bookingorderdeatailRepository.update({ bordeId: borde_id }, data)
            .then(result => {
            return 'Data berhasil Di Update';
        }).catch(error => {
            return error;
        });
    }
    async deleteBookingOrdeDetail(boder_id) {
        return await this.bookingorderdeatailRepository.delete({
            bordeId: boder_id
        });
    }
};
BookingOrderDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(BookingOrderDetail_1.BookingOrderDetail)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookingOrderDetailService);
exports.BookingOrderDetailService = BookingOrderDetailService;
//# sourceMappingURL=booking-order-detail.service.js.map