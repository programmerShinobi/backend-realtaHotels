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
exports.MembersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Members_1 = require("../../../../entities/Members");
let MembersService = class MembersService {
    constructor(MembersRepository) {
        this.MembersRepository = MembersRepository;
    }
    async getAll() {
        const ShowData = await this.MembersRepository.find();
        return ShowData;
    }
    async getById(membName) {
        const ShowDataId = await this.MembersRepository.findOne({
            where: {
                membName: membName
            }
        });
        return ShowDataId;
    }
    async create(data) {
        const addData = await this.MembersRepository.save({
            membName: data.membName,
            membDescription: data.membDescription
        });
        console.log(addData);
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData };
        }
        else {
            return { message: 'Data gagal ditambahkan' };
        }
    }
    async edit(data, _membName) {
        const editData = await this.MembersRepository.update({
            membName: _membName
        }, {
            membName: data.membName,
            membDescription: data.membDescription
        });
        console.log(editData);
        if (editData.affected) {
            return { message: 'Data berhasil di edit' };
        }
        else {
            return { message: 'Data gagal di edit' };
        }
    }
    async delete(membName) {
        const deleteData = await this.MembersRepository.delete({
            membName: membName
        });
        return deleteData;
    }
};
MembersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Members_1.Members)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MembersService);
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map