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
exports.PurchaseOrderDetailController = void 0;
const common_1 = require("@nestjs/common");
const purchase_order_detail_service_1 = require("../../../service/purchasing/purchase-order-detail/purchase-order-detail.service");
let PurchaseOrderDetailController = class PurchaseOrderDetailController {
    constructor(podService) {
        this.podService = podService;
    }
    getAllPoDetails() {
        return this.podService.getAllDetails();
    }
    editPoDetails(param, body) {
        return this.podService.editDetails(param.id, body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailController.prototype, "getAllPoDetails", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PurchaseOrderDetailController.prototype, "editPoDetails", null);
PurchaseOrderDetailController = __decorate([
    (0, common_1.Controller)('purchase-order-detail'),
    __metadata("design:paramtypes", [purchase_order_detail_service_1.PurchaseOrderDetailService])
], PurchaseOrderDetailController);
exports.PurchaseOrderDetailController = PurchaseOrderDetailController;
//# sourceMappingURL=purchase-order-detail.controller.js.map