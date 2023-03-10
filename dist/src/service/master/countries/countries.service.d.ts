import { Repository } from 'typeorm';
import { Country } from 'entities/Country';
export declare class CountriesService {
    private countryRepository;
    findAll(): void;
    find(): void;
    query(arg0: string): void;
    constructor(countryRepository: Repository<Country>);
    getAll(): Promise<any>;
    getById(countryId: number): Promise<any>;
    create(data: Country): Promise<any>;
    updateCountry(countryId: number, data: any): Promise<Country>;
    delete(countryId: any): Promise<import("typeorm").DeleteResult>;
}
