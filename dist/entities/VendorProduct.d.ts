import { Stocks } from "./Stocks";
import { Vendor } from "./Vendor";
export declare class VendorProduct {
    veproId: number;
    veproQtyStocked: number | null;
    veproQtyRemaining: number | null;
    veproPrice: string | null;
    veproStock: Stocks;
    veproVendor: Vendor;
}
