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
exports.SpecialOffersController = void 0;
const common_1 = require("@nestjs/common");
const special_offers_service_1 = require("../../service/booking/special_offers.service");
let SpecialOffersController = class SpecialOffersController {
    constructor(specialOfferservice) {
        this.specialOfferservice = specialOfferservice;
    }
    findall() {
        return this.specialOfferservice.findAllSpecialOffers();
    }
    findGuestSO() {
        return this.specialOfferservice.findGuestSpecialOffers();
    }
    findbyid(id) {
        return this.specialOfferservice.findOneSpecialOffers(id);
    }
    create(body) {
        return this.specialOfferservice.createSpecialOffers(body);
    }
    update(params, body) {
        return this.specialOfferservice.updateSpecialOffers(params.id, body);
    }
    remove(params) {
        return this.specialOfferservice.deleteSpecialOffers(params.id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "findall", null);
__decorate([
    (0, common_1.Get)('guest'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "findGuestSO", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "findbyid", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SpecialOffersController.prototype, "remove", null);
SpecialOffersController = __decorate([
    (0, common_1.Controller)('specialoffers'),
    __metadata("design:paramtypes", [special_offers_service_1.SpecialOffersService])
], SpecialOffersController);
exports.SpecialOffersController = SpecialOffersController;
//# sourceMappingURL=special_offers.controller.js.map