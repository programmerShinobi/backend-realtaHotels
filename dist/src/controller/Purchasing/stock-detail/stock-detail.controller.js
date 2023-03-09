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
exports.StockDetailController = void 0;
const common_1 = require("@nestjs/common");
const stock_detail_service_1 = require("../../../service/purchasing/stock-detail/stock-detail.service");
let StockDetailController = class StockDetailController {
    constructor(stodService) {
        this.stodService = stodService;
    }
    getAllDetails() {
        return this.stodService.getAllDetails();
    }
    getAllFacilitiesAndId() {
        return this.stodService.getFaciNameandId();
    }
    updateStockStatusAndFacilities(param, body) {
        return this.stodService.updateForDetail(param.id, body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockDetailController.prototype, "getAllDetails", null);
__decorate([
    (0, common_1.Get)('facilities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockDetailController.prototype, "getAllFacilitiesAndId", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StockDetailController.prototype, "updateStockStatusAndFacilities", null);
StockDetailController = __decorate([
    (0, common_1.Controller)('stock-detail'),
    __metadata("design:paramtypes", [stock_detail_service_1.StockDetailService])
], StockDetailController);
exports.StockDetailController = StockDetailController;
//# sourceMappingURL=stock-detail.controller.js.map