import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { DepartmentDto } from 'src/controller/humanresource/department/department.dto'; 

const date = new Date();
@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  ucwords(str : string) : any {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  // Method untuk menampilkan semua data department
  async findAllDepartment(): Promise<any> {
    return await this.departmentRepository.find();
  }

  // Method untuk menampilkan semua data department by PK
  async findOneDepartment(deptId: any): Promise<any> {
    return await this.departmentRepository.findOne({
      where: { deptId: deptId },
    });
  }

  //   method untuk menambahkan data Department ke database
  async createDepartment(data: any) {
    await this.departmentRepository.insert({
      deptName: this.ucwords(data.deptName),
    });

    const res = await this.paginationDepartment(data);
    return res;
  }

  //   method untuk mengubah data department dari database
  async updateDepartment(deptId: number, data: DepartmentDto) {
    await this.departmentRepository.update(
      {
        deptId: deptId,
      },
      {
        deptName: this.ucwords(data.deptName),
        deptModifiedDate: date,
      },
    );

    const res = await this.paginationDepartment(data);
    return res;
  }

  //   method untuk menghapus data Department
  async deleteDepartment(data: any) {
    await this.departmentRepository.delete({
      deptId: data.deptId,
    });

    const res = await this.paginationDepartment(data);
    return res;
  }

  async paginationDepartment(query?: any): Promise<any> {
    const limit = query?.limit || 10;
    const page = query?.page || 1;
    const skip = (page - 1) * limit;
    const keyword = query?.keyword || '';

    const data = await this.departmentRepository.findAndCount({
      where: { deptName: Like(`%${keyword}%`) },
      order: { deptId: 'ASC' },
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
