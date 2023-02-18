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
exports.UserpasswordService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserPassword_1 = require("../../../../entities/UserPassword");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserpasswordService = class UserpasswordService {
    constructor(userPasswordRepository) {
        this.userPasswordRepository = userPasswordRepository;
    }
    async findAllUserPassword() {
        return this.userPasswordRepository.find({
            order: { uspaUserId: -1 }
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
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
    async findAllJoinUserPassword() {
        return await this.userPasswordRepository.find({
            order: { uspaUserId: -1 },
            relations: { uspaUser: true }
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
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
    async findOneUserPassword(id) {
        return await this.userPasswordRepository.findOne({
            where: { uspaUserId: id },
            relations: { uspaUser: true }
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
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
    async createUserPassword(data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.uspaPasswordhash, salt);
        return await this.userPasswordRepository.save({
            uspaPasswordhash: hashedPassword,
            uspaPasswordsalt: 'bcrypt'
        }).then((result) => {
            if (!result) {
                throw new common_1.BadRequestException('Data insert failed');
            }
            return {
                message: 'Data inserted successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async updateUserPassword(id, data) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(data.uspaPasswordhash, salt);
        return this.userPasswordRepository.update(id, {
            uspaPasswordhash: hashedPassword,
            uspaPasswordsalt: 'bcrypt'
        }).then(async (result) => {
            if (!result) {
                throw new common_1.BadRequestException('Data update failed');
            }
            const updateData = await this.userPasswordRepository.findOneBy({ uspaUserId: id });
            return {
                message: 'Data updated successfully',
                results: updateData
            };
        }).catch((err) => {
            return {
                message: err.message,
                name: err.name
            };
        });
    }
    async deleteUserPassword(id) {
        return await this.userPasswordRepository.delete(id)
            .then((result) => {
            if (!result.affected) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: `Data deleted with ID : ${id} successfully`
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async findPassword(id) {
        return await this.userPasswordRepository.findOne({
            where: { uspaUserId: id }
        }).then((result) => {
            return result.uspaPasswordhash;
        });
    }
};
UserpasswordService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserPassword_1.UserPassword)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserpasswordService);
exports.UserpasswordService = UserpasswordService;
//# sourceMappingURL=userpassword.service.js.map