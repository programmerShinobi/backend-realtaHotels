import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderMenus } from 'entities/OrderMenus';
import { Repository } from 'typeorm';

@Injectable()
export class OrderMenusService {
  constructor(
    @InjectRepository(OrderMenus)
    private orderMenusRepository: Repository<OrderMenus>,
  ) {}

  async findAllOrderMenus(): Promise<any> {
    return await this.orderMenusRepository.find();
  }

  async findOneOrderMenus(orme_id: number): Promise<any> {
    const result = await this.orderMenusRepository.findOne({
      where: {
        ormeId: orme_id,
      },
    });
    if (result) {
      return result;
    }

    throw new HttpException('Categori not Found', HttpStatus.NOT_FOUND);
  }

  async createOrderMenus(data: OrderMenus): Promise<any> {
    let date = new Date();
    const result = await this.orderMenusRepository.save({
      ormeOrderNumber: data.ormeOrderNumber,
      ormeOrderDate: data.ormeOrderDate,
      ormeTotalItem: data.ormeTotalItem,
      ormeTotalDiscount: data.ormeTotalDiscount,
      ormeTotalAmount: data.ormeTotalAmount,
      ormePayType: data.ormePayType,
      ormeCardnumber: data.ormeCardnumber,
      ormeIsPaid: data.ormeIsPaid,
      ormeModifiedDate: date,
      ormeUser: data.ormeUser,
    });
    
    return result;
  }

  async updateOrderMenus(id: number, data: OrderMenus): Promise<any> {
    let date = new Date();
    let result = await this.orderMenusRepository.update(
      {
        ormeId: id,
      },
      {
        ormeOrderNumber: data.ormeOrderNumber,
        ormeOrderDate: data.ormeOrderDate,
        ormeTotalItem: data.ormeTotalItem,
        ormeTotalDiscount: data.ormeTotalDiscount,
        ormeTotalAmount: data.ormeTotalAmount,
        ormePayType: data.ormePayType,
        ormeCardnumber: data.ormeCardnumber,
        ormeIsPaid: data.ormeIsPaid,
        ormeModifiedDate: date,
        ormeUser: data.ormeUser,
      },
    );
    return result + ' Sukses Mengupdate';
  }

  async deleteOrderMenus(id: number): Promise<any> {
    await this.orderMenusRepository.delete({
      ormeId: id,
    });
    return 'Sukses Menghapus';
  }

  async findLastOrder() {
    return await this.orderMenusRepository.query(
      'SELECT * FROM resto.order_menus ORDER BY orme_id DESC LIMIT 1',
    );
  }

  async getIdLast(){
    return await this.orderMenusRepository.query(
      'SELECT orme_id FROM resto.order_menus ORDER BY orme_id DESC LIMIT 1'
    )
  }
}
