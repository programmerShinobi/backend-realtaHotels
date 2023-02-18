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
exports.RestoMenuPhotos = void 0;
const typeorm_1 = require("typeorm");
const RestoMenus_1 = require("./RestoMenus");
let RestoMenuPhotos = class RestoMenuPhotos {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "remp_id" }),
    __metadata("design:type", Number)
], RestoMenuPhotos.prototype, "rempId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "remp_thumbnail_filename",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], RestoMenuPhotos.prototype, "rempThumbnailFilename", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "remp_photo_filename",
        nullable: true,
        length: 50,
    }),
    __metadata("design:type", String)
], RestoMenuPhotos.prototype, "rempPhotoFilename", void 0);
__decorate([
    (0, typeorm_1.Column)("bit", { name: "remp_primary", nullable: true }),
    __metadata("design:type", String)
], RestoMenuPhotos.prototype, "rempPrimary", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "remp_url",
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], RestoMenuPhotos.prototype, "rempUrl", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RestoMenus_1.RestoMenus, (restoMenus) => restoMenus.restoMenuPhotos),
    (0, typeorm_1.JoinColumn)([{ name: "remp_reme_id", referencedColumnName: "remeId" }]),
    __metadata("design:type", RestoMenus_1.RestoMenus)
], RestoMenuPhotos.prototype, "rempReme", void 0);
RestoMenuPhotos = __decorate([
    (0, typeorm_1.Index)("pk_remp_id", ["rempId"], { unique: true }),
    (0, typeorm_1.Entity)("resto_menu_photos", { schema: "resto" })
], RestoMenuPhotos);
exports.RestoMenuPhotos = RestoMenuPhotos;
//# sourceMappingURL=RestoMenuPhotos.js.map