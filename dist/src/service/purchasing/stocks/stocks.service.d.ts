import { Repository } from 'typeorm';
import { Stocks } from 'entities/Stocks';
export declare class StocksService {
    private stocksRepo;
    constructor(stocksRepo: Repository<Stocks>);
    getAllStocks(): Promise<any>;
    createStocks(data: Stocks): Promise<any>;
    updateStocks(id: number, data: Stocks): Promise<any>;
}
