import 'dotenv/config';
import { UploadService } from 'src/service/humanresource/upload/upload.service';
export declare class UploadController {
    private readonly uploadService;
    constructor(uploadService: UploadService);
    logFiles(file: any, body: any): Promise<void>;
}
