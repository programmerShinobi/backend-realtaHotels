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
exports.PriceItemsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const PriceItems_1 = require("../../../../entities/PriceItems");
let PriceItemsService = class PriceItemsService {
    constructor(PriceItemsRepository) {
        this.PriceItemsRepository = PriceItemsRepository;
    }
    async getAll() {
        const ShowData = await this.PriceItemsRepository.find();
        return ShowData;
    }
    async getById(pritId) {
        const ShowDataId = await this.PriceItemsRepository.findOne({
            where: {
                pritId: pritId
            }
        });
        return ShowDataId;
    }
    async create(data) {
        let currentDate = new Date();
        const addData = await this.PriceItemsRepository.save({
            pritName: data.pritName,
            pritPrice: data.pritPrice,
            pritDescription: data.pritDescription,
            pritType: data.pritType,
            pritModifiedDate: currentDate
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, _pritId) {
        const editData = await this.PriceItemsRepository.update({
            pritId: _pritId
        }, {
            pritName: data.pritName,
            pritPrice: data.pritPrice,
            pritDescription: data.pritDescription,
            pritType: data.pritType,
            pritModifiedDate: data.pritModifiedDate
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(pritId) {
        const deleteData = await this.PriceItemsRepository.delete({
            pritId: pritId
        });
        return deleteData;
    }
};
PriceItemsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PriceItems_1.PriceItems)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PriceItemsService);
exports.PriceItemsService = PriceItemsService;
//# sourceMappingURL=price_items.service.js.map