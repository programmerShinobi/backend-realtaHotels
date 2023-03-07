import { Regions } from 'entities/Regions';
import { Repository } from 'typeorm';
export declare class RegionService {
    private regionRepository;
    query(): void;
    constructor(regionRepository: Repository<Regions>);
    getAll(): Promise<any>;
    getById(regionCode: any): Promise<any>;
    create(data: Regions): Promise<any>;
    edit(data: Regions, regionCode: any): Promise<{
        message: string;
    }>;
    delete(regionCode: number): Promise<import("typeorm").DeleteResult>;
}
