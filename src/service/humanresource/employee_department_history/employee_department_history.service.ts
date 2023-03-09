import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDepartmentHistory } from 'entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';


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
export class EmployeeDepartmentHistoryService {
  constructor(
    @InjectRepository(EmployeeDepartmentHistory)
    private employeeDepartmentHistoryRepository: Repository<EmployeeDepartmentHistory>, 
  ) {}

  ucwords(str: string): any {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  // Method untuk menampilkan semua data employeeDepartmentHistory
  async findAllEmployeeDepartmentHistory(edhiEmp: any): Promise<any> {
    return await this.employeeDepartmentHistoryRepository.query(
      'select * from humanresource.getAllEmployeeDepartmentHistory($1)',
      [edhiEmp.edhiEmp],
    );
  }

  // Method untuk menampilkan semua data employeeDepartmentHistory by PK
  async findOneEmployeeDepartmentHistory(edhiId: any): Promise<any> {
    return await this.employeeDepartmentHistoryRepository.findOne({
      where: { edhiId: edhiId },
    });
  }

  //   method untuk menambahkan data EmployeeDepartmentHistory ke database
  async createEmployeeDepartmentHistory(data: any) {
    await this.employeeDepartmentHistoryRepository.insert({
      edhiStartDate: data.edhiStartDate,
      edhiEndDate: data.edhiEndDate,
      edhiEmp: data.edhiEmp,
      edhiDept: data.deptId,
      edhiShift: data.shiftId,
    });

    const res = await this.paginationEmployeeDepartmentHistory(data);
    return res;
  }

  //   method untuk mengubah data employeeDepartmentHistory dari database
  async updateEmployeeDepartmentHistory(edhiId: any, data: any) {
    await this.employeeDepartmentHistoryRepository.update(
      {
        edhiId: edhiId,
      },
      {
        edhiStartDate: data.edhiStartDate,
        edhiEndDate: data.edhiEndDate,
        edhiEmp: data.edhiEmp,
        edhiDept: data.deptId,
        edhiShift: data.shiftId,
      },
    );

    const res = await this.paginationEmployeeDepartmentHistory(data);
    return res;
  }

  //   method untuk menghapus data EmployeeDepartmentHistory
  async deleteEmployeeDepartmentHistory(data: any) {
    await this.employeeDepartmentHistoryRepository.delete({
      edhiId: data.edhiId,
    });

    const res = await this.paginationEmployeeDepartmentHistory(data);
    return res;
  }

  async paginationEmployeeDepartmentHistory(query?: any): Promise<any> {
    const limit = query?.limit || 10;
    const page = query?.page || 1;
    const skip = (page - 1) * limit;
    const keyword = query?.keyword || '';
    const edhiEmp = query?.edhiEmp;

    const data = await this.employeeDepartmentHistoryRepository.findAndCount({
      relations: ['edhiEmp', 'edhiDept', 'edhiShift'],
      where: {
        edhiEmp: {
          empId: edhiEmp,
        },
        
      },
      order: { edhiId: 'ASC' },
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