import { VendorProductService } from 'src/service/purchasing/vendor-product/vendor-product.service';
export declare class VendorProductController {
    private venproService;
    constructor(venproService: VendorProductService);
    getVenproById(): Promise<any>;
    insertVenpro(param: any, body: any): Promise<any>;
}
