import { StockDetail } from "./StockDetail";
import { StockPhoto } from "./StockPhoto";
export declare class Stocks {
    stockId: number;
    stockName: string | null;
    stockDescription: string | null;
    stockQuantity: number | null;
    stockReorderPoint: number | null;
    stockUsed: number | null;
    stockScrap: number | null;
    stockPrice: string | null;
    stockStandarCost: string | null;
    stockSize: string | null;
    stockColor: string | null;
    stockModifiedDate: Date | null;
    stockDetails: StockDetail[];
    stockPhotos: StockPhoto[];
}
