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
exports.CategoryGroupService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const CategoryGroup_1 = require("../../../../entities/CategoryGroup");
const multer_1 = require("multer");
let CategoryGroupService = class CategoryGroupService {
    query(arg0) {
        throw new Error('Method not implemented.');
    }
    constructor(CategoryGroupRepository) {
        this.CategoryGroupRepository = CategoryGroupRepository;
    }
    async upload(file) {
        const fileName = `${new Date().getTime()}_${file.originalname}`;
        const fileDestination = 'public/upload';
        const storage = (0, multer_1.diskStorage)({
            destination: fileDestination,
            filename: (req, file, cb) => cb(null, fileName),
        });
        return new Promise((resolve, reject) => {
        });
    }
    async getAll() {
        const ShowData = await this.CategoryGroupRepository.find();
        return ShowData;
    }
    async getById(cagroId) {
        const ShowDataId = await this.CategoryGroupRepository.findOne({
            where: {
                cagroId: cagroId
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.CategoryGroupRepository.save({
            cagroName: data.cagroName,
            cagroDescription: data.cagroDescription,
            cagroType: data.cagroType,
            cagroIcon: data.cagroIcon,
            cagroIconUrl: data.cagroIconUrl
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, _cagroId) {
        const editData = await this.CategoryGroupRepository.update({
            cagroId: _cagroId
        }, {
            cagroName: data.cagroName,
            cagroDescription: data.cagroDescription,
            cagroType: data.cagroType,
            cagroIcon: data.cagroIcon,
            cagroIconUrl: data.cagroIconUrl
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(cagroId) {
        const deleteData = await this.CategoryGroupRepository.delete({
            cagroId: cagroId
        });
        return deleteData;
    }
};
CategoryGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(CategoryGroup_1.CategoryGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryGroupService);
exports.CategoryGroupService = CategoryGroupService;
function multer(_arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=category_group.service.js.map