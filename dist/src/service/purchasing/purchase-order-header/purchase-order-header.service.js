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
exports.PurchaseOrderHeaderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const PurchaseOrderHeader_1 = require("../../../../entities/PurchaseOrderHeader");
let PurchaseOrderHeaderService = class PurchaseOrderHeaderService {
    constructor(pohRepo) {
        this.pohRepo = pohRepo;
    }
    async getAllPo() {
        return this.pohRepo.find();
    }
    async getPoForPurchaseOrder() {
        return this.pohRepo.query('select * from purchasing.getPO()');
    }
    async insertPO(data) {
        try {
            await this.pohRepo
                .query('call purchasing.purchaseorderinsert($1, $2,$3,$4,$5::int[],$6::int[],$7::int[],$8::int[])', [
                data.vendorid,
                data.subtotalbyvendor,
                data.taxbyvendor,
                data.totalbyvendor,
                data.stockQuantity,
                data.stockPrice,
                data.stockLineTotal,
                data.stocksid,
            ]);
            return {
                message: 'Order Sent'
            };
        }
        catch (e) {
            return e;
        }
    }
    async editStatus(id, data) {
        try {
            await this.pohRepo.update({ poheId: id }, {
                poheStatus: data.poheStatus
            });
            const res = await this.getPoForPurchaseOrder();
            return {
                message: 'Status Updated',
                result: res
            };
        }
        catch (e) {
            return e;
        }
    }
};
PurchaseOrderHeaderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PurchaseOrderHeader_1.PurchaseOrderHeader)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PurchaseOrderHeaderService);
exports.PurchaseOrderHeaderService = PurchaseOrderHeaderService;
//# sourceMappingURL=purchase-order-header.service.js.map