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
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const offset = (page - 1) * limit || 0;
        const filter = Object.entries(query).filter(([key, value]) => key === "bankCode" || key === "bankName" || key === "bankId");
        const stringQuery = `
        SELECT * FROM payment.user_transactions
        `;
        let condition = filter.length > 1 ? "WHERE " : "";
        const setting = `
        ORDER BY "timestamp" DESC
        OFFSET ${offset} LIMIT ${limit}
        `;
        for (let [key, value] of filter) {
            filter.length == 0 ? "" :
                (filter.length > 1) ? condition += `LOWER("${key}") LIKE LOWER('%${value}%') AND ` :
                    condition += `WHERE LOWER("${key}") LIKE LOWER('%${value}%')`;
        }
        condition = filter.length > 1 ? condition.slice(0, -5) : condition;
        return await this.BankRepository.query(stringQuery + condition + setting)
            .then(result => {
            return {
                data: result,
                total: result.length,
                message: "Fetch bank data succeed! :-)",
                status: common_1.HttpStatus.OK
            };
        })
            .catch(err => {
            return {
                status: common_1.HttpStatus.BAD_REQUEST,
                message: "Error in fetching bank data, " + err.message
            };
        });
    }
    async findByBankCode(code) {
        return await this.BankRepository.findOneByOrFail({
            bankCode: code,
        })
            .then((result) => {
            return result;
        })
            .catch((err) => {
            return err;
        });
    }
    async update(id, dataToUpdate) {
        const bankExists = await this.BankRepository.findOneByOrFail({
            bankEntityId: id
        });
        if (bankExists.status == 200) {
            return bankExists.message;
        }
        else {
            return await this.BankRepository.update({
                bankEntityId: id,
            }, dataToUpdate)
                .then(() => {
                return {
                    message: `Bank with ID ${id} is successfully updated!`,
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
    }
    async insert(newData) {
        return await this.BankRepository.query(`CALL payment.InsertBank($1, $2)`, [
            newData.bankCode,
            newData.bankName,
        ])
            .then(() => {
            return {
                data: this.findByBankCode(newData.bankCode.toString()),
                message: `Bank ${newData.bankName} has been added!`,
                status: common_1.HttpStatus.OK
            };
        })
            .catch((err) => {
            return {
                message: "There's an error in adding new Bank data, " + err,
                status: common_1.HttpStatus.OK
            };
        });
    }
    async delete(id) {
        const bankExists = await this.BankRepository.findOneByOrFail({
            bankEntityId: id
        });
        if (bankExists instanceof common_1.HttpException) {
            return bankExists.getResponse();
        }
        else {
            return await this.BankRepository.delete(id).then(() => {
                return `Bank with ID ${id} is successfully deleted!`;
            });
        }
    }
};
BankService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Bank_1.Bank)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankService);
exports.BankService = BankService;
//# sourceMappingURL=bank.service.js.map