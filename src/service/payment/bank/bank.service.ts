import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/payment/bank.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
    constructor(
        @InjectRepository(Bank)
        private BankRepository: Repository<Bank>,
    ) {}

  // async find(id?: number) {
  //   if (id) {
  //     // Return bank with `where` clause
  //     return await this.BankRepository.findOneByOrFail({
  //       bankEntityId: id,
  //     })
  //       .then((result) => {
  //         return result;
  //       })
  //       .catch((err) => {
  //         return new HttpException(
  //           { error: `Bank with ID ${id} is not found!` },
  //           HttpStatus.NOT_FOUND,
  //           { cause: err },
  //         );
  //       });
  //   } else {
  //     // Return all bank record
  //     return await this.BankRepository.find()
  //       .then((result) => {
  //         return result;
  //       })
  //       .catch((err) => {
  //         return err;
  //       });
  //   }
  // }
    async find(query?: { page?: number; limit?: number}): Promise<any> {
        const page = query?.page || 1;
        const limit = query?.limit || 10
        const offset = (page - 1) * limit || 0

        const filter = Object.entries(query).filter(([key, value]) => key === "bankCode" || key === "bankName" || key === "bankId")
        
        const stringQuery = `
        SELECT * FROM payment.user_transactions
        `
        let condition = filter.length > 1 ? "WHERE " : ""
        const setting = `
        ORDER BY "timestamp" DESC
        OFFSET ${offset} LIMIT ${limit}
        `

        for (let [key, value] of filter) {
            filter.length == 0 ? "" :
                (filter.length > 1) ? condition += `LOWER("${key}") LIKE LOWER('%${value}%') AND ` : 
                    condition += `WHERE LOWER("${key}") LIKE LOWER('%${value}%')`
        }
        // If condition is more than one, `AND` on the back is deleted.
        condition = filter.length > 1 ? condition.slice(0, -5) : condition
        
        return await this.BankRepository.query(stringQuery + condition + setting)
            .then(result => {
                return {
                    data: result,
                    total: result.length,
                    message: "Fetch bank data succeed! :-)",
                    status: HttpStatus.OK
                }
            })
            .catch(err => {
                return {
                    status: HttpStatus.BAD_REQUEST,
                    message: "Error in fetching bank data, " + err.message
                }
            })
    }

    async findByBankCode(code: string): Promise<any> {
        return await this.BankRepository.findOneByOrFail({
            bankCode: code,
        })
        .then((result) => {
            return result;
        })
        .catch((err) => {
            return err;
        });
    }

    async update(id: number, dataToUpdate: BankDto) {
        // Check if bank exists.
        const bankExists: any = await this.BankRepository.findOneByOrFail({
            bankEntityId: id
        })

        // Return error if bank is not exists, else updata bank by ID
        // if (bankExists instanceof HttpException) {
        //     return bankExists.getResponse();
        if (bankExists.status == 200) {
            return bankExists.message;
        } else {
            return await this.BankRepository.update(
                // Criteria
                {
                    bankEntityId: id,
                },
                dataToUpdate,
            )
            .then(() => {
                return {
                    message: `Bank with ID ${id} is successfully updated!`,
                    status: HttpStatus.OK
                }
            })
            .catch((err: any) => {
                return {
                    message: `There's an error in updating bank data, ` + err,
                    status: HttpStatus.BAD_REQUEST
                }
            });
        }
    }

    async insert(newData: BankDto) {
        return await this.BankRepository.query(`CALL payment.InsertBank($1, $2)`, [
            newData.bankCode,
            newData.bankName,
        ])
        .then(() => {
            return {
                data:
                    // this.find({ bankCode: newData.bankCode}),
                    this.findByBankCode(newData.bankCode.toString()),
                message: `Bank ${newData.bankName} has been added!`,
                status: HttpStatus.OK
            };
        })
        .catch((err) => {
            return {
                message: "There's an error in adding new Bank data, " + err,
                status: HttpStatus.OK
            };
        });
    }

    async delete(id: number) {
        // Check if bank exists.
        const bankExists = await this.BankRepository.findOneByOrFail({
            bankEntityId: id
        })

        // Return error if bank is not exists, else delete bank by ID
        if (bankExists instanceof HttpException) {
            return bankExists.getResponse();
        } else {
            return await this.BankRepository.delete(id).then(() => {
                return `Bank with ID ${id} is successfully deleted!`;
            });
        }
    }
}
