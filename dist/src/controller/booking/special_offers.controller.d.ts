import { SpecialOffersService } from 'src/service/booking/special_offers.service';
export declare class SpecialOffersController {
    private specialOfferservice;
    constructor(specialOfferservice: SpecialOffersService);
    findall(): Promise<any>;
    findGuestSO(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: any): Promise<any>;
    update(params: any, body: any): Promise<any>;
    remove(params: any): Promise<any>;
}
