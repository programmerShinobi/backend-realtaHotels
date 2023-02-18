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
exports.UsermembersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserMembers_1 = require("../../../../entities/UserMembers");
const typeorm_2 = require("typeorm");
let UsermembersService = class UsermembersService {
    constructor(userMembersRepository) {
        this.userMembersRepository = userMembersRepository;
    }
    async findAllUserMembers() {
        return await this.userMembersRepository.find({
            order: { usmeUserId: -1 }
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
    async findAllJoinUserMembers() {
        return await this.userMembersRepository.find({
            order: { usmeUserId: -1 },
            relations: ['usmeUser', 'usmeMembName']
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
    async findOneUserMembers(id) {
        return await this.userMembersRepository.findOne({
            where: { usmeUserId: id },
            relations: ['usmeUser', 'usmeMembName']
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displyed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async createUserMembers(data) {
        const now = new Date();
        return await this.userMembersRepository.save({
            usmeUserId: data.usmeUserId,
            usmeMembName: data.usmeMembName,
            usmePromoteDate: now,
            usmePoints: data.usmePoints,
            usmeType: data.usmeType
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
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
    async updateUserMembers(id, data) {
        const now = new Date();
        return await this.userMembersRepository.update(id, {
            usmeUserId: data.usmeUserId,
            usmeMembName: data.usmeMembName,
            usmePromoteDate: now,
            usmePoints: data.usmePoints,
            usmeType: data.usmeType
        }).then((result) => {
            if (!result) {
                throw new common_1.BadRequestException('Data insert failed');
            }
            return this.userMembersRepository.find({
                relations: ['usmeUser', 'usmeMembName'],
                where: { usmeUserId: id }
            }).then((resultUpdated) => {
                if (!resultUpdated) {
                    throw new common_1.NotFoundException('Data not found updated');
                }
                return {
                    message: 'Data updated successfully',
                    results: resultUpdated
                };
            }).catch((err) => {
                return {
                    message: err.message,
                    error: err.name
                };
            });
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async deleteUserMembers(id) {
        return await this.userMembersRepository.delete(id)
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
};
UsermembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserMembers_1.UserMembers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsermembersService);
exports.UsermembersService = UsermembersService;
//# sourceMappingURL=usermembers.service.js.map