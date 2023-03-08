import { Repository } from 'typeorm';
import { Hotels } from 'entities/Hotels';
export declare class HotelService {
    private hotelsRepository;
    constructor(hotelsRepository: Repository<Hotels>);
    findAllHotel(): Promise<any>;
    findAddress(): Promise<any>;
    createHotel(data: Hotels): Promise<{
        result: Hotels[];
    }>;
    updateHotel(id: any, data: Hotels): Promise<any>;
    deleteHotels(id: any): Promise<any>;
    findProcedure(): Promise<any>;
    findLastOrder(): Promise<any>;
    getInvoice(): Promise<any>;
}
