import { FacilityPriceHistoryService } from 'src/service/hotel/facility_price_history.service';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
export declare class FacilityPriceHistoryController {
    private readonly faphService;
    constructor(faphService: FacilityPriceHistoryService);
    findAllHotelReview(): Promise<any>;
    createHotel(data: FacilityPriceHistory): Promise<"failed insert to hotels" | "success insert to hotel">;
    updateHotel(id: string, body: any): Promise<"dont updated" | "updated">;
    findByname(Params: any): Promise<any>;
}
