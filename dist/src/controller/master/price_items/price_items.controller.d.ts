import { PriceItemsService } from 'src/service/master/price_items/price_items.service';
export declare class PriceItemsController {
    private readonly PriceItemsRepository;
    constructor(PriceItemsRepository: PriceItemsService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
