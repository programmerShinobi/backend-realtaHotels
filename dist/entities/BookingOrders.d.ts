import { BookingOrderDetail } from "./BookingOrderDetail";
import { Hotels } from "./Hotels";
import { Users } from "./Users";
export declare class BookingOrders {
    boorId: number;
    boorOrderNumber: string | null;
    boorOrderDate: Date | null;
    boorArrivalDate: Date | null;
    boorTotalRoom: number | null;
    boorTotalGuest: number | null;
    boorDiscount: string | null;
    boorTotalTax: string | null;
    boorTotalAmount: string | null;
    boorDownPayment: string | null;
    boorPayType: string | null;
    boorIsPaid: string | null;
    boorType: string | null;
    boorCardnumber: string | null;
    boorMemberType: string | null;
    boorStatus: string | null;
    bookingOrderDetails: BookingOrderDetail[];
    boorHotel: Hotels;
    boorUser: Users;
}
