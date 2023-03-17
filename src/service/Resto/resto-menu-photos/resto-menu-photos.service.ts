import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';

@Injectable()
export class RestoMenuPhotosService {
  constructor(
    @InjectRepository(RestoMenuPhotos)
    private restoMenusPhotosRepository: Repository<RestoMenuPhotos>,
  ) {}

  // Menampilkan semua Data
  async findAllRestoMenuPhotos(): Promise<any> {
    return await this.restoMenusPhotosRepository.find();
  }

  //Menampilkan sesuai ID
  async findOneRestoMenuPhotos(remp_id: number): Promise<any> {
    const result = await this.restoMenusPhotosRepository.findOne({
      where: {
        rempId: remp_id,
      },
    });

    if (result) {
      return result;
    }

    throw new HttpException('Categori not Found', HttpStatus.NOT_FOUND);
  }

  // Membuat/Menambah Data

  async createRestoMenusPhotos(data: RestoMenuPhotos): Promise<any> {
    // enum erempPrimary {
    //   primary = 1,
    //   notPrimary = 0,
    // }
    const result = await this.restoMenusPhotosRepository.save({
      rempThumbnailFilename: data.rempThumbnailFilename,
      rempPhotoFilename: data.rempPhotoFilename,
      rempPrimary: data.rempPrimary,
      rempUrl: data.rempUrl,
    });
    return result;
  }

  // update

  async updateRestoMenuPhotos(id: number, data: RestoMenuPhotos): Promise<any> {
    let result = await this.restoMenusPhotosRepository.update(
      {
        rempId: id,
      },
      {
        rempThumbnailFilename: data.rempThumbnailFilename,
        rempPhotoFilename: data.rempPhotoFilename,
        rempPrimary: data.rempPrimary,
        rempUrl: data.rempUrl,
      },
    );
    return result + 'Sukses Mengupdate';
  }

  async deleteRestoMenuPhotos(id: number): Promise<any> {
    await this.restoMenusPhotosRepository.delete({
      rempId: id,
    });
    return 'Sukses Menghapus';
  }
}
