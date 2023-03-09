import { HttpStatus } from '@nestjs/common';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/payment/bank.dto';
import { PaginationOptions } from 'src/lib/types';
import { Repository } from 'typeorm';
type BankAccountwithPagination = PaginationOptions & Bank | any;
export declare class BankService {
    private BankRepository;
    constructor(BankRepository: Repository<Bank>);
    find(query?: BankAccountwithPagination): Promise<any>;
    update(code: string, dataToUpdate: BankDto): Promise<{
        message: string;
        status: HttpStatus;
    }>;
    insert(newData: BankDto): Promise<{
        result: any;
        message: string;
        status: HttpStatus;
    } | {
        message: string;
        status: HttpStatus;
    }>;
    delete(code: string): Promise<{
        message: string;
        status: HttpStatus;
    }>;
}
export {};
