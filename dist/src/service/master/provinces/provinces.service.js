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
exports.ProvincesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Provinces_1 = require("../../../../entities/Provinces");
let ProvincesService = class ProvincesService {
    constructor(ProvincesRepository) {
        this.ProvincesRepository = ProvincesRepository;
    }
    async getAll() {
        const ShowData = await this.ProvincesRepository.query('select * from master.provinces order by prov_id');
        return ShowData;
    }
    async getById(provId) {
        const ShowDataId = await this.ProvincesRepository.findOne({
            where: {
                provId: provId
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.ProvincesRepository.save({
            provName: data.provName,
            provCountry: data.provCountry,
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, provId) {
        const editData = await this.ProvincesRepository.update({
            provId: provId
        }, {
            provCountry: data.provCountry,
            provName: data.provName,
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(provId) {
        const deleteData = await this.ProvincesRepository.delete({
            provId: provId
        });
        return deleteData;
    }
};
ProvincesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Provinces_1.Provinces)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProvincesService);
exports.ProvincesService = ProvincesService;
//# sourceMappingURL=provinces.service.js.map