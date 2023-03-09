import { Repository } from 'typeorm';
import { StockDetail } from 'entities/StockDetail';
export declare class StockDetailService {
    private stodRepo;
    constructor(stodRepo: Repository<StockDetail>);
    getAllDetails(): Promise<any>;
    getFaciNameandId(): Promise<any>;
    updateForDetail(id: number, data: StockDetail): Promise<any>;
}
