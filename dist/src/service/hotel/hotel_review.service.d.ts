import { Repository } from 'typeorm';
import { HotelReviews } from 'entities/HotelReviews';
export declare class HotelReviewService {
    private repositoryHotelReview;
    constructor(repositoryHotelReview: Repository<HotelReviews>);
    findAllHotelReview(): Promise<any>;
    findProsedurHore(): Promise<any>;
    createHotelReview(data: HotelReviews): Promise<HotelReviews>;
    updateHotelReview(id: string, data: HotelReviews): Promise<any>;
    findByUser(id: any): Promise<any>;
}
