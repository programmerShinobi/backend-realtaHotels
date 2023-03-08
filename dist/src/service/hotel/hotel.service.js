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
exports.HotelService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Hotels_1 = require("../../../entities/Hotels");
let HotelService = class HotelService {
    constructor(hotelsRepository) {
        this.hotelsRepository = hotelsRepository;
    }
    async findAllHotel() {
        return await this.hotelsRepository.find();
    }
    async findAddress() {
        return await this.hotelsRepository.query('select * from hotel.adsress');
    }
    async createHotel(data) {
        data.hotelPhonenumber = '+62 ' + data.hotelPhonenumber;
        await this.hotelsRepository.save(this.hotelsRepository.create(data));
        const res = await this.hotelsRepository.find();
        return { result: res };
    }
    async updateHotel(id, data) {
        return await this.hotelsRepository
            .createQueryBuilder()
            .update()
            .set({
            hotelName: data.hotelName,
            hotelDescription: data.hotelDescription,
            hotelRatingStar: data.hotelRatingStar,
            hotelPhonenumber: data.hotelPhonenumber,
            hotelModifiedDate: data.hotelModifiedDate,
            hotelAddr: data.hotelAddr,
        })
            .where('hotelId = :id', { id })
            .execute();
    }
    async deleteHotels(id) {
        await this.hotelsRepository.delete({ hotelId: id });
        return 'berhasil hapus data';
    }
    async findProcedure() {
        return await this.hotelsRepository.query('SELECT * FROM hotel');
    }
    async findLastOrder() {
        return await this.hotelsRepository.query('SELECT * FROM booking.booking_orders ORDER BY boor_id DESC LIMIT 1');
    }
    async getInvoice() {
        return await this.hotelsRepository.query('SELECT * FROM booking.getbookinginvoice');
    }
};
HotelService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Hotels_1.Hotels)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], HotelService);
exports.HotelService = HotelService;
//# sourceMappingURL=hotel.service.js.map