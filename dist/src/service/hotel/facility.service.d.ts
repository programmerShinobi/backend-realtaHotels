import { Repository } from 'typeorm';
import { Facilities } from 'entities/Facilities';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
interface dataFaci {
    faci_name: any;
    faci_description: any;
    faci_max_number: any;
    faci_measure_unit: any;
    faci_room_number: any;
    faci_startdate: any;
    faci_endate: any;
    faci_low_price: any;
    faci_hight_price: any;
    faci_rate_price: any;
    faci_discount: any;
    faci_tax_rate: any;
    faci_modified_date: any;
    faci_cagro_id: any;
    faci_hotel_id: any;
}
export declare class FacilityService {
    private repositoryFac;
    private repositoryFaph;
    constructor(repositoryFac: Repository<Facilities>, repositoryFaph: Repository<FacilityPriceHistory>);
    findAllFacility(): Promise<any>;
    findallFaciHotel(): Promise<any>;
    insertFacilityAndPriceHistory(data: Facilities): Promise<{
        result: any;
    }>;
    updateFacility(id: any, data: dataFaci): Promise<any>;
    findByNoRoom(faciRoomNumber: any): Promise<any>;
    findMaxRoomId(): Promise<any>;
    deleteFaci(id: any): Promise<any>;
}
export {};
