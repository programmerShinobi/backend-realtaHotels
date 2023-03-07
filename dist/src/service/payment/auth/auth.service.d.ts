import { UserAccounts } from 'entities/UserAccounts';
import { Repository } from 'typeorm';
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
export declare class UserAccountAuthService {
    private userAccountRepository;
    constructor(userAccountRepository: Repository<UserAccounts>);
    check(data: UserAccountsDto): Promise<any>;
}
