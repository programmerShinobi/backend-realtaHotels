import { FacilityService } from 'src/service/hotel/facility.service';
export declare class FacilityController {
    private readonly faciService;
    constructor(faciService: FacilityService);
    findAllFacility(): Promise<any>;
    findallFaciHotel(): Promise<any>;
    findMaxRoomId(): Promise<any>;
    insertFacilityAndPriceHistory(body: any): Promise<"failed" | {
        message: string;
        result: any;
    }>;
    updateFacility(id: any, body: any): Promise<any>;
    findByname(Params: any): Promise<any>;
    deleteFaci(id: any): Promise<any>;
}
