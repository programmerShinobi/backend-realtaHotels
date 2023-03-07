import { Repository } from 'typeorm';
import { Country } from 'entities/Country';
export declare class CountriesService {
    private countryRepository;
    query(arg0: string): void;
    constructor(countryRepository: Repository<Country>);
    getAll(): Promise<any>;
    getById(countryId: number): Promise<any>;
    create(data: Country): Promise<any>;
    edit(data: Country, countryId: any): Promise<{
        message: string;
    }>;
    delete(countryId: any): Promise<import("typeorm").DeleteResult>;
}
