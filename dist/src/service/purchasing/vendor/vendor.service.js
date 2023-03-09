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
exports.VendorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const Vendor_1 = require("../../../../entities/Vendor");
let VendorService = class VendorService {
    constructor(vendorRepo) {
        this.vendorRepo = vendorRepo;
    }
    async getAllVendor() {
        return await this.vendorRepo.find();
    }
    async createVendor(data) {
        await this.vendorRepo.save({
            vendorName: data.vendorName,
            vendorPriority: data.vendorPriority,
            vendorActive: data.vendorActive,
            vendorRegisterDate: data.vendorRegisterDate,
            vendorWeburl: data.vendorWeburl,
            vendorModifiedDate: new Date(),
        });
        const res = await this.getAllVendor();
        return {
            result: res,
            message: 'Data Inserted',
        };
    }
    async getVendorById(id) {
        const res = await this.vendorRepo.findOneBy({ vendorEntityId: id });
        return {
            result: res,
        };
    }
    async updateVendor(id, data) {
        const res = await this.vendorRepo.update({ vendorEntityId: id }, {
            vendorName: data.vendorName,
            vendorActive: data.vendorActive,
            vendorPriority: data.vendorPriority,
            vendorRegisterDate: data.vendorRegisterDate,
            vendorWeburl: data.vendorWeburl,
            vendorModifiedDate: new Date(),
        });
        return {
            message: 'dataUpdated',
            result: res,
        };
    }
    async deleteVendor(id) {
        await this.vendorRepo.delete({ vendorEntityId: id });
        const res = await this.getAllVendor();
        return {
            message: 'data Deleted',
            result: res,
        };
    }
};
VendorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(Vendor_1.Vendor)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], VendorService);
exports.VendorService = VendorService;
//# sourceMappingURL=vendor.service.js.map