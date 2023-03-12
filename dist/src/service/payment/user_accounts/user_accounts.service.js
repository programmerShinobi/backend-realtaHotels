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
exports.UserAccountsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserAccounts_1 = require("../../../../entities/UserAccounts");
const enums_1 = require("../../../lib/enums");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserAccountsService = class UserAccountsService {
    constructor(UserAccountsRepository) {
        this.UserAccountsRepository = UserAccountsRepository;
    }
    async find(query) {
        if (query) {
            return await this.UserAccountsRepository.query(query)
                .then((result) => {
                return {
                    result: result,
                    message: 'Fetch user accounts succeed! :)',
                    status: common_1.HttpStatus.OK,
                };
            })
                .catch((err) => {
                return {
                    result: [],
                    message: 'ERROR in fetching user accounts, ' + err,
                    status: common_1.HttpStatus.BAD_REQUEST,
                };
            });
        }
        return await this.UserAccountsRepository.query(`
      SELECT * FROM payment.user_payment_methods
      `)
            .then((result) => {
            return {
                result: result,
                message: 'Fetch user accounts succeed! :)',
                status: common_1.HttpStatus.OK,
            };
        })
            .catch((err) => {
            return {
                result: [],
                message: 'ERROR in fetching user accounts, ' + err,
                status: common_1.HttpStatus.BAD_REQUEST,
            };
        });
    }
    async update(accountNumber, dataToUpdate) {
        const salt = bcrypt.genSaltSync(10);
        const hashedKey = bcrypt.hashSync(dataToUpdate.securedKey, salt);
        const accountExists = await this.UserAccountsRepository.query(`
      SELECT * FROM payment.user_accounts
      WHERE usac_account_number = '${accountNumber}'
      `);
        if (accountExists) {
            return await this.UserAccountsRepository.update({ usacAccountNumber: accountNumber }, { usacSecuredKey: hashedKey })
                .then(() => {
                return {
                    message: `Account ${accountNumber} is successfully updated!`,
                    status: common_1.HttpStatus.OK,
                };
            })
                .catch((err) => {
                return {
                    message: `Failed to update account ${accountNumber}, ` + err,
                    status: common_1.HttpStatus.BAD_REQUEST,
                };
            });
        }
        else {
            return {
                message: `Account ${accountNumber} is not found!`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
    }
    async create(newData) {
        for (const data in newData) {
            if (newData[data] == '') {
                newData[data] = null;
            }
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedKey = bcrypt.hashSync(newData.securedKey, salt);
        if (!enums_1.AccountType.fintech.includes(newData.paymentName)) {
            if (newData.expMonth == null || newData.expYear == null) {
                return "Bank expiry date can't be null!";
            }
        }
        return await this.UserAccountsRepository.query(`CALL payment.InsertUserAccount($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [
            +newData.userId,
            newData.paymentType,
            newData.cardHolderName,
            hashedKey,
            newData.balance,
            newData.paymentName,
            newData.accountNumber,
            newData.expMonth,
            newData.expYear,
        ])
            .then(async () => {
            const allData = await this.UserAccountsRepository.query(`
            SELECT * FROM payment.user_payment_methods
            WHERE "userId" = ${+newData.userId}
            `);
            return {
                result: allData,
                message: `New ${newData.paymentName} account has been added!`,
                status: common_1.HttpStatus.CREATED,
            };
        })
            .catch((err) => {
            return {
                message: `ERROR creating new account: ` + err.message,
                status: common_1.HttpStatus.BAD_REQUEST,
            };
        });
    }
    async delete(accountNumber) {
        const accountExists = await this.UserAccountsRepository.query(`
      SELECT * FROM payment.user_accounts
      WHERE usac_account_number = '${accountNumber}'
      `);
        if (accountExists.length > 0) {
            return await this.UserAccountsRepository.query(`
        DELETE FROM payment.user_accounts
        WHERE usac_account_number = '${accountNumber}'
        `).then(() => {
                return {
                    message: `Account ${accountNumber} is successfully deleted!`,
                    status: common_1.HttpStatus.OK,
                };
            });
        }
        else {
            return {
                message: `Account ${accountNumber} is not found!`,
                status: common_1.HttpStatus.NOT_FOUND,
            };
        }
    }
};
UserAccountsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserAccounts_1.UserAccounts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserAccountsService);
exports.UserAccountsService = UserAccountsService;
//# sourceMappingURL=user_accounts.service.js.map