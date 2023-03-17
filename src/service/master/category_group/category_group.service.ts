import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryGroup } from 'entities/CategoryGroup';
import { diskStorage } from 'multer';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, listAll, uploadBytesResumable, getDownloadURL, uploadBytes, deleteObject, getMetadata } from "firebase/storage";
import { getApp } from 'firebase/app';
import { Express } from 'express';

@Injectable()
export class CategoryGroupService {
    // findOne(id: string) {
    //     throw new Error('Method not implemented.');
    // }
    // query(arg0: string) {
    //     throw new Error('Method not implemented.');
    // }
    constructor(
        @InjectRepository(CategoryGroup)
        private CategoryGroupRepository: Repository<CategoryGroup>
    ) { }


    // untuk get semua data 
    async getAll(): Promise<any> {
        const ShowData = await this.CategoryGroupRepository.find(
            {
                order: {
                    cagroId: "ASC"
                  }
            }
        )
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
    // delete data 
    async delete(cagroId: number) {
        const deleteData = await this.CategoryGroupRepository.delete({
            cagroId: cagroId
        })
        return deleteData
    }

    // add data category
    async UploadFirebase(file: any, body: any) {
        const firebaseConfig = {
            apiKey: "AIzaSyA-uHJ66LjsINWEo4p6SWBvRdqrd0CRJtQ",
            authDomain: "hotelrealta-9cdce.firebaseapp.com",
            projectId: "hotelrealta-9cdce",
            storageBucket: "hotelrealta-9cdce.appspot.com",
            messagingSenderId: "530774046341",
            appId: "1:530774046341:web:99cbaebc6cd476efa8dbec",
            measurementId: "G-2NSYW59NVZ"
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
    
    // edit data
    async edit(data: CategoryGroup, _cagroId: any) {
        const editData = await this.CategoryGroupRepository.update({
            cagroId: _cagroId
        },
            {
                cagroName: data.cagroName,
                cagroType: data.cagroType,
                cagroDescription: data.cagroDescription,
                
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
    //   update category 
    // async UpdateFirebase(file: any, body: any, cagroId: any) {
    //     const firebaseConfig = {
    //         apiKey: "AIzaSyA-uHJ66LjsINWEo4p6SWBvRdqrd0CRJtQ",
    //         authDomain: "hotelrealta-9cdce.firebaseapp.com",
    //         projectId: "hotelrealta-9cdce",
    //         storageBucket: "hotelrealta-9cdce.appspot.com",
    //         messagingSenderId: "530774046341",
    //         appId: "1:530774046341:web:99cbaebc6cd476efa8dbec",
    //         measurementId: "G-2NSYW59NVZ"
    //     };
    //     const app = initializeApp(firebaseConfig);
    //     const storage = getStorage(app);


    //     // Get reference to the old file and delete it
    //     const oldFileRef = ref(storage, `image/${file.originalname}`);
    //     await deleteObject(oldFileRef).then(() => {
    //         console.log('File deleted successfully');
    //     })
    //         .catch((error) => {
    //             console.error('Error deleting file:', error);
    //         });


    //     // Upload the new file and get its download URL
    //     const storageRef = ref(storage, `image/${file.originalname}`);
    //     const metadata = {
    //         contentType: 'image/jpeg',
    //         name: file.originalname,
    //     };

    //     await uploadBytes(storageRef, file.buffer, metadata);
    //     const url = await getDownloadURL(storageRef);

    //     // getMetadata(oldFileRef).then((metadata:any) => {
    //     //     console.log(metadata);
    //     // }).catch((error) => {
    //     //     console.error(error);
    //     // });

    //     // Update the file info in the database
    //     const fileInfo = await this.CategoryGroupRepository.update(
    //         { cagroId: cagroId },
    //         {
    //             cagroIconUrl: url,
    //             cagroIcon: file.originalname,
    //             cagroName: body.cagroName,
    //             cagroType: body.cagroType,
    //             cagroDescription: body.cagroDescription,
    //         },
    //     );
    //     if (fileInfo.affected) {
    //         return { message: 'Data berhasil di edit', fileInfo }
    //     }
    //     else {
    //         return { message: 'Data gagal di edit' }
    //     }
    // }


}
