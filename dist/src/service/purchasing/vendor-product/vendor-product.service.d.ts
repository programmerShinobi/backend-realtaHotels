import { VendorProduct } from 'entities/VendorProduct';
import { Repository } from 'typeorm';
export declare class VendorProductService {
    private venproRepo;
    constructor(venproRepo: Repository<VendorProduct>);
    getVenpro(): Promise<any>;
    insertVendorProduct(id: number, data: any): Promise<any>;
}
