/// <reference types="multer" />
import { StockPhotoService } from 'src/service/purchasing/stock-photo/stock-photo.service';
export declare class StockPhotoController {
    private stockPhotoService;
    constructor(stockPhotoService: StockPhotoService);
    getAllStockPhoto(): Promise<any>;
    insertPhoto(file: Express.Multer.File, body: any): Promise<{
        result: {
            sphoThumbnailFilename: any;
            sphoPhotoFilename: any;
            sphoPrimary: string;
            sphoUrl: any;
            sphoStock: import("../../../../entities/Stocks").Stocks;
        } & import("../../../../entities/StockPhoto").StockPhoto;
    }> | {
        error: string;
    };
    getPhoto(fileName: string, res: any): any;
    getDashboardPhoto(): Promise<any>;
}
