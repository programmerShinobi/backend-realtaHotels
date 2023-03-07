import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
export declare class UserAccountsController {
    private userAccountsService;
    constructor(userAccountsService: UserAccountsService);
    findAllAccounts(): Promise<any>;
    findByFilter(filter: {
        userId?: number;
        userName?: string;
        accountNumber?: number;
        accountType?: string;
    }): Promise<any>;
    addAccount(body: UserAccountsDto): Promise<any>;
    updateAccount(accountNumber: any, body: any): Promise<string | import("@nestjs/common").HttpException>;
    deleteAccouunt(accountNumber: any): Promise<string | import("@nestjs/common").HttpException>;
}
