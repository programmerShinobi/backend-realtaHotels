import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from 'src/dto/payment/bank.dto';
export declare class BankController {
    private bankService;
    constructor(bankService: BankService);
    findByFilter(filter: any): Promise<any>;
    updateBank(code: string, body: BankDto): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    insertBank(body: BankDto): Promise<{
        result: any;
        message: string;
        status: import("@nestjs/common").HttpStatus;
    } | {
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    deleteBank(code: string): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
