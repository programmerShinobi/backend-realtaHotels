import { CountriesService } from 'src/service/master/countries/countries.service';
export declare class CountriesController {
    private readonly CountryService;
    constructor(CountryService: CountriesService);
    getAll(): Promise<any>;
    getById(id: number): Promise<{
        hasil: any;
    }>;
    create(Body: any): Promise<any>;
    update(params: any, body: any): Promise<any>;
    delete(Param: any): Promise<import("typeorm").DeleteResult>;
}
