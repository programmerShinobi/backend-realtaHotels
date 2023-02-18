import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
export declare class Vendor {
    vendorId: number;
    vendorName: string | null;
    vendorActive: number | null;
    vendorPriority: number | null;
    vendorRegisterDate: Date | null;
    vendorWeburi: string | null;
    vendorModifiedDate: Date | null;
    purchaseOrderHeaders: PurchaseOrderHeader[];
}
