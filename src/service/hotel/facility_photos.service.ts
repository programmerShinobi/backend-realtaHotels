import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FacilityPhotos } from 'entities/FacilityPhotos';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

@Injectable()
export class FacilityPhotosService {
  constructor(
    @InjectRepository(FacilityPhotos)
    private repositoryFacPhotos: Repository<FacilityPhotos>,
  ) {}

  // find all htels
  async findAllFaciPhotos(): Promise<any> {
    return await this.repositoryFacPhotos.query(
      'select * from hotel.facility_photos',
    );
  }
  // insert in table hotel
  async createFaciPhotos(data: FacilityPhotos): Promise<FacilityPhotos> {
    enum fapho_primary {
      notPrimary = '0',
      primary = '1',
    }
    let nP = fapho_primary.notPrimary;
    let p = fapho_primary.primary;

    if (data.faphoPrimary == nP || data.faphoPrimary == p) {
      return await this.repositoryFacPhotos.save(
        this.repositoryFacPhotos.create(data),
      );
    } else {
      console.log('error');
    }
  }

  // update
  async updateFacilityPhotos(id: string, data: FacilityPhotos): Promise<any> {
    return this.repositoryFacPhotos
      .createQueryBuilder()
      .update()
      .set({
        faphoPhotoFilename: data.faphoPhotoFilename,
      })
      .where('faphoId = :id', { id })
      .execute();
  }

  // upload photo
  async storeFileInfo(
    file: { filename: string; originalname: string },
    body: any,
  ) {
    const fileInfo = new FacilityPhotos();

    fileInfo.faphoUrl = `http://localhost:3005/facility-photos/public/upload/${file.filename}`;
    fileInfo.faphoPhotoFilename = file.filename;
    fileInfo.faphoModifieldDate = new Date();
    fileInfo.faphoThumbnailFilename = `tumb ${file.originalname}`;
    fileInfo.faphoFaci = body.faphoFaci;
    fileInfo.faphoPrimary = body.faphoPrimary;

    await this.repositoryFacPhotos.save(fileInfo);

    const res = await this.repositoryFacPhotos.query(
      'select * from hotel.facility_photos',
    );
    return { result: res };
  }

  async UploadFirebase(file: any, body: any) {
    const firebaseConfig = {
      apiKey: 'AIzaSyCEmZE2W1VOTZpPVrndbpAvVpAJnLfE_V0',
      authDomain: 'hotelrealta.firebaseapp.com',
      projectId: 'hotelrealta',
      storageBucket: 'hotelrealta.appspot.com',
      messagingSenderId: '481044855652',
      appId: '1:481044855652:web:1441df251b64fd62c71871',
      measurementId: 'G-1FZ6YKHLV9',
    };
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);

    const promises = file.map(async (data: any, index: any) => {
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
      const fileInfo = new FacilityPhotos();
      fileInfo.faphoUrl = url;
      fileInfo.faphoPhotoFilename = data.originalname;
      fileInfo.faphoModifieldDate = new Date();
      fileInfo.faphoThumbnailFilename = `tumb ${data.originalname}`;
      fileInfo.faphoFaci = body.faphoFaci;
      fileInfo.faphoPrimary = primary;
      return this.repositoryFacPhotos.save(fileInfo);
    });
    await Promise.all(promises);
    const res = await this.repositoryFacPhotos.query(
      'select * from hotel.facility_photos',
    );
    return { result: res };
  }
}
