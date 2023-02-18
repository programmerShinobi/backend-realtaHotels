import { PurchaseOrderDetail } from "./PurchaseOrderDetail";
import { Employee } from "./Employee";
import { Vendor } from "./Vendor";
import { StockDetail } from "./StockDetail";
export declare class PurchaseOrderHeader {
    poheId: number;
    poheNumber: string | null;
    poheStatus: number | null;
    poheOrderDate: Date | null;
    poheSubtotal: string | null;
    poheTax: string | null;
    poheTotalAmount: string | null;
    poheRefund: string | null;
    poheArrivalDate: Date | null;
    pohePayTipe: string | null;
    purchaseOrderDetails: PurchaseOrderDetail[];
    poheEmp: Employee;
    poheVendor: Vendor;
    stockDetails: StockDetail[];
}
