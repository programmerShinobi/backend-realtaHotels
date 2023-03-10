import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkOrders } from 'entities/WorkOrders';

const date = new Date();
@Injectable()
export class WorkOrdersService {
  constructor(
    @InjectRepository(WorkOrders)
    private workorderRepository: Repository<WorkOrders>,
  ) {}

  ucwords(str: string): any {
    return (str + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  }

  // Method untuk menampilkan semua data workorder
  async findAllWorkorder(): Promise<any> {
    return await this.workorderRepository.find();
  }

  // Method untuk menampilkan semua data workorder by PK
  async findOneWorkorder(woroId: any): Promise<any> {
    return await this.workorderRepository.findOne({
      where: { woroId: woroId },
    });
  }

  //   method untuk menambahkan data Workorder ke database
  async createWorkorder(data: any) {
    await this.workorderRepository.insert({
      woroStartDate: data.woroStartDate,
      woroUser: data.userId,
      woroStatus: 'OPEN',
    });

    const res = await this.paginationWorkorder(data);
    return res;
  }

  //   method untuk mengubah data workorder dari database
  async updateWorkorder(woroId: number, data: any) {
    await this.workorderRepository.update(
      {
        woroId: woroId,
      },
      {
        woroStartDate: data.woroStartDate,
        woroStatus: data.woroStatus,
      },
    );

    const res = await this.paginationWorkorder(data);
    return res;
  }

  //   method untuk menghapus data Workorder
  async deleteWorkorder(data: any) {
    await this.workorderRepository.delete({
      woroId: data.woroId,
    });

    const res = await this.paginationWorkorder(data);
    return res;
  }

  async paginationWorkorder(query?: any): Promise<any> {
    const limit = query?.limit || 10;
    const page = query?.page || 1;
    const skip = (page - 1) * limit;
    const keyword = query?.keyword || '';

    const data = await this.workorderRepository.findAndCount({
      relations: ['woroUser'],
      where: {
        woroUser: {
          userFullName: Like(`%${keyword}%`),
        },
      },
      order: { woroId: 'ASC' },
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
