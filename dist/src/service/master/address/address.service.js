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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Address_1 = require("../../../../entities/Address");
let AddressService = class AddressService {
    query(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(AddressRepository) {
        this.AddressRepository = AddressRepository;
    }
    async getAll() {
        const ShowData = await this.AddressRepository.query('select * from master.address order by addr_id');
        return ShowData;
    }
    async getById(addrId) {
        const ShowDataId = await this.AddressRepository.findOne({
            where: {
                addrId: addrId
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.AddressRepository.save({
            addrLine1: data.addrLine1,
            addrLine2: data.addrLine2,
            addrPostalCode: data.addrPostalCode,
            addrProv: data.addrProv,
            addrSpatialLocation: data.addrSpatialLocation,
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, _addrId) {
        const editData = await this.AddressRepository.update({
            addrId: _addrId
        }, {
            addrLine1: data.addrLine1,
            addrLine2: data.addrLine2,
            addrPostalCode: data.addrPostalCode,
            addrProv: data.addrProv,
            addrSpatialLocation: data.addrSpatialLocation
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(addrId) {
        const deleteData = await this.AddressRepository.delete({
            addrId: addrId
        });
        return deleteData;
    }
};
AddressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Address_1.Address)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AddressService);
exports.AddressService = AddressService;
//# sourceMappingURL=address.service.js.map