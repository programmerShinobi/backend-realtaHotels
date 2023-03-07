import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadGambarService {

    /**
     *
     * @param path
     */
    async upload(path: string) {

        // Kita bisa membuat fungsi untuk menyimpan lokasi path file disini

        return { statusCode: 200, path: path }
    }

}