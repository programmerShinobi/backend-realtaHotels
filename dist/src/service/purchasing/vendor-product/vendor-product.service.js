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
exports.VendorProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const VendorProduct_1 = require("../../../../entities/VendorProduct");
const typeorm_2 = require("typeorm");
let VendorProductService = class VendorProductService {
    constructor(venproRepo) {
        this.venproRepo = venproRepo;
    }
    async getVenpro() {
        const res = await this.venproRepo.query(`select * from purchasing.getVendorProductId()`);
        return {
            res
        };
    }
    async insertVendorProduct(id, data) {
        await this.venproRepo.query(`call purchasing.insertvendorproduct($1,$2,$3,$4,$5)`, [data.stockname, data.stockquantity, data.stockremain, data.stockprice, id]);
        const res = await this.getVenpro();
        return {
            message: 'data Inserted',
            res: res.res
        };
    }
};
VendorProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(VendorProduct_1.VendorProduct)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], VendorProductService);
exports.VendorProductService = VendorProductService;
//# sourceMappingURL=vendor-product.service.js.map