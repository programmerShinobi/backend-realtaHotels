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
exports.UserbonuspointsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserBonusPoints_1 = require("../../../../entities/UserBonusPoints");
const typeorm_2 = require("typeorm");
let UserbonuspointsService = class UserbonuspointsService {
    constructor(userBonusRepository) {
        this.userBonusRepository = userBonusRepository;
    }
    async findAllUserBonusPoints() {
        return await this.userBonusRepository.find({
            order: { ubpoId: -1 }
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
    async findAllJoinUserBonusPoints() {
        return await this.userBonusRepository.find({
            order: { ubpoId: -1 },
            relations: { ubpoUser: true }
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
    async findOneUserBonusPoints(id) {
        return await this.userBonusRepository.findOne({
            where: { ubpoId: id },
            relations: { ubpoUser: true }
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                resutls: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async createUserBonusPoints(data) {
        const now = new Date();
        return await this.userBonusRepository.save({
            ubpoTotalPoints: data.ubpoTotalPoints,
            ubpoBonusType: data.ubpoBonusType,
            ubpoCreatedOn: now
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
};
UserbonuspointsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserBonusPoints_1.UserBonusPoints)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserbonuspointsService);
exports.UserbonuspointsService = UserbonuspointsService;
//# sourceMappingURL=userbonuspoints.service.js.map