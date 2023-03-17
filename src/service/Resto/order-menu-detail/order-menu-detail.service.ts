import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { OrderMenuDetail } from 'entities/OrderMenuDetail';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrderMenuDetailService {
  constructor(
    @InjectRepository(OrderMenuDetail)
    private orderMenuDetailRepository: Repository<OrderMenuDetail>,
  ) {}

  // Menampilkan Semua Data
  async findAllOrderMenuDetail(): Promise<any> {
    return await this.orderMenuDetailRepository.find();
  }

  //
  async findOneOrderMenuDetail(omde_id: number): Promise<any> {
    const result = await this.orderMenuDetailRepository.findOne({
      where: {
        omdeId: omde_id,
      },
    });

    if (result) {
      return result;
    }

    throw new HttpException('Categori not Found', HttpStatus.NOT_FOUND);
  }

  async createOrderMenusDetail(data: OrderMenuDetail): Promise<any> {
    const result = await this.orderMenuDetailRepository.save({
      ormePrice: data.ormePrice,
      ormeQty: data.ormeQty,
      ormeSubtotal: data.ormeSubtotal,
      ormeDiscount: data.ormeDiscount,
      omdeOrme: data.omdeOrme,
      omdeReme: data.omdeReme,
    });
    return result;
  }

  async updateOrdeMenuDetail(id: number, data: OrderMenuDetail): Promise<any> {
    let result = await this.orderMenuDetailRepository.update(
      {
        omdeId: id,
      },
      {
        ormePrice: data.ormePrice,
        ormeQty: data.ormeQty,
        ormeSubtotal: data.ormeSubtotal,
        ormeDiscount: data.ormeDiscount,
        omdeOrme: data.omdeOrme,
        omdeReme: data.omdeReme,
      },
    );
    return result + ' Sukses Mengupdate';
  }

  async deleteOrdeMenuDetail(id: number): Promise<any> {
    await this.orderMenuDetailRepository.delete({
      omdeId: id,
    });

    return 'Sukses Menghapus';
  }
}
