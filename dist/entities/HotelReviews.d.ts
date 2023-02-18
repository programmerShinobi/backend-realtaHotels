import { Hotels } from "./Hotels";
import { Users } from "./Users";
export declare class HotelReviews {
    horeId: number;
    horeUserReview: string | null;
    horeRating: string | null;
    horeCreatedOn: Date | null;
    horeHotel: Hotels;
    horeUser: Users;
}
