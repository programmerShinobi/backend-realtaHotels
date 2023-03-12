import { HttpStatus } from '@nestjs/common';
import { UserAccounts } from 'entities/UserAccounts';
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { Repository } from 'typeorm';
export declare class UserAccountsService {
    private UserAccountsRepository;
    constructor(UserAccountsRepository: Repository<UserAccounts>);
    find(query?: string): Promise<{
        result: any;
        message: string;
        status: HttpStatus;
    }>;
    update(accountNumber: string, dataToUpdate: UserAccountsDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    create(newData: UserAccountsDto): Promise<"Bank expiry date can't be null!" | {
        message: string;
        status: HttpStatus;
    }>;
    delete(accountNumber: string): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
