import { HotelService } from 'src/service/hotel/hotel.service';
import { Hotels } from 'entities/Hotels';
export declare class HotelController {
    private readonly hotelService;
    constructor(hotelService: HotelService);
    findAllHotel(): Promise<any>;
    findAddress(): Promise<any>;
    createHotel(data: Hotels): Promise<"failed" | {
        message: string;
        result: Hotels[];
    }>;
    updateHotel(id: any, body: any): Promise<"hotel dont updated" | "hotel updated">;
    deleteHotel(id: any): Promise<any>;
    findProcedure(): Promise<any>;
    findlastOrder(): Promise<any>;
    getInvoice(): Promise<any>;
}
