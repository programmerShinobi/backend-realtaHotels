import { Repository } from 'typeorm';
import { PriceItems } from 'entities/PriceItems';
export declare class PriceItemsService {
    private PriceItemsRepository;
    constructor(PriceItemsRepository: Repository<PriceItems>);
    getAll(): Promise<any>;
    getById(pritId: number): Promise<any>;
    create(data: PriceItems): Promise<any>;
    edit(data: PriceItems, _pritId: any): Promise<{
        message: string;
    }>;
    delete(pritId: number): Promise<import("typeorm").DeleteResult>;
}
