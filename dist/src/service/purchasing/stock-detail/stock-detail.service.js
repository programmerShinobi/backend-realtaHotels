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
exports.StockDetailService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const StockDetail_1 = require("../../../../entities/StockDetail");
let StockDetailService = class StockDetailService {
    constructor(stodRepo) {
        this.stodRepo = stodRepo;
    }
    async getAllDetails() {
        return await this.stodRepo.query('select * from purchasing.getstockdetail()');
    }
    async getFaciNameandId() {
        return await this.stodRepo.query('select * from purchasing.getfacinameandid()');
    }
    async updateForDetail(id, data) {
        await this.stodRepo.update({ stodId: id }, {
            stodStatus: data.stodStatus,
            stodFaci: data.stodFaci
        });
        const res = await this.getAllDetails();
        return res;
    }
};
StockDetailService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(StockDetail_1.StockDetail)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StockDetailService);
exports.StockDetailService = StockDetailService;
//# sourceMappingURL=stock-detail.service.js.map