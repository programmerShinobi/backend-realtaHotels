import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
import { diskStorage } from 'multer';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL, uploadBytes } from "firebase/storage";
import { getApp } from 'firebase/app';
import { Express } from 'express';

@Injectable()
export class CategoryGroupService {
    query(arg0: string) {
        throw new Error('Method not implemented.');
    }
    constructor(
        @InjectRepository(CategoryGroup)
        private CategoryGroupRepository: Repository<CategoryGroup>
    ) { }


    // untuk get semua data 
    async getAll(): Promise<any> {
        const ShowData = await this.CategoryGroupRepository.find()
        return ShowData
    }
    // get data by Id
    async getById(cagroId: number): Promise<any> {
        const ShowDataId = await this.CategoryGroupRepository.findOne({
            where: {
                cagroId: cagroId
            }
        })
        return ShowDataId
    }
    // add data 
    async create(data: CategoryGroup,file: Express.Multer.File): Promise<any> {
        // const imageUrl = await this.uploadImage(file);
        const addData = await this.CategoryGroupRepository.save({
            cagroName: data.cagroName,
            cagroDescription: data.cagroDescription,
            cagroType: data.cagroType,
            // cagroIcon:imageUrl,
            // cagroIconUrl: imageUrl

        })
        console.log(addData)
        if (addData) {
            return { message: 'Data berhasil ditambahkan', addData: addData }
        }
        else {
            return { message: 'Data gagal ditambahkan' }
        }
    }
    // edit data 
    async edit(data: CategoryGroup, _cagroId: number) {
        const editData = await this.CategoryGroupRepository.update({
            cagroId: _cagroId
        },
            {
                cagroName: data.cagroName,
                cagroDescription: data.cagroDescription,
                cagroType: data.cagroType,
                cagroIcon: data.cagroIcon,
                cagroIconUrl: data.cagroIconUrl
            }
        )
        console.log(editData)
        if (editData.affected) {
            return { message: 'Data berhasil di edit' }
        }
        else {
            return { message: 'Data gagal di edit' }
        }
    }
    // delete data 
    async delete(cagroId: number) {
        const deleteData = await this.CategoryGroupRepository.delete({
            cagroId: cagroId
        })
        return deleteData
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
    
        
          const storageRef = ref(storage, `image/${file.originalname}`);
          const metadata = {
            contentType: 'image/jpeg',
            name: file.originalname,
          };
          await uploadBytes(storageRef, file.buffer, metadata);
          const url = await getDownloadURL(storageRef);
          const fileInfo = new CategoryGroup();
          fileInfo.cagroIconUrl = url;
          fileInfo.cagroIcon = file.originalname;
          fileInfo.cagroName = body.cagroName;
          fileInfo.cagroType = body.cagroType;
          fileInfo.cagroDescription = body.cagroDescription;
          return this.CategoryGroupRepository.save(fileInfo);
        
      }
}
