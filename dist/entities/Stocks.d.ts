import { PurchaseOrderDetail } from "./PurchaseOrderDetail";
import { StockDetail } from "./StockDetail";
import { StockPhoto } from "./StockPhoto";
import { VendorProduct } from "./VendorProduct";
export declare class Stocks {
    stockId: number;
    stockName: string;
    stockDescription: string | null;
    stockQuantity: number;
    stockReorderPoint: number | null;
    stockUsed: number | null;
    stockScrap: number | null;
    stockSize: string | null;
    stockColor: string | null;
    stockModifiedDate: Date | null;
    purchaseOrderDetails: PurchaseOrderDetail[];
    stockDetails: StockDetail[];
    stockPhotos: StockPhoto[];
    vendorProducts: VendorProduct[];
}
