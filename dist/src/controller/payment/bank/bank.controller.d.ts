import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from 'src/dto/payment/bank.dto';
export declare class BankController {
    private bankService;
    constructor(bankService: BankService);
    findAllBank(): Promise<any>;
    findByFilter(filter: any): Promise<any>;
    updateBank(id: number, body: BankDto): Promise<any>;
    insertBank(body: BankDto): Promise<{
        data: Promise<any>;
        message: string;
        status: import("@nestjs/common").HttpStatus;
    } | {
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    deleteBank(id: number): Promise<string | object>;
}
