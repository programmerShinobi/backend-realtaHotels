import { HttpException } from '@nestjs/common';
import { UserAccounts } from 'entities/UserAccounts';
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { Repository } from 'typeorm';
export declare class UserAccountsService {
    private UserAccountsRepository;
    constructor(UserAccountsRepository: Repository<UserAccounts>);
    find(query?: string): Promise<any>;
    update(accountNumber: string, dataToUpdate: UserAccountsDto): Promise<string | HttpException>;
    create(newData: UserAccountsDto): Promise<any>;
    delete(accountNumber: string): Promise<string | HttpException>;
}
