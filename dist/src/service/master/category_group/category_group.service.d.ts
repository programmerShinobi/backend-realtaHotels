import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
export declare class CategoryGroupService {
    private CategoryGroupRepository;
    constructor(CategoryGroupRepository: Repository<CategoryGroup>);
    getAll(): Promise<any>;
    getById(cagroId: number): Promise<any>;
    delete(cagroId: number): Promise<import("typeorm").DeleteResult>;
    UploadFirebase(file: any, body: any): Promise<CategoryGroup>;
    edit(data: CategoryGroup, _cagroId: any): Promise<{
        message: string;
    }>;
}
