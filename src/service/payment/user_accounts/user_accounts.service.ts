import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAccounts } from 'entities/UserAccounts';
import { UserAccountsDto } from 'src/dto/payment/userAccounts.dto';
import { AccountType } from 'src/lib/enums';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserAccountsService {
  constructor(
    @InjectRepository(UserAccounts)
    private UserAccountsRepository: Repository<UserAccounts>,
  ) {}

  async find(query?: string) {
    if (query) {
      return await this.UserAccountsRepository.query(query)
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return new HttpException(
            { error: `Data with query ${query} is not found!` },
            HttpStatus.NOT_FOUND,
            { cause: err },
          );
        });
    }

    return await this.UserAccountsRepository.query(
      `
	  SELECT * FROM payment.user_payment_methods
	  `
	)
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async update(accountNumber: string, dataToUpdate: UserAccountsDto) {
    const salt = bcrypt.genSaltSync(10);
    const hashedKey = bcrypt.hashSync(dataToUpdate.securedKey, salt);

    const accountExists = await this.UserAccountsRepository.query(
      `
			SELECT * FROM payment.user_accounts
			WHERE usac_account_number = '${accountNumber}'
			`,
    );

    if (accountExists) {
      return await this.UserAccountsRepository.update(
        { usacAccountNumber: accountNumber },
        { usacSecuredKey: hashedKey },
      )
        .then(() => {
          return `Account ${accountNumber} is successfully updated!`;
        })
        .catch((err) => {
          return new HttpException(
            { error: `Failed to update account ${accountNumber}` },
            HttpStatus.BAD_REQUEST,
            { cause: err },
          );
        });
    } else {
      return new HttpException(
        { error: `Account ${accountNumber} is not found!` },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async create(newData: UserAccountsDto) {
    // Set data to null if no data inserted and became an empty string.
    for (const data in newData) {
      if (newData[data] == '') {
        newData[data] = null;
      }
    }

    // Hash PIN or CVV
    const salt = bcrypt.genSaltSync(10);
    const hashedKey = bcrypt.hashSync(newData.securedKey, salt);

    // Check account type, if payment type is bank
    if (!AccountType.fintech.includes(newData.paymentName)) {
      // Return an error if bank expiry date is null
      if (newData.expMonth == null || newData.expYear == null) {
        return "Bank expiry date can't be null!";
      }
    }

    // Insert into database using Stored Procedure
    return await this.UserAccountsRepository.query(
      `CALL payment.InsertUserAccount($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        +newData.userId,
        newData.paymentType,
        newData.cardHolderName,
        hashedKey,
        newData.balance,
        newData.paymentName,
        newData.accountNumber,
        newData.expMonth,
        newData.expYear,
      ],
    )
      .then(() => {
        return this.UserAccountsRepository.query(
          `SELECT * FROM payment.user_payment_methods WHERE "userId" = $1`,
          [newData.userId],
        );
      })
      .catch((err) => {
        return "There's an error in adding new account, " + err;
      });
  }

  async delete(accountNumber: string) {
    // Check if there's an account data with corresponding account number.
    const accountExists = await this.UserAccountsRepository.query(
      `
			SELECT * FROM payment.user_accounts
			WHERE usac_account_number = '${accountNumber}'
			`,
    );

    if (accountExists.length > 0) {
      return await this.UserAccountsRepository.query(
        `
				DELETE FROM payment.user_accounts
				WHERE usac_account_number = '${accountNumber}'
				`,
      ).then(() => {
        return `Account ${accountNumber} is successfully deleted!`;
      });
    } else {
      return new HttpException(
        { error: `Account ${accountNumber} is not found!` },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
