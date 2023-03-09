import { HttpStatus } from '@nestjs/common';
import { PaymentTransaction } from 'entities/PaymentTransaction';
import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { PaginationOptions } from 'src/lib/types';
import { Repository } from 'typeorm';
type TransactionWithPagination = PaginationOptions & PaymentTransactionDto;
export declare class TransactionService {
    private paymentTransactionRepository;
    constructor(paymentTransactionRepository: Repository<PaymentTransaction>);
    find(query?: TransactionWithPagination): Promise<{
        page: number;
        totalTrx: number;
        total: any;
        result: any;
        lastPage: number;
        message: string;
        status: HttpStatus;
    } | {
        result: any[];
        message: string;
        status: HttpStatus;
    }>;
    create(newTransaction: PaymentTransactionDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
export {};
