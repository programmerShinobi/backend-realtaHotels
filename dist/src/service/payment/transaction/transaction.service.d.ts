import { PaymentTransaction } from 'entities/PaymentTransaction';
import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { Repository } from 'typeorm';
export declare class TransactionService {
    private paymentTransactionRepository;
    constructor(paymentTransactionRepository: Repository<PaymentTransaction>);
    find(query?: {
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
    create(newTransaction: PaymentTransactionDto): Promise<string | PaymentTransaction[]>;
}
