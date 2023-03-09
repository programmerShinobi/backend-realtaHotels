import { PurchaseOrderDetailService } from 'src/service/purchasing/purchase-order-detail/purchase-order-detail.service';
export declare class PurchaseOrderDetailController {
    private podService;
    constructor(podService: PurchaseOrderDetailService);
    getAllPoDetails(): Promise<any>;
    editPoDetails(param: any, body: any): Promise<any>;
}
