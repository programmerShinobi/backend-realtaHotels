import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { Stocks } from "./Stocks";
export declare class PurchaseOrderDetail {
    podeId: number;
    podeOrderQty: number;
    podePrice: string;
    podeLineTotal: string;
    podeReceivedQty: number | null;
    podeRejectedQty: number | null;
    podeStockedQty: number | null;
    podeModifiedDate: Date | null;
    podePohe: PurchaseOrderHeader;
    podeStock: Stocks;
}
