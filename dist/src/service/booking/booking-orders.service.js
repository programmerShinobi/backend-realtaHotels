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
exports.BookingOrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const BookingOrders_1 = require("../../../entities/BookingOrders");
let BookingOrdersService = class BookingOrdersService {
    constructor(bookingordersRepository) {
        this.bookingordersRepository = bookingordersRepository;
    }
    async findAllBookingOrders() {
        return await this.bookingordersRepository.find();
    }
    async findOneBookingOrders(boor_id) {
        return await this.bookingordersRepository.findOne({
            where: {
                boorId: boor_id
            }
        });
    }
    async createBookingOrders(data) {
        return await this.bookingordersRepository.save(data);
    }
    async updateBokingOrders(boor_id, data) {
        return await this.bookingordersRepository.update({ boorId: boor_id }, data)
            .then(result => {
            return 'Data berhasil Di Update';
        }).catch(error => {
            return error;
        });
    }
    async deleteBookinfOrders(boor_id) {
        return await this.bookingordersRepository.delete({
            boorId: boor_id
        });
    }
    async createBokingOrder(data) {
        return await this.bookingordersRepository.query(`CALL booking.insertbooking ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)`, [
            data.boor_user_id,
            data.boor_hotel_id,
            data.boor_order_number,
            data.boor_order_date,
            data.boor_arrival_date,
            data.boor_total_room,
            data.boor_total_guest,
            data.boor_discount,
            data.boor_total_tax,
            data.boor_total_amount,
            data.boor_down_payment,
            data.boor_pay_type,
            data.boor_is_paid,
            data.boor_type,
            data.boor_cardnumber,
            data.boor_member_type,
            data.boor_status,
            data.borde_checkin,
            data.borde_Checkout,
            data.borde_adults,
            data.borde_kids,
            data.borde_price,
            data.borde_extra,
            data.borde_discount,
            data.borde_tax,
            data.borde_subtotal,
            data.borde_faci_id,
            data.soco_spof_id
        ]);
    }
    async getInvoice() {
        return await this.bookingordersRepository.query('SELECT * FROM booking.getbookinginvoice');
    }
};
BookingOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(BookingOrders_1.BookingOrders)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookingOrdersService);
exports.BookingOrdersService = BookingOrdersService;
//# sourceMappingURL=booking-orders.service.js.map