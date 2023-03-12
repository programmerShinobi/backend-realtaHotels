import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { initializeApp } from 'firebase/app';

const date = new Date();
@Injectable()
export class UploadService {
  constructor(private readonly httpService: HttpService) {}

  // Method untuk menampilkan semua data upload
  async uploadFile(files: any): Promise<any> {
    const firebaseConfig = {
      apiKey: 'AIzaSyBjVOpJ9AURYiYJewt3OPg0IJs3vc6rgco',
      authDomain: 'hotel-realta.firebaseapp.com',
      projectId: 'hotel-realta',
      storageBucket: 'hotel-realta.appspot.com',
      messagingSenderId: '1034304538174',
      appId: '1:1034304538174:web:8a7da6a85152bc93d0b36f',
      measurementId: 'G-95CZN3EK2S',
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const storage = getStorage(app);

    let urlImage = [];
    let originalName = [];

    files.map(async (value: any, key: any) => {
      /* generate name */
      const path = require('path');
      const extension = path.parse(value.originalname).ext;

      var timestamp = new Date().toISOString().replace(/[-:.]/g, '');
      var random = ('' + Math.random()).substring(2, 8);
      var originalname = timestamp + random + extension;
      /* generate name */

      const storageRef = ref(storage, `images/${originalname}`);

      const metatype = {
        contentType: value.mimetype,
        name: value.originalname,
      };

      await uploadBytes(storageRef, value.buffer, metatype);

      originalName.push(originalname);
    });


    originalName.map(async (val) => {
      const storageRef = ref(storage, `images/${val}`);
      
      const url = await getDownloadURL(storageRef)

      urlImage.push(url)
    })

    console.log(urlImage);
    //get url image

    // return urlImage;
  }
}
