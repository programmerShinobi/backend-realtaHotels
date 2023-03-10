/// <reference types="multer" />
import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
export declare class CategoryGroupService {
    private CategoryGroupRepository;
    query(arg0: string): void;
    constructor(CategoryGroupRepository: Repository<CategoryGroup>);
    getAll(): Promise<any>;
    getById(cagroId: number): Promise<any>;
    create(data: CategoryGroup, file: Express.Multer.File): Promise<any>;
    edit(data: CategoryGroup, _cagroId: number): Promise<{
        message: string;
    }>;
    delete(cagroId: number): Promise<import("typeorm").DeleteResult>;
    UploadFirebase(file: any, body: any): Promise<CategoryGroup>;
}
