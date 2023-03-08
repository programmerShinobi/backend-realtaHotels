import { HotelReviewService } from 'src/service/hotel/hotel_review.service';
import { HotelReviews } from 'entities/HotelReviews';
export declare class HotelReviewController {
    private readonly hotelReviewService;
    constructor(hotelReviewService: HotelReviewService);
    findAllHotelReview(): Promise<any>;
    createHotel(data: HotelReviews): Promise<"failed insert to hotels" | "success insert to hotel">;
    updateHotel(id: string, body: any): Promise<"dont updated" | "updated">;
    findByname(Params: any): Promise<any>;
    getProcedureHore(): Promise<any>;
}
