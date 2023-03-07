import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeDepartmentHistory } from 'entities/EmployeeDepartmentHistory';
import { Repository } from 'typeorm';


@Injectable()
export class EmployeeDepartmentHistoryService {
  constructor(
    @InjectRepository(EmployeeDepartmentHistory)
    private employeeDepartmentHistoryRepository: Repository<EmployeeDepartmentHistory>,
  ) {}

  // Method untuk menampilkan semua data EmployeeDepartmentHistory
  async findAllEmployeeDepartmentHistory(data : any): Promise<any> {
    return await this.employeeDepartmentHistoryRepository.query(
      'getAllEmployeeDepartmentHistory($1)',
      [data.empId],
    );
  }

}