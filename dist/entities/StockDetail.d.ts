import { Facilities } from "./Facilities";
import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { Stocks } from "./Stocks";
export declare class StockDetail {
    stodId: number;
    stodBarcodeNumber: string | null;
    stodStatus: number | null;
    stodNotes: string | null;
    stodFaci: Facilities;
    stodPohe: PurchaseOrderHeader;
    stodStock: Stocks;
}
