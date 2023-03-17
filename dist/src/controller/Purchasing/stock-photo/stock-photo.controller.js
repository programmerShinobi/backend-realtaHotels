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
exports.StockPhotoController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const path_1 = require("path");
const saveImage_1 = require("../../../imageHelper/saveImage");
const stock_photo_service_1 = require("../../../service/purchasing/stock-photo/stock-photo.service");
let StockPhotoController = class StockPhotoController {
    constructor(stockPhotoService) {
        this.stockPhotoService = stockPhotoService;
    }
    getAllStockPhoto() {
        return this.stockPhotoService.getAllStockPhoto();
    }
    insertPhoto(file, body) {
        const fileName = file === null || file === void 0 ? void 0 : file.filename;
        if (!fileName)
            return { error: 'File Must Be jpg. , .jpeg, .png' };
        else
            return this.stockPhotoService.insertStockPhoto(file, body);
    }
    getPhoto(fileName, res) {
        return res.sendFile(fileName, { root: (0, path_1.join)('image') });
    }
    getDashboardPhoto() {
        return this.stockPhotoService.getStockPhotoForDesktop();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockPhotoController.prototype, "getAllStockPhoto", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('sphoUrl', saveImage_1.saveImageToStorage)),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], StockPhotoController.prototype, "insertPhoto", null);
__decorate([
    (0, common_1.Get)('image/:fileName'),
    __param(0, (0, common_1.Param)('fileName')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StockPhotoController.prototype, "getPhoto", null);
__decorate([
    (0, common_1.Get)('dashboard'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockPhotoController.prototype, "getDashboardPhoto", null);
StockPhotoController = __decorate([
    (0, common_1.Controller)('stock-photo'),
    __metadata("design:paramtypes", [stock_photo_service_1.StockPhotoService])
], StockPhotoController);
exports.StockPhotoController = StockPhotoController;
//# sourceMappingURL=stock-photo.controller.js.map