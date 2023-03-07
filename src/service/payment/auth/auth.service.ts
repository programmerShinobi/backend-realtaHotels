import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccounts } from 'entities/UserAccounts';
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';

@Injectable()
export class UserAccountAuthService {
    constructor(
        @InjectRepository(UserAccounts)
        private userAccountRepository: Repository<UserAccounts>
    ) { }
    
    async check(data: UserAccountsDto): Promise<any> {
        const accountData = await this.userAccountRepository.query(
            `
            SELECT *
            FROM payment.user_payment_methods
            WHERE "accountNumber" = '${data.accountNumber}'
            `
        )
            .then(result => {return result[0]})
            .catch((error) => {
                return new HttpException(
                    { error: `Data with query ${data.userId} is not found!` },
                    HttpStatus.NOT_FOUND,
                    { cause: error },
                  )
            })
        
        const match = await bcrypt.compare(data.securedKey, accountData.securedKey)

        if (match) {
            return new HttpException(
                {
                    result: match,
                    message: "Correct!"
                },
                HttpStatus.OK)
        } else {
            return new HttpException(
                {
                    result: match,
                    message: "Nice try, but you have to try again."
                },
                HttpStatus.FORBIDDEN
            )
        }
    }
}
