import { Repository } from 'typeorm';
import { StockPhoto } from 'entities/StockPhoto';
export declare class StockPhotoService {
    private sphoRepo;
    constructor(sphoRepo: Repository<StockPhoto>);
    getAllStockPhoto(): Promise<any>;
    insertStockPhoto(fileUrl: any, data: StockPhoto): Promise<{
        result: {
            sphoThumbnailFilename: any;
            sphoPhotoFilename: any;
            sphoPrimary: string;
            sphoUrl: any;
            sphoStock: import("../../../../entities/Stocks").Stocks;
        } & StockPhoto;
    }>;
    getStockPhotoForDesktop(): Promise<any>;
}
