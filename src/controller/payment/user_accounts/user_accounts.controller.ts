/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { Body, Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { UserAccountsService } from 'src/service/payment/user_accounts/user_accounts.service';
import { AccountType } from 'src/lib/enums';

@Controller('user-accounts')
export class UserAccountsController {
	constructor(private userAccountsService: UserAccountsService) { }

	@Get()
	async findAllAccounts() {
		return await this.userAccountsService.find();
	}
	
	@Get('filter?')
	// Find by user ID
	async findByFilter(
		@Query()
		filter: {
				userId?: number;
				userName?: string;
				accountNumber?: number;
				accountType?: string;
				// bankName?: string;
		},
		) {
		switch (true) {
			// Filter by user ID
			case filter.userId !== undefined:
				return await this.userAccountsService.find(
					`
					SELECT *
					FROM payment.user_payment_methods
					WHERE "userId" = ${filter.userId}
					`,
				);
			// Filter by user's full name
			case filter.userName != undefined:
				return await this.userAccountsService.find(
					`
					SELECT *
					FROM payment.user_payment_methods
					WHERE "fullName" ILIKE '%${filter.userName}%'
					`
				)
			// Filter by user's account number
			case filter.accountNumber != undefined:
				return await this.userAccountsService.find(
					`
					SELECT *
					FROM payment.user_payment_methods
					WHERE "accountNumber" = '${filter.accountNumber}'
					`,
				);
			// // Filter by 
			// case filter.bankName != undefined:
			// 	return await this.userAccountsService.findByQuery(
			// 		`
			// 		SELECT *
			// 		FROM payment.user_payment_methods
			// 		WHERE paymentType <> '${AccountType.dompet}'
			// 		`
			// 	)
		}
	}

	@Post('add')
	async addAccount(@Body() body: UserAccountsDto) {
		return await this.userAccountsService.create(body)
	}

	@Put('/:accountNumber')
	async updateAccount(@Param('accountNumber') accountNumber: any, @Body() body: any) {
		return await this.userAccountsService.update(accountNumber, body)
		
	}

	@Delete('/:accountNumber')
	async deleteAccouunt(@Param('accountNumber') accountNumber: any) {
		return await this.userAccountsService.delete(accountNumber)
	}

}
