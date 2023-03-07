import { PurchaseOrderHeader } from "./PurchaseOrderHeader";
import { VendorProduct } from "./VendorProduct";
export declare class Vendor {
    vendorEntityId: number;
    vendorName: string | null;
    vendorActive: string | null;
    vendorPriority: string | null;
    vendorRegisterDate: Date | null;
    vendorWeburl: string | null;
    vendorModifiedDate: Date | null;
    purchaseOrderHeaders: PurchaseOrderHeader[];
    vendorProducts: VendorProduct[];
}
