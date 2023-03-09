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
exports.FacilityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Facilities_1 = require("../../../entities/Facilities");
const FacilityPriceHistory_1 = require("../../../entities/FacilityPriceHistory");
let FacilityService = class FacilityService {
    constructor(repositoryFac, repositoryFaph) {
        this.repositoryFac = repositoryFac;
        this.repositoryFaph = repositoryFaph;
    }
    async findAllFacility() {
        return await this.repositoryFac.query('select * from hotel.facilities');
    }
    async findallFaciHotel() {
        return await this.repositoryFac.query('select * from hotel.faci_allhotel');
    }
    async insertFacilityAndPriceHistory(data) {
        await this.repositoryFac.query(`CALL hotel.insert_facility_and_price_history(
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
      )`, [
            data.faciName,
            data.faciDescription,
            data.faciMaxNumber,
            data.faciMeasureUnit,
            data.faciRoomNumber,
            data.faciStartdate,
            data.faciEndate,
            data.faciLowPrice,
            data.faciHightPrice,
            data.faciRatePrice,
            data.faciDiscount,
            data.faciTaxRate,
            data.faciModifiedDate,
            data.faciHotel,
            data.faciCagro,
        ]);
        const res = await this.repositoryFac.query('select * from hotel.facilities');
        return { result: res };
    }
    async updateFacility(id, data) {
        await this.repositoryFac
            .createQueryBuilder()
            .update()
            .set({
            faciName: data.faci_name,
            faciDescription: data.faci_description,
            faciMaxNumber: data.faci_max_number,
            faciMeasureUnit: data.faci_measure_unit,
            faciRoomNumber: data.faci_room_number,
            faciStartdate: data.faci_startdate,
            faciEndate: data.faci_endate,
            faciHightPrice: data.faci_hight_price,
            faciLowPrice: data.faci_low_price,
            faciRatePrice: data.faci_rate_price,
            faciDiscount: data.faci_discount,
            faciTaxRate: data.faci_tax_rate,
            faciModifiedDate: data.faci_modified_date,
            faciCagro: data.faci_cagro_id,
            faciHotel: data.faci_hotel_id,
        })
            .where('faciId = :id', { id })
            .execute();
        await this.repositoryFaph
            .createQueryBuilder()
            .update()
            .set({
            faphStartdate: data.faci_startdate,
            faphEnddate: data.faci_endate,
            faphHighPrice: data.faci_hight_price,
            faphLowPrice: data.faci_low_price,
            faphDiscount: data.faci_discount,
            faphTaxRate: data.faci_tax_rate,
            faphModifiedDate: data.faci_modified_date,
        })
            .where('faphFaci = :id', { id })
            .execute();
        return 'data berhasil di rubah';
    }
    async findByNoRoom(faciRoomNumber) {
        return await this.repositoryFac.findOneBy({
            faciRoomNumber: faciRoomNumber,
        });
    }
    async findMaxRoomId() {
        return await this.repositoryFac.query('select faci_cagro_id, max(faci_room_number) as max_roomid from hotel.facilities group by faci_cagro_id');
    }
    async deleteFaci(id) {
        await this.repositoryFac.delete({ faciId: id });
        await this.repositoryFaph.delete({ faphFaci: id });
        return 'berhasil hapus data';
    }
};
FacilityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Facilities_1.Facilities)),
    __param(1, (0, typeorm_2.InjectRepository)(FacilityPriceHistory_1.FacilityPriceHistory)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], FacilityService);
exports.FacilityService = FacilityService;
//# sourceMappingURL=facility.service.js.map