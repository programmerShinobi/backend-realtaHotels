import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'entities/Employee';
import { Repository } from 'typeorm';
import 'dotenv/config'; 
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytes  } from "firebase/storage";

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  // Method untuk menampilkan semua data employee
  async findAllEmployee(): Promise<any> {
    return await this.employeeRepository.query(
      'select * from humanresource.getAllEmployee()',
    );
  } 

  async findOneEmployee(id: any): Promise<any> {
    return await this.employeeRepository.findOne({
      where: id
    });
  }

  //   method untuk menambahkan data Employee ke database

  async createEmployee(data: any) {
   
    return await this.employeeRepository.query(
      'CALL humanresource.insertemployee($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18, $19)',
      [
        data.emp_national_id, 
        data.emp_birth_date,
        data.emp_marital_status,
        data.emp_gender,
        data.emp_hire_date,
        data.emp_salaried_flag,
        data.emp_vacation_hours,
        data.emp_sickleave_hours,
        data.emp_current_flag,
        data.emp_photo,
        1, //emp_emp_id
        data.emp_joro_id,
        data.ephi_rate_salary,
        data.ephi_pay_frequence,
        data.edhi_start_date,
        data.edhi_end_date,
        data.dept_id,
        data.shift_id,
        data.user_id,
      ],
    );
  }

  //   method untuk mengubah data employee dari database
  async updateEmployee(empId: number, data: any) { 
    return await this.employeeRepository.query(
      'CALL humanresource.updateemployee($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)',
      [
        data.emp_birth_date,
        data.emp_marital_status,
        data.emp_gender,
        data.emp_hire_date,
        data.emp_salaried_flag,
        data.emp_vacation_hours,
        data.emp_sickleave_hours,
        data.emp_current_flag,
        data.emp_photo,
        1, //emp_emp_id
        data.emp_joro_id,
        data.emp_user_id,
        empId,
      ]
    );
  }

  //   method untuk menghapus data Employee
  async deleteEmployee(empId: number) {
    return await this.employeeRepository.delete({
      empId: empId,
    });
  }

  // Method untuk menampilkan semua data upload
  async uploadImage( file: Express.Multer.File ): Promise<any> {
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
    /* generate name */
    const path = require('path');
    const extension = path.parse(file.originalname).ext;

    var timestamp = new Date().toISOString().replace(/[-:.]/g, '');
    var random = ('' + Math.random()).substring(2, 8);
    var originalname = timestamp + random + extension;
    /* generate name */

    const storageRef = ref(storage, `images/${originalname}`);

    const metatype = {
      contentType: file.mimetype,
      name: file.originalname,
    };

    const result = await uploadBytes(storageRef, file.buffer, metatype);

    if(result){
      return await getDownloadURL(storageRef);
    }else{
      throw new Error("error uploading file");
      
    }

    // return urlImage;
    
    /* upload use api imgbb */
    /* const formData = new FormData();
    formData.append('image', file.buffer.toString('base64'));
    const { data: imageData } = await firstValueFrom(
      this.httpService
        .post(
          `https://api.imgbb.com/1/upload?expiration=7776000&key=${process.env.API_KEY_IMGBB}`,
          formData,
        )
        .pipe( 
          catchError((error: AxiosError) => {
            throw error;
          }),
        ),
    );
    return imageData; */
  }
}
