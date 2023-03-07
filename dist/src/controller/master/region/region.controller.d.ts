import { RegionService } from 'src/service/master/region/region.service';
export declare class RegionController {
    private readonly RegionService;
    constructor(RegionService: RegionService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
