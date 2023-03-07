import { Body, Controller, Post } from '@nestjs/common';
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { UserAccountAuthService } from 'src/service/payment/auth/auth.service';

@Controller('user-accounts/auth')
export class UserAccountAuthController {
    constructor(
        private userAccountAuthService: UserAccountAuthService
    ) { }
    
    @Post()
    async checkSecuredKey(@Body() body: UserAccountsDto) {
        return this.userAccountAuthService.check(body)
    }
}