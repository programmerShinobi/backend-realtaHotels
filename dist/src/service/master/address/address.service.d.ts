import { Repository } from 'typeorm';
import { Address } from 'entities/Address';
export declare class AddressService {
    private AddressRepository;
    query(arg0: string): void;
    constructor(AddressRepository: Repository<Address>);
    getAll(): Promise<any>;
    getById(addrId: number): Promise<any>;
    create(data: Address): Promise<any>;
    edit(data: Address, _addrId: number): Promise<{
        message: string;
    }>;
    delete(addrId: number): Promise<import("typeorm").DeleteResult>;
}
