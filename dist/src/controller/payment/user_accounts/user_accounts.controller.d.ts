import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
export declare class UserAccountsController {
    private userAccountsService;
    constructor(userAccountsService: UserAccountsService);
    findAllAccounts(): Promise<{
        result: any;
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    findByFilter(filter: {
        userId?: number;
        userName?: string;
        accountNumber?: number;
        accountType?: string;
    }): Promise<{
        result: any;
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    addAccount(body: UserAccountsDto): Promise<"Bank expiry date can't be null!" | {
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    updateAccount(accountNumber: any, body: any): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
    deleteAccouunt(accountNumber: any): Promise<{
        message: string;
        status: import("@nestjs/common").HttpStatus;
    }>;
}
