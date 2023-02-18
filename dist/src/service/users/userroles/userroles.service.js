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
exports.UserrolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const UserRoles_1 = require("../../../../entities/UserRoles");
const bad_request_exception_1 = require("@nestjs/common/exceptions/bad-request.exception");
let UserrolesService = class UserrolesService {
    constructor(userRolesRepository) {
        this.userRolesRepository = userRolesRepository;
    }
    async findAllUserRoles() {
        return await this.userRolesRepository.find({
            order: { usroUserId: -1 }
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not fuound');
            }
            return {
                messsage: 'Data displayed successfully',
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async findAllJoinUserRoles() {
        return this.userRolesRepository.find({
            order: { usroUserId: -1 },
            relations: ['usroRole', 'usroUser']
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
    async findOneUserRoles(id) {
        return this.userRolesRepository.findOne({
            where: { usroUserId: id },
            relations: ['usroRole', 'usroUser']
        }).then((result) => {
            if (!result) {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: 'Data displayed successfully',
                results: result
            };
        });
    }
    async createUserRoles(data) {
        return this.userRolesRepository.save({
            usroUserId: data.usroUserId,
            usroRole: data.usroRole,
        }).then((result) => {
            if (!result) {
                throw new bad_request_exception_1.BadRequestException('Data insert failed');
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
    async updateUserRoles(id, data) {
        return this.userRolesRepository.update(id, {
            usroUserId: data.usroUserId,
            usroRole: data.usroRole
        }).then(async (result) => {
            if (!result.affected) {
                throw new bad_request_exception_1.BadRequestException('Data update failed');
            }
            let updateData = await this.userRolesRepository.findOne({
                where: { usroUserId: id },
                relations: ['usroRole', 'usroUser']
            });
            return {
                message: 'Data updated successfully',
                results: updateData
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async deleteUserRoles(id) {
        return await this.userRolesRepository.delete(id)
            .then((result) => {
            if (!result.affected) {
                throw new bad_request_exception_1.BadRequestException('Data delete failed');
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
UserrolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserRoles_1.UserRoles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserrolesService);
exports.UserrolesService = UserrolesService;
//# sourceMappingURL=userroles.service.js.map