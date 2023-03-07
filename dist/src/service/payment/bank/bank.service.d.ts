import { HttpStatus } from '@nestjs/common';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/payment/bank.dto';
import { Repository } from 'typeorm';
export declare class BankService {
    private BankRepository;
    constructor(BankRepository: Repository<Bank>);
    find(query?: {
        page?: number;
        limit?: number;
    }): Promise<any>;
    findByBankCode(code: string): Promise<any>;
    update(id: number, dataToUpdate: BankDto): Promise<any>;
    insert(newData: BankDto): Promise<{
        data: Promise<any>;
        message: string;
        status: HttpStatus;
    } | {
        message: string;
        status: HttpStatus;
    }>;
    delete(id: number): Promise<string | object>;
}
