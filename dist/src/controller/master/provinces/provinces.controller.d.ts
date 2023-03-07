import { ProvincesService } from 'src/service/master/provinces/provinces.service';
export declare class ProvincesController {
    private readonly ProvincesRepository;
    constructor(ProvincesRepository: ProvincesService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: any): Promise<string>;
}
