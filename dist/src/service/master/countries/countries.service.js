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
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Country_1 = require("../../../../entities/Country");
let CountriesService = class CountriesService {
    findAll() {
        throw new Error('Method not implemented.');
    }
    find() {
        throw new Error('Method not implemented.');
    }
    query(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(countryRepository) {
        this.countryRepository = countryRepository;
    }
    async getAll() {
        const ShowData = await this.countryRepository.query('select * from master.country order by country_id');
        return ShowData;
    }
    async getById(countryId) {
        const ShowDataId = await this.countryRepository.findOne({
            where: {
                countryId: countryId
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.countryRepository.save({
            countryName: data.countryName,
            countryRegion: data.countryRegion
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, countryId) {
        const editData = await this.countryRepository.update({
            countryId: countryId
        }, {
            countryName: data.countryName,
            countryRegion: data.countryRegion
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(countryId) {
        const deleteData = await this.countryRepository.delete({
            countryId: countryId
        });
        return deleteData;
    }
};
CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Country_1.Country)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], CountriesService);
exports.CountriesService = CountriesService;
//# sourceMappingURL=countries.service.js.map