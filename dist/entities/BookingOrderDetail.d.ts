import { Facilities } from "./Facilities";
import { BookingOrders } from "./BookingOrders";
import { BookingOrderDetailExtra } from "./BookingOrderDetailExtra";
import { SpecialOfferCoupons } from "./SpecialOfferCoupons";
import { UserBreakfeast } from "./UserBreakfeast";
export declare class BookingOrderDetail {
    bordeId: number;
    bordeCheckin: Date | null;
    bordeCheckout: Date | null;
    bordeAdults: number | null;
    bordeKids: number | null;
    bordePrice: string | null;
    bordeExtra: string | null;
    bordeDiscount: string | null;
    bordeTax: string | null;
    bordeSubtotal: string | null;
    bordeFaci: Facilities;
    borderBoor: BookingOrders;
    bookingOrderDetailExtras: BookingOrderDetailExtra[];
    specialOfferCoupons: SpecialOfferCoupons[];
    userBreakfeasts: UserBreakfeast[];
}
