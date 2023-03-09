import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Vendor } from 'entities/Vendor';

@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private vendorRepo: Repository<Vendor>,
  ) {}

  async getAllVendor(): Promise<any> {
    return await this.vendorRepo.find();
  }

  async createVendor(data: Vendor): Promise<any> {
    await this.vendorRepo.save({
      vendorName: data.vendorName,
      vendorPriority: data.vendorPriority,
      vendorActive: data.vendorActive,
      vendorRegisterDate: data.vendorRegisterDate,
      vendorWeburl: data.vendorWeburl,
      vendorModifiedDate: new Date(),
    });
    const res = await this.getAllVendor();
    return {
      result: res,
      message: 'Data Inserted',
    };
  }

  async getVendorById(id: number): Promise<any> {
    const res = await this.vendorRepo.findOneBy({ vendorEntityId: id });
    return {
      result: res,
    };
  }

  async updateVendor(id: number, data: Vendor): Promise<any> {
    const res = await this.vendorRepo.update(
      { vendorEntityId: id },
      {
        vendorName: data.vendorName,
        vendorActive: data.vendorActive,
        vendorPriority: data.vendorPriority,
        vendorRegisterDate: data.vendorRegisterDate,
        vendorWeburl: data.vendorWeburl,
        vendorModifiedDate: new Date(),
      },
    );
    return {
      message: 'dataUpdated',
      result: res,
    };
  }

  async deleteVendor(id: number): Promise<any> {
    await this.vendorRepo.delete({ vendorEntityId: id });
    const res = await this.getAllVendor();
    return {
      message: 'data Deleted',
      result: res,
    };
  }
}
