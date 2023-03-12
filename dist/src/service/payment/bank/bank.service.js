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
exports.BankService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Bank_1 = require("../../../../entities/Bank");
const typeorm_2 = require("typeorm");
let BankService = class BankService {
    constructor(BankRepository) {
        this.BankRepository = BankRepository;
    }
    async find(query) {
        var _a, _b;
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const offset = (page - 1) * limit || 0;
        const [data, total] = await this.BankRepository.createQueryBuilder('bank')
            .offset(offset)
            .limit(limit)
            .orderBy('bank.bankCode', 'ASC')
            .where('LOWER(bank.bankCode) LIKE LOWER(:keyword)', {
            keyword: `%${(_a = query === null || query === void 0 ? void 0 : query.keyword) === null || _a === void 0 ? void 0 : _a.toLowerCase()}%`
        })
            .orWhere('LOWER(bank.bankName) LIKE LOWER(:keyword)', {
            keyword: `%${(_b = query === null || query === void 0 ? void 0 : query.keyword) === null || _b === void 0 ? void 0 : _b.toLowerCase()}%`,
        })
            .getManyAndCount();
        return {
            page: +page,
            result: data,
            total: total,
            lastPage: Math.ceil(total / limit),
            message: data.length !== 0 ? "Fetch bank data succeed! :-)" : "Data not found!",
            status: data.length !== 0 ? common_1.HttpStatus.OK : common_1.HttpStatus.NOT_FOUND
        };
    }
    async update(code, dataToUpdate) {
        const bankExists = await this.BankRepository.findOneBy({
            bankCode: code
        });
        if (bankExists == null) {
            return {
                message: `ERROR deleting bank with code ${code}, bank not found`,
                status: common_1.HttpStatus.BAD_REQUEST
            };
        }
        return await this.BankRepository.update({
            bankCode: code,
        }, dataToUpdate)
            .then(() => {
            return {
                message: `Bank with code ${code} is successfully updated!`,
                status: common_1.HttpStatus.OK
            };
        })
            .catch((err) => {
            return {
                message: `There's an error in updating bank data, ` + err,
                status: common_1.HttpStatus.BAD_REQUEST
            };
        });
    }
    async insert(newData) {
        const bankExists = await this.find({
            keyword: newData.bankCode
        });
        if (bankExists.status !== 200) {
            return await this.BankRepository.query(`CALL payment.InsertBank($1, $2)`, [
                newData.bankCode,
                newData.bankName,
            ])
                .then(async () => {
                const newBank = await this.find({
                    keyword: newData.bankCode
                });
                return {
                    result: await newBank.result[0],
                    message: `Bank ${newData.bankName} has been added!`,
                    status: common_1.HttpStatus.OK
                };
            });
        }
        else {
            return {
                message: `ERROR inserting bank data. Bank with code ${newData.bankCode} or name ${newData.bankName} exists.`,
                status: common_1.HttpStatus.BAD_REQUEST
            };
        }
    }
    async delete(code) {
        const bankExists = await this.BankRepository.findOneBy({
            bankCode: code
        });
        if (bankExists == null) {
            return {
                message: `ERROR deleting bank with code ${code}, bank not found`,
                status: common_1.HttpStatus.BAD_REQUEST
            };
        }
        return await this.BankRepository.delete({
            bankCode: code
        })
            .then(() => {
            return {
                message: `Bank with code ${code} is successfully deleted!`,
                status: common_1.HttpStatus.OK
            };
        });
    }
};
BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Bank_1.Bank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map