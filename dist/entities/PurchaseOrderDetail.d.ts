import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
export declare class PurchaseOrderDetail {
    podeId: number;
    podeOrderQty: number | null;
    podePrice: string | null;
    podeLineTotal: string | null;
    podeReceivedQty: string | null;
    podeRejectedQty: string | null;
    podeStockedQty: string | null;
    podeModifiedDate: Date | null;
    podePohe: PurchaseOrderHeader;
}
