import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { UserAccountAuthService } from 'src/service/payment/auth/auth.service';
export declare class UserAccountAuthController {
    private userAccountAuthService;
    constructor(userAccountAuthService: UserAccountAuthService);
    checkSecuredKey(body: UserAccountsDto): Promise<any>;
}
