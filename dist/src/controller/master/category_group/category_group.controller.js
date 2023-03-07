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
exports.CategoryGroupController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const category_group_service_1 = require("../../../service/master/category_group/category_group.service");
let CategoryGroupController = class CategoryGroupController {
    constructor(CategoryGroupRepository) {
        this.CategoryGroupRepository = CategoryGroupRepository;
    }
    async getAll() {
        const hasil = await this.CategoryGroupRepository.getAll();
        console.log({
            hasil: hasil
        });
        return hasil;
    }
    async getById(Param) {
        const hasil = await this.CategoryGroupRepository.getById(Param.id);
        console.log({ hasil: hasil });
        return hasil;
    }
    async create(data, file) {
        const addData = await this.CategoryGroupRepository.create({
            cagroName: data.cagroName,
            cagroDescription: data.cagroDescription,
            cagroType: data.cagroType,
            cagroIcon: file.originalname,
            cagroIconUrl: data.upload(file),
            cagroId: 0,
            facilities: [],
            policyCategoryGroups: []
        });
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(id, Body) {
        const hasil = await this.CategoryGroupRepository.edit(Body, id);
        console.log('Berhasil');
        return hasil;
    }
    async delete(Param) {
        const hasil = await this.CategoryGroupRepository.delete(Param);
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
], CategoryGroupController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryGroupController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('save'),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryGroupController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('edit/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryGroupController.prototype, "edit", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CategoryGroupController.prototype, "delete", null);
CategoryGroupController = __decorate([
    (0, common_1.Controller)('category-group'),
    __metadata("design:paramtypes", [category_group_service_1.CategoryGroupService])
], CategoryGroupController);
exports.CategoryGroupController = CategoryGroupController;
function upload(file) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=category_group.controller.js.map