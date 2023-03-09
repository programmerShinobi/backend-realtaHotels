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
exports.VendorProductController = void 0;
const common_1 = require("@nestjs/common");
const vendor_product_service_1 = require("../../../service/purchasing/vendor-product/vendor-product.service");
let VendorProductController = class VendorProductController {
    constructor(venproService) {
        this.venproService = venproService;
    }
    getVenproById() {
        return this.venproService.getVenpro();
    }
    insertVenpro(param, body) {
        return this.venproService.insertVendorProduct(param.id, body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VendorProductController.prototype, "getVenproById", null);
__decorate([
    (0, common_1.Post)('addProduct/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], VendorProductController.prototype, "insertVenpro", null);
VendorProductController = __decorate([
    (0, common_1.Controller)('vendor-product'),
    __metadata("design:paramtypes", [vendor_product_service_1.VendorProductService])
], VendorProductController);
exports.VendorProductController = VendorProductController;
//# sourceMappingURL=vendor-product.controller.js.map