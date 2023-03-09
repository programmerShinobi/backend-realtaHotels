import { Repository } from 'typeorm';
import { PurchaseOrderHeader } from 'entities/PurchaseOrderHeader';
export declare class PurchaseOrderHeaderService {
    private pohRepo;
    constructor(pohRepo: Repository<PurchaseOrderHeader>);
    getAllPo(): Promise<any>;
    getPoForPurchaseOrder(): Promise<any>;
    insertPO(data: any): Promise<any>;
    editStatus(id: number, data: PurchaseOrderHeader): Promise<any>;
}
