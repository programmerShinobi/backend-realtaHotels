/// <reference types="multer" />
import { FacilityPhotosService } from 'src/service/hotel/facility_photos.service';
import { FacilityPhotos } from 'entities/FacilityPhotos';
export declare class FacilityPhotosController {
    private readonly faphoService;
    constructor(faphoService: FacilityPhotosService);
    findAllFaciPhotos(): Promise<any>;
    createFaciPhotos(data: FacilityPhotos): Promise<"failed insert to hotels" | "success insert to hotel">;
    updateFacilityPhotos(id: string, body: any): Promise<"dont updated" | "updated">;
    uploadFile(file: Express.Multer.File, body: any): Promise<"gagal upload" | {
        message: string;
        result: any;
    }>;
    logFiles(file: any, body: any): Promise<"gagal upload" | {
        message: string;
        result: any;
    }>;
    getPhoto(fileName: string, res: any): any;
}
