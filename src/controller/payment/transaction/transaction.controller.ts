import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PaymentTransactionDto } from 'src/dto/payment/paymentTransaction.dto';
import { TransactionService } from 'src/service/payment/transaction/transaction.service';

@Controller('transaction')
export class TransactionController {
    constructor(private paymentTransactionService: TransactionService) { }

    @Get('filter?')
    async findByFilter(@Query() filter: any) {
        return await this.paymentTransactionService.find(filter);
    }

    @Post('new')
    async createTransaction(@Body() body: PaymentTransactionDto) {
        return await this.paymentTransactionService.create(body);
    }
}
