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
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const Regions_1 = require("../../../../entities/Regions");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let RegionService = class RegionService {
    query() {
        throw new Error('Method not implemented.');
    }
    constructor(regionRepository) {
        this.regionRepository = regionRepository;
    }
    async getAll() {
        const ShowData = await this.regionRepository.find();
        return ShowData;
    }
    async getById(regionCode) {
        const ShowDataId = await this.regionRepository.findOne({
            where: {
                regionCode: regionCode
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.regionRepository.save({
            regionName: data.regionName
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, regionCode) {
        const editData = await this.regionRepository.update({
            regionCode: regionCode,
        }, {
            regionName: data.regionName
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(regionCode) {
        const deleteData = await this.regionRepository.delete({
            regionCode: regionCode
        });
        console.log('data berhasil dihapus ');
        return deleteData;
    }
};
RegionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Regions_1.Regions)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], RegionService);
exports.RegionService = RegionService;
//# sourceMappingURL=region.service.js.map