import { Repository } from 'typeorm';
import { SpecialOffers } from 'entities/SpecialOffers';
export declare class SpecialOffersService {
    private specialOffersRepository;
    constructor(specialOffersRepository: Repository<SpecialOffers>);
    findAllSpecialOffers(): Promise<any>;
    findGuestSpecialOffers(): Promise<any>;
    findOneSpecialOffers(spofId: number): Promise<any>;
    createSpecialOffers(data: SpecialOffers): Promise<any>;
    updateSpecialOffers(spof_id: number, data: SpecialOffers): Promise<any>;
    deleteSpecialOffers(spofId: number): Promise<any>;
}
