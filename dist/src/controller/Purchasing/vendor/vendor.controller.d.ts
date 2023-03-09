import { VendorService } from 'src/service/purchasing/vendor/vendor.service';
export declare class VendorController {
    private vendorService;
    constructor(vendorService: VendorService);
    getAllVendor(): Promise<any>;
    createVendor(body: any): Promise<any>;
    getId(param: any): Promise<any>;
    updateVendor(param: any, body: any): Promise<any>;
    deleteVendor(param: any): Promise<any>;
}
