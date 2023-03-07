/// <reference types="multer" />
import { CategoryGroupService } from 'src/service/master/category_group/category_group.service';
export declare class CategoryGroupController {
    private readonly CategoryGroupRepository;
    constructor(CategoryGroupRepository: CategoryGroupService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(data: any, file: Express.Multer.File): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<import("typeorm").DeleteResult>;
}
