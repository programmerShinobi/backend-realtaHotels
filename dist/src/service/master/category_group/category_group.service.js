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
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
let CategoryGroupService = class CategoryGroupService {
    constructor(CategoryGroupRepository) {
        this.CategoryGroupRepository = CategoryGroupRepository;
    }
    async getAll() {
        const ShowData = await this.CategoryGroupRepository.find({
            order: {
                cagroId: "ASC"
            }
        });
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
    async delete(cagroId) {
        const deleteData = await this.CategoryGroupRepository.delete({
            cagroId: cagroId
        });
        return deleteData;
    }
    async UploadFirebase(file, body) {
        const firebaseConfig = {
            apiKey: "AIzaSyA-uHJ66LjsINWEo4p6SWBvRdqrd0CRJtQ",
            authDomain: "hotelrealta-9cdce.firebaseapp.com",
            projectId: "hotelrealta-9cdce",
            storageBucket: "hotelrealta-9cdce.appspot.com",
            messagingSenderId: "530774046341",
            appId: "1:530774046341:web:99cbaebc6cd476efa8dbec",
            measurementId: "G-2NSYW59NVZ"
        };
        const app = (0, app_1.initializeApp)(firebaseConfig);
        const storage = (0, storage_1.getStorage)(app);
        const storageRef = (0, storage_1.ref)(storage, `image/${file.originalname}`);
        const metadata = {
            contentType: 'image/jpeg',
            name: file.originalname,
        };
        await (0, storage_1.uploadBytes)(storageRef, file.buffer, metadata);
        const url = await (0, storage_1.getDownloadURL)(storageRef);
        const fileInfo = new CategoryGroup_1.CategoryGroup();
        fileInfo.cagroIconUrl = url;
        fileInfo.cagroIcon = file.originalname;
        fileInfo.cagroName = body.cagroName;
        fileInfo.cagroType = body.cagroType;
        fileInfo.cagroDescription = body.cagroDescription;
        return this.CategoryGroupRepository.save(fileInfo);
    }
    async edit(data, _cagroId) {
        const editData = await this.CategoryGroupRepository.update({
            cagroId: _cagroId
        }, {
            cagroName: data.cagroName,
            cagroType: data.cagroType,
            cagroDescription: data.cagroDescription,
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
};
CategoryGroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(CategoryGroup_1.CategoryGroup)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoryGroupService);
exports.CategoryGroupService = CategoryGroupService;
//# sourceMappingURL=category_group.service.js.map