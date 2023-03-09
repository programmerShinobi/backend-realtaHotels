import { StockDetailService } from 'src/service/purchasing/stock-detail/stock-detail.service';
export declare class StockDetailController {
    private stodService;
    constructor(stodService: StockDetailService);
    getAllDetails(): Promise<any>;
    getAllFacilitiesAndId(): Promise<any>;
    updateStockStatusAndFacilities(param: any, body: any): Promise<any>;
}
