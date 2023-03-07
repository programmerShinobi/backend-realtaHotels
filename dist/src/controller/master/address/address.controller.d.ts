import { AddressService } from 'src/service/master/address/address.service';
export declare class AddressController {
    private readonly AddressRepository;
    constructor(AddressRepository: AddressService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
