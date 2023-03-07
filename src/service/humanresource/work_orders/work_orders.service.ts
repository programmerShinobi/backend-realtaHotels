import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkOrders } from 'entities/WorkOrders';

const date = new Date();
@Injectable()
export class WorkOrdersService {
  constructor(
    @InjectRepository(WorkOrders)
    private workOrdersRepository: Repository<WorkOrders>,
  ) {}

  // Method untuk menampilkan semua data workOrders
  async findAllWorkOrders(): Promise<any> {
    return await this.workOrdersRepository.find();
  }

  // Method untuk menampilkan semua data workOrders by PK
  async findOneWorkOrders(woroId: any): Promise<any> {
    return await this.workOrdersRepository.findOne({
      where: { woroId: woroId },
    });
  }

  //   method untuk menambahkan data WorkOrders ke database

  async createWorkOrders(data: any) {
    await this.workOrdersRepository.query(
      'CALL humanresource.insertemployee()',
      [],
    );

    const res = await this.findAllWorkOrders();
    return res;
  }

  //   method untuk mengubah data workOrders dari database
  async updateWorkOrders(woroId: number, data: any) {
    await this.workOrdersRepository.query('CALL humanresource.insertemployee()', []);

    const res = await this.findAllWorkOrders();
    return res;
  }

  //   method untuk menghapus data WorkOrders
  async deleteWorkOrders(woroId: number) {
    await this.workOrdersRepository.delete({
      woroId: woroId,
    });

    const res = await this.findAllWorkOrders();
    return res;
  }
}
