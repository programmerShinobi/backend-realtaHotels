import { Facilities } from "./Facilities";
import { Users } from "./Users";
export declare class FacilityPriceHistory {
    faphId: number;
    faphStartdate: Date | null;
    faphEnddate: Date | null;
    faphLowPrice: string | null;
    faphHighPrice: string | null;
    faphDiscount: string | null;
    faphTaxRate: string | null;
    faphModifiedDate: Date | null;
    faphFaci: Facilities;
    faphUser: Users;
}
