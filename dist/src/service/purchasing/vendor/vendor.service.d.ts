import { Repository } from 'typeorm';
import { Vendor } from 'entities/Vendor';
export declare class VendorService {
    private vendorRepo;
    constructor(vendorRepo: Repository<Vendor>);
    getAllVendor(): Promise<any>;
    createVendor(data: Vendor): Promise<any>;
    getVendorById(id: number): Promise<any>;
    updateVendor(id: number, data: Vendor): Promise<any>;
    deleteVendor(id: number): Promise<any>;
}
