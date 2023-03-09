import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeePayHistory } from 'entities/EmployeePayHistory';

// Create a Date object
let date = new Date();

// Extract date and time components
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, '0');
let day = String(date.getDate()).padStart(2, '0');
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let seconds = String(date.getSeconds()).padStart(2, '0');

// Concatenate components into string
let formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

@Injectable()
export class EmployeePayHistoryService {
  constructor(
    @InjectRepository(EmployeePayHistory)
    private employeePayHistoryRepository: Repository<EmployeePayHistory>,
  ) {}

  

  ucwords(str: string): any {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  // Method untuk menampilkan semua data employeePayHistory
  async findAllEmployeePayHistory(ephiEmp:any): Promise<any> {
    return await this.employeePayHistoryRepository.query(
      'select * from humanresource.getAllEmployeePayHistory($1)',
      [ephiEmp.ephiEmp],
    );
  }

  // Method untuk menampilkan semua data employeePayHistory by PK
  async findOneEmployeePayHistory(ephiId: any): Promise<any> {
    return await this.employeePayHistoryRepository.findOne({
      where: { ephiId: ephiId },
    });

  }

  //   method untuk menambahkan data EmployeePayHistory ke database
  async createEmployeePayHistory(data: any) {
    await this.employeePayHistoryRepository.insert({
      ephiRateSalary: data.ephiRateSalary,
      ephiPayFrequence: data.ephiPayFrequence,
      ephiEmp: data.ephiEmp,
      ephiRateChangeDate: formattedDate,
      ephiModifiedDate: formattedDate,
    });

    const res = await this.paginationEmployeePayHistory(data);
    return res;
  }

  //   method untuk mengubah data employeePayHistory dari database
  async updateEmployeePayHistory(ephiId: any, data: any) {
    await this.employeePayHistoryRepository.update(
      {
        ephiId: ephiId,
      },
      {
        ephiRateSalary: data.ephiRateSalary,
        ephiPayFrequence: data.ephiPayFrequence,
        ephiModifiedDate: formattedDate,
      },
    );

    const res = await this.paginationEmployeePayHistory(data);
    return res;
  }

  //   method untuk menghapus data EmployeePayHistory
  async deleteEmployeePayHistory(data: any) {
    await this.employeePayHistoryRepository.delete({
      ephiId: data.ephiId,
    });

    const res = await this.paginationEmployeePayHistory(data);
    return res;
  }

  async paginationEmployeePayHistory(query?: any): Promise<any> {
    const limit = query?.limit || 10;
    const page = query?.page || 1;
    const skip = (page - 1) * limit;
    const keyword = query?.keyword || '';
    const ephiEmp = query?.ephiEmp;

    const data = await this.employeePayHistoryRepository.findAndCount({
      relations: ['ephiEmp'],
      where: {
        ephiEmp: {
          empId: ephiEmp,
        },
      },

      order: { ephiId: 'ASC' },
      take: limit,
      skip: skip,
    });

    // console.log(take, page, skip, keyword)
    return this.paginateResponse(data, page, limit);
  }

  paginateResponse = (data: any, page: any, limit: any): any => {
    const [result, total] = data;
    const lastPage = Math.ceil(total / limit);
    const nextPage = parseInt(page) + 1 > lastPage ? null : parseInt(page) + 1;
    const prevPage = parseInt(page) - 1 < 1 ? null : parseInt(page) - 1;

    return {
      statusCode: 'success',
      data: [...result],
      count: total,
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      lastPage: lastPage,
    };
  };
}
