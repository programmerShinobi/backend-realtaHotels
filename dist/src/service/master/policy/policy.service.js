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
exports.PolicyService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Policy_1 = require("../../../../entities/Policy");
let PolicyService = class PolicyService {
    constructor(PolicyRepository) {
        this.PolicyRepository = PolicyRepository;
    }
    async getAll() {
        const ShowData = await this.PolicyRepository.find({
            order: {
                poliId: "ASC"
            }
        });
        return ShowData;
    }
    async getById(poliId) {
        const ShowDataId = await this.PolicyRepository.findOne({
            where: {
                poliId: poliId
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.PolicyRepository.save({
            poliName: data.poliName,
            poliDescription: data.poliDescription
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, _poliId) {
        const editData = await this.PolicyRepository.update({
            poliId: _poliId
        }, {
            poliName: data.poliName,
            poliDescription: data.poliDescription
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit', editData };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(poliId) {
        const deleteData = await this.PolicyRepository.delete({
            poliId: poliId
        });
        if (deleteData) {
            return { message: "Data berhasil di hapus", deleteData };
        }
        return { message: "Data gagal di hapus", deleteData };
    }
};
PolicyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Policy_1.Policy)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PolicyService);
exports.PolicyService = PolicyService;
//# sourceMappingURL=policy.service.js.map