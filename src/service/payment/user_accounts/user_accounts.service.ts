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
          return {
            result: result,
            message: 'Fetch user accounts succeed! :)',
            status: HttpStatus.OK,
          };
        })
        .catch((err) => {
          return {
            result: [],
            message: 'ERROR in fetching user accounts, ' + err,
            status: HttpStatus.BAD_REQUEST,
          };
        });
    }

    return await this.UserAccountsRepository.query(
      `
      SELECT * FROM payment.user_payment_methods
      `,
    )
      .then((result) => {
        return {
          result: result,
          message: 'Fetch user accounts succeed! :)',
          status: HttpStatus.OK,
        };
      })
      .catch((err) => {
        return {
          result: [],
          message: 'ERROR in fetching user accounts, ' + err,
          status: HttpStatus.BAD_REQUEST,
        };
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
          return {
            message: `Account ${accountNumber} is successfully updated!`,
            status: HttpStatus.OK,
          };
        })
        .catch((err) => {
          return {
            message: `Failed to update account ${accountNumber}, ` + err,
            status: HttpStatus.BAD_REQUEST,
          };
        });
    } else {
      return {
        message: `Account ${accountNumber} is not found!`,
        status: HttpStatus.NOT_FOUND,
      };
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
      .then(async () => {
          const allData = await this.UserAccountsRepository.query(
            `
            SELECT * FROM payment.user_payment_methods
            WHERE "userId" = ${+newData.userId}
            `
        );
        return {
          result: allData,
          message: `New ${newData.paymentName} account has been added!`,
          status: HttpStatus.CREATED,
        };
      })
      .catch((err) => {
        return {
          message: `ERROR creating new account: ` + err.message,
          status: HttpStatus.BAD_REQUEST,
        };
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
        // Return value if account exists.
        return {
          message: `Account ${accountNumber} is successfully deleted!`,
          status: HttpStatus.OK,
        };
      });

      // Return value if account does not exists.
    } else {
      return {
        message: `Account ${accountNumber} is not found!`,
        status: HttpStatus.NOT_FOUND,
      };
    }
  }
}
