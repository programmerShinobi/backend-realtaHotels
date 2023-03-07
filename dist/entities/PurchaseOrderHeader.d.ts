import { PurchaseOrderDetail } from "./PurchaseOrderDetail";
import { Vendor } from "./Vendor";
import { StockDetail } from "./StockDetail";
export declare class PurchaseOrderHeader {
    poheId: number;
    poheNumber: string;
    poheStatus: number;
    poheOrderDate: string;
    poheSubtotal: string | null;
    poheTax: string | null;
    poheTotalAmount: string | null;
    poheRefund: string | null;
    poheArrivalDate: Date | null;
    pohePayType: string | null;
    poheEmpId: string | null;
    purchaseOrderDetails: PurchaseOrderDetail[];
    poheVendor: Vendor;
    stockDetails: StockDetail[];
}
