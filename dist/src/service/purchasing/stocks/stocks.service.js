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
exports.StocksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Stocks_1 = require("../../../../entities/Stocks");
let StocksService = class StocksService {
    constructor(stocksRepo) {
        this.stocksRepo = stocksRepo;
    }
    async getAllStocks() {
        return await this.stocksRepo.find({
            order: { stockId: 'ASC' }
        });
    }
    async createStocks(data) {
        await this.stocksRepo.save({
            stockName: data.stockName,
            stockDescription: data.stockDescription,
            stockQuantity: data.stockQuantity,
            stockReorderPoint: data.stockReorderPoint,
            stockUsed: data.stockUsed,
            stockScrap: data.stockScrap,
            stockSize: data.stockSize,
            stockColor: data.stockColor,
            stockModifiedDate: new Date()
        });
        const res = await this.getAllStocks();
        return {
            message: 'Data Inserted',
            result: res
        };
    }
    async updateStocks(id, data) {
        await this.stocksRepo.update({ stockId: id }, {
            stockName: data.stockName,
            stockDescription: data.stockDescription,
            stockQuantity: data.stockQuantity,
            stockReorderPoint: data.stockReorderPoint,
            stockUsed: data.stockUsed,
            stockScrap: data.stockScrap,
            stockSize: data.stockSize,
            stockColor: data.stockColor,
            stockModifiedDate: new Date()
        });
        const res = await this.getAllStocks();
        return {
            message: 'Data Updated',
            result: res
        };
    }
};
StocksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Stocks_1.Stocks)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StocksService);
exports.StocksService = StocksService;
//# sourceMappingURL=stocks.service.js.map