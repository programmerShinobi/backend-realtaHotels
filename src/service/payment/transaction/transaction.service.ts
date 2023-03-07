import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTransaction } from 'entities/PaymentTransaction';
import e from 'express';
import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService { 
    constructor(
        @InjectRepository(PaymentTransaction)
        private paymentTransactionRepository: Repository<PaymentTransaction>
    ) {}

    async find(query?: {
        page?: number;
        limit?: number;
        transactionType?: string;
        transactionNumber?: string;
    }) {
        const page = query?.page || 1
        const limit = query?.limit || 10 // data shown per page
        const offset = (page - 1) * limit || 0 // data skipped
        
        // Filtering keyword for `transactionType` and `transactionNumber`
        // If query params includes `transactionType` or `transactionNumber` params,
        const filter = Object.entries(query).filter(([key, value]) => key === "transactionType" || key === "transactionNumber" || key === "userFullName")
        
        const stringQuery = `
        SELECT * FROM payment.user_transactions
        `
        let condition = filter.length > 1 ? "WHERE " : ""
        const setting = `
        ORDER BY "timestamp" DESC
        OFFSET ${offset} LIMIT ${limit}
        `

        for (let [key, value] of filter) {
            filter.length == 0 ? "" :
                (filter.length > 1) ? condition += `LOWER("${key}") LIKE LOWER('%${value}%') AND ` : 
                    condition += `WHERE LOWER("${key}") LIKE LOWER('%${value}%')`
        }
        // If condition is more than one, `AND` on the back is deleted.
        condition = filter.length > 1 ? condition.slice(0, -5) : condition

        // console.log (stringQuery + condition + setting)
        return await this.paymentTransactionRepository.query(stringQuery + condition + setting)
            .then(result => {
                return {
                    data: result,
                    total: result.length,
                    message: "Fetch transaction data succeed! :-)"
                }
            })
            .catch(err => {
                return {
                    message: "Error in fetching transaction data, " + err.message
                }
            })
    }

    async create(newTransaction: PaymentTransactionDto) {
        console.log(newTransaction)
        // Set data to null if no data inserted and became an empty string.
		for (const data in newTransaction) {
			if (newTransaction[data] == '') {
				newTransaction[data] = null
			}
        }
        
        // Non-booking
        if (newTransaction.orderNumber == null) {
            return await this.paymentTransactionRepository.query(
                `CALL payment.InsertPaymentTransaction($1, $2, $3, $4, $5)`,
                [
                    newTransaction.userId,
                    newTransaction.transactionType,
                    newTransaction.amount,
                    newTransaction.sourceNumber,
                    newTransaction.targetNumber,
                ]
            ).then(() => {
                return this.paymentTransactionRepository.find()
            })
            .catch((err) => {
                return "There's an error in adding new payment transaction, " + err
            })
        
        // Orders
        } else {
            return await this.paymentTransactionRepository.query(
                `CALL payment.InsertBookingPaymentTransaction($1, $2, $3, $4, $5)`,
                [
                    newTransaction.userId, 
                    newTransaction.orderNumber,
                    newTransaction.amount,
                    0,
                    0,
                ])
                .then(() => {
                    return this.paymentTransactionRepository.find()
                })
                .catch((err) => {
                    return "There's an error in adding new booking payment transaction, " + err
                })
        }
    }
}