import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentTransaction } from 'entities/PaymentTransaction';
import e from 'express';
import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { PaginationOptions } from 'src/lib/types';
import { Repository } from 'typeorm';

type TransactionWithPagination = PaginationOptions & PaymentTransactionDto

@Injectable()
export class TransactionService { 
    constructor(
        @InjectRepository(PaymentTransaction)
        private paymentTransactionRepository: Repository<PaymentTransaction>
    ) {}

    async find(query?: TransactionWithPagination) {
        const page = query?.page || 1
        const limit = query?.limit || 100 // data shown per page
        const offset = (page - 1) * limit || 0 // data skipped
        const totalData = await this.paymentTransactionRepository.count()
        
        // Filtering keyword for `transactionType` and `transactionNumber`
        // If query params includes `transactionType` or `transactionNumber` params,
        const filter = Object.entries(query).filter(
            ([key, value]) =>
                key === "transactionType" ||
                key === "transactionNumber" ||
                key === "userFullName" ||
                key === "orderNumber" ||
                key === "userId" ||
                key === "timestamp"
        )
        
        const stringQuery = `
        SELECT * FROM payment.user_transactions
        `
        let condition = filter.length > 1 ? "WHERE " : ""
        const setting = `
        ORDER BY "timestamp" DESC
        OFFSET ${offset} LIMIT ${limit}
        `

        for (let [key, value] of filter) {
            const regex = /^.*days$/
            const comparator = Number.isInteger(+value) ? '=' :
                regex.test(value) ? '>=':'ILIKE'
            let searchValue = Number.isInteger(+value) ?
                value
                : (regex.test(value) ?
                    `NOW() - interval '${value}'`
                    : `'%${value}%' `)

            filter.length == 0 ? "" :
                (filter.length > 1) ? condition += `"${key}" ${comparator} ${searchValue} OR ` : 
                    condition += `WHERE "${key}" ${comparator} ${searchValue}`
        }
        
        // If condition is more than one, `OR` on the back is deleted.
        condition = filter.length > 1 ? condition.slice(0, -5) : condition

        console.log( stringQuery + condition + setting)
        return await this.paymentTransactionRepository.query(stringQuery + condition + setting)
            .then(result => {
                return {
                    page: page,
                    totalTrx: totalData,
                    total: result.length,
                    result: result,
                    lastPage: Math.ceil(totalData/limit),
                    message: result.length !== 0 ? "Fetch transaction data succeed! :-)" : "Transaction data is not found!",
                    status: result.length!==0 ? HttpStatus.OK : HttpStatus.NOT_FOUND
                }
            })
            .catch(err => {
                return {
                    result: [],
                    message: "Error in fetching transaction data, " + err.message,
                    status: HttpStatus.BAD_REQUEST
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
                ])
                .then(() => {
                    return {
                        message: `Transaction ${newTransaction.transactionType} has been added!`,
                        status: HttpStatus.OK
                    }
                })
                .catch((err) => {
                    return {
                        message: "ERROR adding new transaction data, " + err.message,
                        status: HttpStatus.BAD_REQUEST
                    }
                })
        
        // Orders
        } else {
            return await this.paymentTransactionRepository.query(
                `CALL payment.InsertBookingPaymentTransaction($1, $2, $3, $4, $5)`,
                [
                    newTransaction.userId, 
                    newTransaction.orderNumber,
                    newTransaction.amount,
                    newTransaction.sourceNumber,
                    newTransaction.targetNumber,
                ])
                .then(async () => {
                    const newTransactionData = await this.find({
                        orderNumber: newTransaction.orderNumber
                    })
                    return {
                        result: newTransactionData.result,
                        message: `Transaction for order number ${newTransaction.orderNumber} has been added!`,
                        status: HttpStatus.OK
                    }
                })
                .catch((err) => {
                    return {
                        message: "There's an error in adding new booking payment transaction, " + err,
                        status: HttpStatus.BAD_REQUEST
                    }
                })
        }
    }
}