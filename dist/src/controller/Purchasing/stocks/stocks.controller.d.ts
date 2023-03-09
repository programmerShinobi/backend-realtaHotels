import { StocksService } from 'src/service/purchasing/stocks/stocks.service';
export declare class StocksController {
    private stockService;
    constructor(stockService: StocksService);
    getAllStocks(): Promise<any>;
    createStocks(body: any): Promise<any>;
    updateStocks(param: any, Body: any): Promise<any>;
}
