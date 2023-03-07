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
exports.TransactionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const PaymentTransaction_1 = require("../../../../entities/PaymentTransaction");
const typeorm_2 = require("typeorm");
let TransactionService = class TransactionService {
    constructor(paymentTransactionRepository) {
        this.paymentTransactionRepository = paymentTransactionRepository;
    }
    async find(query) {
        const page = (query === null || query === void 0 ? void 0 : query.page) || 1;
        const limit = (query === null || query === void 0 ? void 0 : query.limit) || 10;
        const offset = (page - 1) * limit || 0;
        const filter = Object.entries(query).filter(([key, value]) => key === "transactionType" || key === "transactionNumber" || key === "userFullName");
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
        return await this.paymentTransactionRepository.query(stringQuery + condition + setting)
            .then(result => {
            return {
                data: result,
                total: result.length,
                message: "Fetch transaction data succeed! :-)"
            };
        })
            .catch(err => {
            return {
                message: "Error in fetching transaction data, " + err.message
            };
        });
    }
    async create(newTransaction) {
        console.log(newTransaction);
        for (const data in newTransaction) {
            if (newTransaction[data] == '') {
                newTransaction[data] = null;
            }
        }
        if (newTransaction.orderNumber == null) {
            return await this.paymentTransactionRepository.query(`CALL payment.InsertPaymentTransaction($1, $2, $3, $4, $5)`, [
                newTransaction.userId,
                newTransaction.transactionType,
                newTransaction.amount,
                newTransaction.sourceNumber,
                newTransaction.targetNumber,
            ]).then(() => {
                return this.paymentTransactionRepository.find();
            })
                .catch((err) => {
                return "There's an error in adding new payment transaction, " + err;
            });
        }
        else {
            return await this.paymentTransactionRepository.query(`CALL payment.InsertBookingPaymentTransaction($1, $2, $3, $4, $5)`, [
                newTransaction.userId,
                newTransaction.orderNumber,
                newTransaction.amount,
                0,
                0,
            ])
                .then(() => {
                return this.paymentTransactionRepository.find();
            })
                .catch((err) => {
                return "There's an error in adding new booking payment transaction, " + err;
            });
        }
    }
};
TransactionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(PaymentTransaction_1.PaymentTransaction)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransactionService);
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map