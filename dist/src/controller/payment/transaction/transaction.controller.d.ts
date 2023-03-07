import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';
export declare class TransactionController {
    private paymentTransactionService;
    constructor(paymentTransactionService: TransactionService);
    findAllTransactions(): Promise<{
        data: any;
        total: any;
        message: string;
    } | {
        message: string;
    }>;
    findByFilter(filter: {
        page?: number;
        limit?: number;
        transactionType?: string;
        transactionNumber?: string;
    }): Promise<{
        data: any;
        total: any;
        message: string;
    } | {
        message: string;
    }>;
    createTransaction(body: PaymentTransactionDto): Promise<string | import("../../../../entities/PaymentTransaction").PaymentTransaction[]>;
}
