import { IsOptional, IsNotEmpty } from 'class-validator';

export class PaymentTransactionDto {
    @IsNotEmpty()
    userId: number;
    
    @IsOptional()
    orderNumber: string;

    @IsOptional()
    paymentType: string;

    @IsOptional()
    transactionType: string;
    
    @IsNotEmpty()
    amount: number;

    @IsNotEmpty()
    sourceNumber: string;

    @IsNotEmpty()
    targetNumber: string;
}