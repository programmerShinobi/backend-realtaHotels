import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkOrderDetail } from 'entities/WorkOrderDetail';

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
export class WorkOrderDetailService {
  constructor(
    @InjectRepository(WorkOrderDetail)
    private workOrderDetailRepository: Repository<WorkOrderDetail>,
  ) {}

  ucwords(str: string): any {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  // Method untuk menampilkan semua data workOrderDetail
  async findAllWorkOrderDetail(ephiEmp: any): Promise<any> {
    return await this.workOrderDetailRepository.query(
      'select * from humanresource.getAllWorkOrderDetail($1)',
      [ephiEmp.ephiEmp],
    );
  }

  // Method untuk menampilkan semua data workOrderDetail by PK
  async findOneWorkOrderDetail(wodeId: any): Promise<any> {
    return await this.workOrderDetailRepository.findOne({
      where: { wodeId: wodeId },
    });
  }

  //   method untuk menambahkan data WorkOrderDetail ke database
  async createWorkOrderDetail(data: any) {
    await this.workOrderDetailRepository.insert({
      wodeTaskName: this.ucwords(data.wodeTaskName),
      wodeStatus: 'INPROGRESS',
      wodeStartDate: formattedDate,
      wodeNotes: this.ucwords(data.wodeNotes),
      wodeEmp: data.wodeEmp,
      wodeSeta: data.wodeSeta,
      wodeWoro: data.wodeWoro,
    });

    const res = await this.paginationWorkOrderDetail(data);
    return res;
  }

  //   method untuk mengubah data workOrderDetail dari database
  async updateWorkOrderDetail(wodeId: any, data: any) {
    await this.workOrderDetailRepository.update(
      {
        wodeId: wodeId,
      },
      {
        wodeTaskName: this.ucwords(data.wodeTaskName),
        wodeStatus: data.wodeStatus,
        wodeStartDate: formattedDate,
        wodeNotes: this.ucwords(data.wodeNotes),
        wodeEmp: data.wodeEmp,
        wodeSeta: data.wodeSeta,
        wodeWoro: data.wodeWoro,
      },
    );

    const res = await this.paginationWorkOrderDetail(data);
    return res;
  }

  //   method untuk menghapus data WorkOrderDetail
  async deleteWorkOrderDetail(data: any) {
    await this.workOrderDetailRepository.delete({
      wodeId: data.wodeId,
    });

    const res = await this.paginationWorkOrderDetail(data);
    return res;
  }

  async paginationWorkOrderDetail(query?: any): Promise<any> {
    const limit = query?.limit || 10;
    const page = query?.page || 1;
    const skip = (page - 1) * limit;
    const keyword = query?.keyword || '';
    const wodeWoro = query?.wodeWoro;

    const data = await this.workOrderDetailRepository.findAndCount({
      relations: ['wodeEmp', 'wodeSeta', 'wodeWoro', 'wodeEmp.empUser'],
      where: {
        wodeWoro: {
          woroId: wodeWoro,
        },
      },

      order: { wodeId: 'ASC' },
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
