import { BookingOrders } from "./BookingOrders";
import { Facilities } from "./Facilities";
import { HotelReviews } from "./HotelReviews";
import { Address } from "./Address";
export declare class Hotels {
    hotelId: number;
    hotelName: string | null;
    hotelDescription: string | null;
    hotelRatingStar: number | null;
    hotelPhonenumber: string | null;
    hotelModifiedDate: Date | null;
    bookingOrders: BookingOrders[];
    facilities: Facilities[];
    hotelReviews: HotelReviews[];
    hotelAddr: Address;
}
