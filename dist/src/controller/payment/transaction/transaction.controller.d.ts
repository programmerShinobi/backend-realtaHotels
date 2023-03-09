import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';
export declare class TransactionController {
    private paymentTransactionService;
    constructor(paymentTransactionService: TransactionService);
    findByFilter(filter: any): Promise<{
        page: number;
        totalTrx: number;
        total: any;
        result: any;
        lastPage: number;
        message: string;
        status: import("@nestjs/common").HttpStatus;
    } | {
        result: any[];
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    createTransaction(body: PaymentTransactionDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
