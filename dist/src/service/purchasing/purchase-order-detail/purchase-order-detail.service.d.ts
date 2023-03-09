import { Repository } from 'typeorm';
import { PurchaseOrderDetail } from 'entities/PurchaseOrderDetail';
export declare class PurchaseOrderDetailService {
    private podRepo;
    constructor(podRepo: Repository<PurchaseOrderDetail>);
    getAllDetails(): Promise<any>;
    editDetails(id: number, data: PurchaseOrderDetail): Promise<any>;
}
