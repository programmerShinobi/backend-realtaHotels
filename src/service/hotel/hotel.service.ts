import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotels } from 'entities/Hotels';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotels)
    private hotelsRepository: Repository<Hotels>,
  ) {}
  // find all htels
  async findAllHotel(): Promise<any> {
    return await this.hotelsRepository.find({
      relations: {
        hotelAddr: true,
      },
    });
  }
  // find address
  async findAddress() {
    return await this.hotelsRepository.query('select * from hotel.adsress');
  }
  // insert in table hotel
  async createHotel(data: Hotels) {
    data.hotelPhonenumber = '+62 ' + data.hotelPhonenumber;
    await this.hotelsRepository.save(data);
    const res = await this.findAllHotel();
    return { result: res };
  }

  // update
  async updateHotel(id: any, data: Hotels): Promise<any> {
    return await this.hotelsRepository
      .createQueryBuilder()
      .update()
      .set({
        hotelName: data.hotelName,
        hotelDescription: data.hotelDescription,
        hotelRatingStar: data.hotelRatingStar,
        hotelPhonenumber: data.hotelPhonenumber,
        hotelModifiedDate: data.hotelModifiedDate,
        hotelAddr: data.hotelAddr,
      })
      .where('hotelId = :id', { id })
      .execute();
  }

  // delete
  async deleteHotels(id: any): Promise<any> {
    await this.hotelsRepository.delete({ hotelId: id });
    return 'berhasil hapus data';
  }

  //Procedure
  // prosedur
  async findProcedure() {
    return await this.hotelsRepository.query('SELECT * FROM  hotel.card_hotel');
  }

  async findLastOrder() {
    return await this.hotelsRepository.query(
      'SELECT * FROM booking.booking_orders ORDER BY boor_id DESC LIMIT 1',
    );
  }

  async getInvoice() {
    return await this.hotelsRepository.query(
      'SELECT * FROM booking.getbookinginvoice',
    );
  }
}
