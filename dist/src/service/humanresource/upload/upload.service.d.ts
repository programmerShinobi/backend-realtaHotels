import { HttpService } from '@nestjs/axios';
export declare class UploadService {
    private readonly httpService;
    constructor(httpService: HttpService);
    uploadFile(files: any): Promise<any>;
}
