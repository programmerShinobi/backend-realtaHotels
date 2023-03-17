import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

@Injectable()
export class RestoMenusPhotosService {
  rempPhotosFilename: string | (() => string);
  constructor(
    @InjectRepository(RestoMenuPhotos)
    private repositoryRestoMenusPhotos: Repository<RestoMenuPhotos>,
  ) {}

  async findAllRestoMenusPhotos(): Promise<any> {
    return await this.repositoryRestoMenusPhotos.query(
      'SELECT * FROM resto.resto_menu_photos',
    );
  }

  async getOneRempUrl() {
    return await this.repositoryRestoMenusPhotos.query(
      'SELECT remp_url, remp_reme_id FROM resto.resto_menu_photos',
    );
  }

  // async createRestoMenusPhotos(
  //   data: RestoMenuPhotos,
  // ): Promise<RestoMenuPhotos> {
  //   enum remp_primary {
  //     notPrimary = '0',
  //     primary = '1',
  //   }
  //   let np = remp_primary.notPrimary;
  //   let p = remp_primary.primary;

  //   if (data.rempPrimary == np || data.rempPrimary == p) {
  //     return await this.repositoryRestoMenusPhotos.save(
  //       this.repositoryRestoMenusPhotos.create(data),
  //     );
  //   } else {
  //     console.log('error');
  //   }
  // }

  // async updateRestoMenusPhotos(
  //   id: number,
  //   data: RestoMenuPhotos,
  // ): Promise<any> {
  //   return await this.repositoryRestoMenusPhotos
  //     .update(
  //       {
  //         rempId: id,
  //       },
  //       {
  //         rempPhotoFilename: data.rempPhotoFilename,
  //       },
  //     )
  //     .then(async (result: any) => {
  //       if (!result) {
  //         throw new BadRequestException('Data Gagal Di Update');
  //       }
  //       return {
  //         message: 'Data Berhasil d update',
  //         results: result,
  //       };
  //     })
  //     .catch((err: any) => {
  //       return {
  //         message: err.message,
  //         error: err.name,
  //       };
  //     });
  // }

  // async findByPhotoId(remp_Id: any): Promise<any> {
  //   return await this.repositoryRestoMenusPhotos
  //     .findOne({
  //       where: {
  //         rempId: remp_Id,
  //       },
  //     })
  //     .then((result: any) => {
  //       if (!result) {
  //         throw new NotFoundException('Data not found');
  //       }
  //       return {
  //         message: 'Data displayed successfully',
  //         results: result,
  //       };
  //     })
  //     .catch((err: any) => {
  //       return {
  //         message: err.message,
  //         error: err.name,
  //       };
  //     });
  // }

  // //upload photos
  // async storeFileInfo(
  //   file: { filename: string; originalname: string },
  //   body: any,
  // ) {
  //   const fileinfo = new RestoMenuPhotos();
  //   fileinfo.rempUrl = `http://localhost:3005/resto-menus-photos/public/upload/${file.filename}`;
  //   fileinfo.rempPhotoFilename = file.filename;
  //   (fileinfo.rempThumbnailFilename = `tumb ${file.originalname}`),
  //     (fileinfo.rempPrimary = body.rempPrimary);
  //   fileinfo.rempReme = body.rempReme;
  //   await this.repositoryRestoMenusPhotos.save(fileinfo);

  //   const res = await this.repositoryRestoMenusPhotos.query(
  //     'SELECT * FROM resto.resto_menu_photos',
  //   );
  //   return { result: res };
  // }

  async storeFileInfo(
    file: { filename: string; originalname: string },
    body: any,
  ) {
    const fileInfo = new RestoMenuPhotos();

    fileInfo.rempUrl = `http://localhost:3005/facility-photos/public/upload/${file.filename}`;
    fileInfo.rempPhotoFilename = file.filename;
    fileInfo.rempThumbnailFilename = `tumb ${file.originalname}`;
    fileInfo.rempReme = body.rempReme;
    fileInfo.rempPrimary = body.rempPrimary;

    await this.repositoryRestoMenusPhotos.save(fileInfo);

    const res = await this.repositoryRestoMenusPhotos.query(
      'select * from hotel.facility_photos',
    );
    return { result: res };
  }

  async uploadFile(files: any, body: any): Promise<any> {
    const firebaseConfig = {
      apiKey: 'AIzaSyCEmZE2W1VOTZpPVrndbpAvVpAJnLfE_V0',
      authDomain: 'hotelrealta.firebaseapp.com',
      projectId: 'hotelrealta',
      storageBucket: 'hotelrealta.appspot.com',
      messagingSenderId: '481044855652',
      appId: '1:481044855652:web:1441df251b64fd62c71871',
      measurementId: 'G-1FZ6YKHLV9',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const storage = getStorage(app);

    const promises = files.map(async (data: any, index: any) => {
      const storageRef = ref(storage, `image/${data.originalname}`);
      let primary = '0';
      if (index == 0) {
        primary = '1';
      }

      const metadata = {
        contentType: 'image/jpeg',
        name: data.originalname,
      };

      await uploadBytes(storageRef, data.buffer, metadata);
      const url = await getDownloadURL(storageRef);
      const fileInfo = new RestoMenuPhotos();
      fileInfo.rempUrl = url;
      fileInfo.rempPhotoFilename = data.originalname;
      fileInfo.rempThumbnailFilename = `tumb ${data.originalname}`;
      fileInfo.rempReme = body.rempReme;
      fileInfo.rempPrimary = primary;
      return this.repositoryRestoMenusPhotos.save(fileInfo);
    });
    await Promise.all(promises);
    const res = await this.repositoryRestoMenusPhotos.query(
      'select * from resto.resto_menu_photos',
    );
    return { result: res };
  }
}
