/// <reference types="multer" />
import { CategoryGroupService } from 'src/service/master/category_group/category_group.service';
export declare class CategoryGroupController {
    private readonly CategoryGroupRepository;
    constructor(CategoryGroupRepository: CategoryGroupService);
    getAll(): Promise<any>;
    getById(Param: any): Promise<any>;
    create(Body: any, file: Express.Multer.File): Promise<any>;
    edit(id: any, Body: any): Promise<any>;
    delete(Param: number): Promise<"failed" | "succes">;
    logFile(file: any, body: any): Promise<"gagal upload" | {
        message: string;
    }>;
}
