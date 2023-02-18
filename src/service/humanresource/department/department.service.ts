import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  // Method untuk menampilkan semua data department
  async findAllDepartment(): Promise<any> {
    return await this.departmentRepository.find();
  }

  // Method untuk menampilkan semua data department by PK
  async findOneDepartment(deptId: number): Promise<any> {
    const result = await this.departmentRepository.findOne({
      where: {
        deptId: deptId,
      },
    });

    if (result) {
      return result;
    }

    throw new HttpException('Categories not found', HttpStatus.NOT_FOUND);
  }

}
