import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/payment/bank.dto';
import { PaginationOptions } from 'src/lib/types';
import { Repository } from 'typeorm';

type BankAccountwithPagination = PaginationOptions & Bank | any

@Injectable()
export class BankService {
    constructor(
        @InjectRepository(Bank)
        private BankRepository: Repository<Bank>,
    ) {}
    
    async find(query?: BankAccountwithPagination): Promise<any> {
        const page = query?.page || 1;
        const limit = query?.limit || 10
        const offset = (page - 1) * limit || 0

        const [data, total] = await this.BankRepository.createQueryBuilder('bank')
            .offset(offset)
            .limit(limit)
            .orderBy('bank.bankCode', 'ASC')
            .where('LOWER(bank.bankCode) LIKE LOWER(:keyword)', {
                keyword: `%${query?.keyword?.toLowerCase()}%`
            })
            .orWhere('LOWER(bank.bankName) LIKE LOWER(:keyword)', {
                keyword: `%${query?.keyword?.toLowerCase()}%`,
            })
            .getManyAndCount()
        
            return {
                page: +page,
                result: data,
                total: total,
                lastPage: Math.ceil(total/limit),
                message: data.length!==0 ? "Fetch bank data succeed! :-)" : "Data not found!",
                status: data.length!==0 ? HttpStatus.OK : HttpStatus.NOT_FOUND
            }
    }

    async update(code: string, dataToUpdate: BankDto) {
        // Check if bank exists.
        const bankExists = await this.BankRepository.findOneBy({
            bankCode: code
        })

        // Return error if bank is not exists, else updata bank by ID
        if (bankExists == null) {
            return {
                message: `ERROR deleting bank with code ${code}, bank not found`,
                status: HttpStatus.BAD_REQUEST
            };
        }
        
        return await this.BankRepository.update(
            // Criteria
            {
                bankCode: code,
            },
            dataToUpdate,
        )
            .then(() => {
                return {
                    message: `Bank with code ${code} is successfully updated!`,
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

    async insert(newData: BankDto) {
        // Check if bank exists, will return status code 404 if bank does not exists.
        const bankExists: any = await this.find({
            keyword: newData.bankCode
        })
        
        // If bank does not exists, proceed add new bank
        if (bankExists.status !== 200) {
            return await this.BankRepository.query(`CALL payment.InsertBank($1, $2)`, [
                newData.bankCode,
                newData.bankName,
            ])
                .then(async () => {
                    // Show newly inserted data
                    const newBank = await this.find({
                        keyword: newData.bankCode
                    })
                    return {
                        result: await newBank.result[0],
                        message: `Bank ${newData.bankName} has been added!`,
                        status: HttpStatus.OK
                    };
                })
        } else {
            return {
                message: `ERROR inserting bank data. Bank with code ${newData.bankCode} or name ${newData.bankName} exists.`,
                status: HttpStatus.BAD_REQUEST
            }
        }
    }

    async delete(code: string) {
        // Check if bank exists, will return null if bank does not exists.
        const bankExists = await this.BankRepository.findOneBy({
            bankCode: code
        })

        if (bankExists == null) {
            return {
                message: `ERROR deleting bank with code ${code}, bank not found`,
                status: HttpStatus.BAD_REQUEST
            };
        }

        return await this.BankRepository.delete({
            bankCode: code
        })
            .then(() => {
                return {
                    message: `Bank with code ${code} is successfully deleted!`,
                    status: HttpStatus.OK
                }
        });   
    }
}
