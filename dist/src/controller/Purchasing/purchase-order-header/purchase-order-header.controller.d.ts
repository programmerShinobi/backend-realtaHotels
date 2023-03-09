import { PurchaseOrderHeaderService } from 'src/service/purchasing/purchase-order-header/purchase-order-header.service';
export declare class PurchaseOrderHeaderController {
    private pohService;
    constructor(pohService: PurchaseOrderHeaderService);
    getAllOrder(): Promise<any>;
    getPOForPurchaseOrder(): Promise<any>;
    updateStatus(param: any, body: any): Promise<any>;
    insertOrder(Body: any): Promise<any>;
}
