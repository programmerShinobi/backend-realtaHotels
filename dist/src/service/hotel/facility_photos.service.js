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
exports.FacilityPhotosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const FacilityPhotos_1 = require("../../../entities/FacilityPhotos");
const storage_1 = require("firebase/storage");
const app_1 = require("firebase/app");
let FacilityPhotosService = class FacilityPhotosService {
    constructor(repositoryFacPhotos) {
        this.repositoryFacPhotos = repositoryFacPhotos;
    }
    async findAllFaciPhotos() {
        return await this.repositoryFacPhotos.query('select * from hotel.facility_photos');
    }
    async createFaciPhotos(data) {
        let fapho_primary;
        (function (fapho_primary) {
            fapho_primary["notPrimary"] = "0";
            fapho_primary["primary"] = "1";
        })(fapho_primary || (fapho_primary = {}));
        let nP = fapho_primary.notPrimary;
        let p = fapho_primary.primary;
        if (data.faphoPrimary == nP || data.faphoPrimary == p) {
            return await this.repositoryFacPhotos.save(this.repositoryFacPhotos.create(data));
        }
        else {
            console.log('error');
        }
    }
    async updateFacilityPhotos(id, data) {
        return this.repositoryFacPhotos
            .createQueryBuilder()
            .update()
            .set({
            faphoPhotoFilename: data.faphoPhotoFilename,
        })
            .where('faphoId = :id', { id })
            .execute();
    }
    async storeFileInfo(file, body) {
        const fileInfo = new FacilityPhotos_1.FacilityPhotos();
        fileInfo.faphoUrl = `http://localhost:3005/facility-photos/public/upload/${file.filename}`;
        fileInfo.faphoPhotoFilename = file.filename;
        fileInfo.faphoModifieldDate = new Date();
        fileInfo.faphoThumbnailFilename = `tumb ${file.originalname}`;
        fileInfo.faphoFaci = body.faphoFaci;
        fileInfo.faphoPrimary = body.faphoPrimary;
        await this.repositoryFacPhotos.save(fileInfo);
        const res = await this.repositoryFacPhotos.query('select * from hotel.facility_photos');
        return { result: res };
    }
    async UploadFirebase(file, body) {
        const firebaseConfig = {
            apiKey: 'AIzaSyCEmZE2W1VOTZpPVrndbpAvVpAJnLfE_V0',
            authDomain: 'hotelrealta.firebaseapp.com',
            projectId: 'hotelrealta',
            storageBucket: 'hotelrealta.appspot.com',
            messagingSenderId: '481044855652',
            appId: '1:481044855652:web:1441df251b64fd62c71871',
            measurementId: 'G-1FZ6YKHLV9',
        };
        const app = (0, app_1.initializeApp)(firebaseConfig);
        const storage = (0, storage_1.getStorage)(app);
        const promises = file.map(async (data, index) => {
            const storageRef = (0, storage_1.ref)(storage, `image/${data.originalname}`);
            let primary = '0';
            if (index == 0) {
                primary = '1';
            }
            const metadata = {
                contentType: 'image/jpeg',
                name: data.originalname,
            };
            await (0, storage_1.uploadBytes)(storageRef, data.buffer, metadata);
            const url = await (0, storage_1.getDownloadURL)(storageRef);
            const fileInfo = new FacilityPhotos_1.FacilityPhotos();
            fileInfo.faphoUrl = url;
            fileInfo.faphoPhotoFilename = data.originalname;
            fileInfo.faphoModifieldDate = new Date();
            fileInfo.faphoThumbnailFilename = `tumb ${data.originalname}`;
            fileInfo.faphoFaci = body.faphoFaci;
            fileInfo.faphoPrimary = primary;
            return this.repositoryFacPhotos.save(fileInfo);
        });
        await Promise.all(promises);
        const res = await this.repositoryFacPhotos.query('select * from hotel.facility_photos');
        return { result: res };
    }
};
FacilityPhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(FacilityPhotos_1.FacilityPhotos)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], FacilityPhotosService);
exports.FacilityPhotosService = FacilityPhotosService;
//# sourceMappingURL=facility_photos.service.js.map