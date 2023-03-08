import { Repository } from 'typeorm';
import { FacilityPhotos } from 'entities/FacilityPhotos';
export declare class FacilityPhotosService {
    private repositoryFacPhotos;
    constructor(repositoryFacPhotos: Repository<FacilityPhotos>);
    findAllFaciPhotos(): Promise<any>;
    createFaciPhotos(data: FacilityPhotos): Promise<FacilityPhotos>;
    updateFacilityPhotos(id: string, data: FacilityPhotos): Promise<any>;
    storeFileInfo(file: {
        filename: string;
        originalname: string;
    }, body: any): Promise<{
        result: any;
    }>;
    UploadFirebase(file: any, body: any): Promise<{
        result: any;
    }>;
}
