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
exports.UserAccountAuthService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const UserAccounts_1 = require("../../../../entities/UserAccounts");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
let UserAccountAuthService = class UserAccountAuthService {
    constructor(userAccountRepository) {
        this.userAccountRepository = userAccountRepository;
    }
    async check(data) {
        const accountData = await this.userAccountRepository.query(`
            SELECT *
            FROM payment.user_payment_methods
            WHERE "accountNumber" = '${data.accountNumber}'
            `)
            .then(result => { return result[0]; })
            .catch((error) => {
            return {
                message: `Account number ${data.accountNumber} is not found, ` + error,
                status: common_1.HttpStatus.NOT_FOUND
            };
        });
        const match = await bcrypt.compare(data.securedKey, accountData.securedKey);
        if (match) {
            return {
                result: match,
                message: "Correct!",
                status: common_1.HttpStatus.OK
            };
        }
        else {
            return {
                result: match,
                message: "Nice try, but you have to try again.",
                status: common_1.HttpStatus.NOT_ACCEPTABLE
            };
        }
    }
};
UserAccountAuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(UserAccounts_1.UserAccounts)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserAccountAuthService);
exports.UserAccountAuthService = UserAccountAuthService;
//# sourceMappingURL=auth.service.js.map