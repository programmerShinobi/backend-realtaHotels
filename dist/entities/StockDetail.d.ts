import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { Stocks } from "./Stocks";
export declare class StockDetail {
    stodId: number;
    stodBarcodeNumber: string | null;
    stodStatus: string | null;
    stodNotes: string | null;
    stodFaciId: number | null;
    stodPohe: PurchaseOrderHeader;
    stodStock: Stocks;
}
