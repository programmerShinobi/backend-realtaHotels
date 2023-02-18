import { SpecialOfferCoupons } from "./SpecialOfferCoupons";
export declare class SpecialOffers {
    spofId: number;
    spofName: string | null;
    spofDescription: string | null;
    spofType: string | null;
    spofDiscount: string | null;
    spofStartDate: Date | null;
    spofEndDate: Date | null;
    spofMinQty: number | null;
    spofMaxQty: number | null;
    spofModifiedDate: Date | null;
    specialOfferCoupons: SpecialOfferCoupons[];
}
