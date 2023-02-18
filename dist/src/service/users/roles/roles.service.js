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
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Roles_1 = require("../../../../entities/Roles");
let RolesService = class RolesService {
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async findAllRoles() {
        return await this.rolesRepository.find({
            order: { roleId: -1 }
        }).then((result) => {
            if (!result || result == '') {
                throw new common_1.NotFoundException('Data not found');
            }
            return {
                message: "Data displayed successfull",
                results: result
            };
        }).catch((err) => {
            return {
                message: err.message,
                error: err.name
            };
        });
    }
    async findAllJoinRoles() {
        return await this.rolesRepository.find({
            order: { roleId: -1 },
            relations: { userRoles: true }
        }).then((result) => {
            if (!result || result == '') {
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
    async findOneRoles(id) {
        return await this.rolesRepository.findOne({
            where: { roleId: id }
        }).then((result) => {
            if (!result || result == '') {
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
    async createRoles(data) {
        return await this.rolesRepository.save({
            roleName: data.roleName
        }).then((result) => {
            if (!result || result == '') {
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
    async updateRoles(id, data) {
        return await this.rolesRepository.update(id, {
            roleName: data.roleName
        }).then(async (result) => {
            if (!result.affected) {
                throw new common_1.BadRequestException('Data update failed');
            }
            let dataUpdated = await this.rolesRepository.findOneBy({ roleId: id });
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
    async deleteRoles(id) {
        return await this.rolesRepository.delete(id)
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
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Roles_1.Roles)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map