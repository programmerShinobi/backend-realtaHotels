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
exports.PriceItemsController = void 0;
const common_1 = require("@nestjs/common");
const price_items_service_1 = require("../../../service/master/price_items/price_items.service");
let PriceItemsController = class PriceItemsController {
    constructor(PriceItemsRepository) {
        this.PriceItemsRepository = PriceItemsRepository;
    }
    async getAll() {
        const hasil = await this.PriceItemsRepository.getAll();
        console.log({
            hasil: hasil
        });
        return hasil;
    }
    async getById(Param) {
        const hasil = await this.PriceItemsRepository.getById(Param.id);
        console.log({ hasil: hasil });
        return hasil;
    }
    async create(Body) {
        const hasil = await this.PriceItemsRepository.create(Body);
        console.log(hasil + 'berhasil');
        return hasil;
    }
    async edit(id, Body) {
        const hasil = await this.PriceItemsRepository.edit(Body, id);
        console.log('Berhasil');
        return hasil;
    }
    async delete(Param) {
        const hasil = await this.PriceItemsRepository.delete(Param);
        console.log('berhasil di hapus' + hasil);
        return hasil;
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PriceItemsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PriceItemsController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('save'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PriceItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('edit/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PriceItemsController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PriceItemsController.prototype, "delete", null);
PriceItemsController = __decorate([
    (0, common_1.Controller)('price-items'),
    __metadata("design:paramtypes", [price_items_service_1.PriceItemsService])
], PriceItemsController);
exports.PriceItemsController = PriceItemsController;
//# sourceMappingURL=price_items.controller.js.map