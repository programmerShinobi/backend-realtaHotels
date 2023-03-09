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
exports.PurchaseOrderHeaderController = void 0;
const common_1 = require("@nestjs/common");
const purchase_order_header_service_1 = require("../../../service/purchasing/purchase-order-header/purchase-order-header.service");
let PurchaseOrderHeaderController = class PurchaseOrderHeaderController {
    constructor(pohService) {
        this.pohService = pohService;
    }
    getAllOrder() {
        return this.pohService.getAllPo();
    }
    getPOForPurchaseOrder() {
        return this.pohService.getPoForPurchaseOrder();
    }
    updateStatus(param, body) {
        return this.pohService.editStatus(param.id, body);
    }
    insertOrder(Body) {
        return this.pohService.insertPO(Body);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseOrderHeaderController.prototype, "getAllOrder", null);
__decorate([
    (0, common_1.Get)('/purchasing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PurchaseOrderHeaderController.prototype, "getPOForPurchaseOrder", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PurchaseOrderHeaderController.prototype, "updateStatus", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PurchaseOrderHeaderController.prototype, "insertOrder", null);
PurchaseOrderHeaderController = __decorate([
    (0, common_1.Controller)('purchase-order-header'),
    __metadata("design:paramtypes", [purchase_order_header_service_1.PurchaseOrderHeaderService])
], PurchaseOrderHeaderController);
exports.PurchaseOrderHeaderController = PurchaseOrderHeaderController;
//# sourceMappingURL=purchase-order-header.controller.js.map