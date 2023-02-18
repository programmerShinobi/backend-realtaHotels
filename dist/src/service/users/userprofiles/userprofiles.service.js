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
exports.UserprofilesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserProfiles_1 = require("../../../../entities/UserProfiles");
const typeorm_2 = require("typeorm");
let UserprofilesService = class UserprofilesService {
    constructor(userProfilesRepository) {
        this.userProfilesRepository = userProfilesRepository;
    }
    async findAllUserProfiles() {
        return await this.userProfilesRepository.find({
            order: { usproId: -1 }
        }).then((result) => {
            if (!result) {
                return new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async updateUserPhotoProfiles(id, data) {
        return await this.userProfilesRepository.update(id, {
            usproPhoto: data.usproPhoto
        }).then(async (result) => {
            if (!result.affected) {
                throw new common_1.BadRequestException('Data update failed');
            }
            let dataUpdated = await this.userProfilesRepository.findOneBy({ usproId: id });
            return {
                message: 'Data updated successfully',
                results: dataUpdated
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
};
UserprofilesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserProfiles_1.UserProfiles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserprofilesService);
exports.UserprofilesService = UserprofilesService;
//# sourceMappingURL=userprofiles.service.js.map