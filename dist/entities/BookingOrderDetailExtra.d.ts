import { PriceItems } from "./PriceItems";
import { BookingOrderDetail } from "./BookingOrderDetail";
export declare class BookingOrderDetailExtra {
    boexId: number;
    boexPrice: string | null;
    boexQty: number | null;
    boexSubtotal: string | null;
    boexMeasureUnit: string | null;
    boexPrit: PriceItems;
    boexBorde: BookingOrderDetail;
}
