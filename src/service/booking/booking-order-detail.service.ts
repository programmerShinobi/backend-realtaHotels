import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';

@Injectable()
export class BookingOrderDetailService {
    constructor(@InjectRepository(BookingOrderDetail)
    private bookingorderdeatailRepository: Repository<BookingOrderDetail>
    ){}

    async findAllBookingOrderDetail():Promise<any>{
        return await this.bookingorderdeatailRepository.find()
    }

    async findOneBookinfOrderDetail(boder_id):Promise<BookingOrderDetail>{
        return await this.bookingorderdeatailRepository.findOne({
            where:{
                bordeId: boder_id,
            }
        })
    }
    async createBookingOrderDetail(data:BookingOrderDetail):Promise<any>{
        return await this.bookingorderdeatailRepository.save(data)
    }

    async updateBokingOrderDetail(borde_id:number, data: BookingOrderDetail):Promise<any>{
        return await this.bookingorderdeatailRepository.update({bordeId:borde_id},data)
        .then(result => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });
    }

    async deleteBookingOrdeDetail(boder_id:number):Promise<any>{
        return await this.bookingorderdeatailRepository.delete({
            bordeId :boder_id
        })
    }

}
