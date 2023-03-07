import { Repository } from 'typeorm';
import { Provinces } from 'entities/Provinces';
export declare class ProvincesService {
    private ProvincesRepository;
    constructor(ProvincesRepository: Repository<Provinces>);
    getAll(): Promise<any>;
    getById(provId: number): Promise<any>;
    create(data: Provinces): Promise<any>;
    edit(data: Provinces, id: any): Promise<{
        message: string;
    }>;
    delete(provId: any): Promise<string>;
}
