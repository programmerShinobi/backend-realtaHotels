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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const storage_1 = require("firebase/storage");
const app_1 = require("firebase/app");
const date = new Date();
let UploadService = class UploadService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async uploadFile(files) {
        const firebaseConfig = {
            apiKey: 'AIzaSyBjVOpJ9AURYiYJewt3OPg0IJs3vc6rgco',
            authDomain: 'hotel-realta.firebaseapp.com',
            projectId: 'hotel-realta',
            storageBucket: 'hotel-realta.appspot.com',
            messagingSenderId: '1034304538174',
            appId: '1:1034304538174:web:8a7da6a85152bc93d0b36f',
            measurementId: 'G-95CZN3EK2S',
        };
        const app = (0, app_1.initializeApp)(firebaseConfig);
        const storage = (0, storage_1.getStorage)(app);
        let urlImage = [];
        let originalName = [];
        files.map(async (value, key) => {
            const path = require('path');
            const extension = path.parse(value.originalname).ext;
            var timestamp = new Date().toISOString().replace(/[-:.]/g, '');
            var random = ('' + Math.random()).substring(2, 8);
            var originalname = timestamp + random + extension;
            const storageRef = (0, storage_1.ref)(storage, `images/${originalname}`);
            const metatype = {
                contentType: value.mimetype,
                name: value.originalname,
            };
            await (0, storage_1.uploadBytes)(storageRef, value.buffer, metatype);
            originalName.push(originalname);
        });
        originalName.map(async (val) => {
            const storageRef = (0, storage_1.ref)(storage, `images/${val}`);
            const url = await (0, storage_1.getDownloadURL)(storageRef);
            urlImage.push(url);
        });
        console.log(urlImage);
    }
};
UploadService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], UploadService);
exports.UploadService = UploadService;
//# sourceMappingURL=upload.service.js.map