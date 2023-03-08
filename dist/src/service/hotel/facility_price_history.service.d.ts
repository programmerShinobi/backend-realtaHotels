import { Repository } from 'typeorm';
import { FacilityPriceHistory } from 'entities/FacilityPriceHistory';
export declare class FacilityPriceHistoryService {
    private fph;
    constructor(fph: Repository<FacilityPriceHistory>);
    findAllFacilitiPriceHistory(): Promise<any>;
    createFacilitiPriceHisty(data: FacilityPriceHistory): Promise<FacilityPriceHistory>;
    updateFaph(id: string, data: FacilityPriceHistory): Promise<any>;
    findByUser(faphId: any): Promise<any>;
}
