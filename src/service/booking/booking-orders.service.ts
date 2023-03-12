import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingOrders } from 'entities/BookingOrders';

interface dataBokingOrder{
    boor_user_id :any,
    boor_hotel_id :any,
    boor_order_number: any,
    boor_order_date :any,
    boor_arrival_date : any,
    boor_total_room :any,
    boor_total_guest :any,
    boor_discount :any,
    boor_total_tax :any,
    boor_total_amount  :any,
    boor_down_payment  :any,
    boor_pay_type:any,  
    boor_is_paid:any,   
    boor_type:any,
    boor_cardnumber:any,
    boor_member_type:any,
    boor_status:any,
    borde_checkin :any,
    borde_Checkout :any,
    borde_adults :any,
    borde_kids :any,
    borde_price :any,
    borde_extra :any,
    borde_discount :any,
    borde_tax :any,
    borde_subtotal :any,
    borde_faci_id :any,
	soco_spof_id :any

}


@Injectable()
export class BookingOrdersService {
    constructor (@InjectRepository(BookingOrders)
    private bookingordersRepository: Repository<BookingOrders>
    ) {}

    async findAllBookingOrders():Promise<any>{
        return await this.bookingordersRepository.find()
    }

    async findOneBookingOrders(boorUserId:number): Promise<any> {
        return await this.bookingordersRepository.findOne({
            where:{
                boorId: boorUserId
            }
        })
    }

    async createBookingOrders(data:BookingOrders):Promise<any> {
        return await this.bookingordersRepository.save(data);
    }

    async updateBokingOrders(boor_id:number, data:BookingOrders):Promise<any>{
        return await this.bookingordersRepository.update({boorId:boor_id},data)
        .then(result => {
            return 'Data berhasil Di Update';
          }).catch(error => {
            return error;
          });
    }

    async deleteBookinfOrders(boor_id:number):Promise<any> {
        return await this.bookingordersRepository.delete({
            boorId: boor_id
        })
    }

    async createBokingOrder(data:dataBokingOrder):Promise<any> {
        return await this.bookingordersRepository.query(`CALL booking.insertbooking ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28)`,[
            data.boor_user_id,
            data.boor_hotel_id,
            data.boor_order_number,
            data.boor_order_date,
            data.boor_arrival_date,
            data.boor_total_room,
            data.boor_total_guest,
            data.boor_discount,
            data.boor_total_tax,
            data.boor_total_amount,
            data.boor_down_payment,
            data.boor_pay_type,  
            data.boor_is_paid,   
            data.boor_type,
            data.boor_cardnumber,
            data.boor_member_type,
            data.boor_status,
            data.borde_checkin,
            data.borde_Checkout,
            data.borde_adults,
            data.borde_kids,
            data.borde_price,
            data.borde_extra,
            data.borde_discount,
            data.borde_tax,
            data.borde_subtotal,
            data.borde_faci_id,
            data.soco_spof_id 
        ]);
    }

    async getInvoice(){
        return await this.bookingordersRepository.query('SELECT * FROM booking.getbookinginvoice')
    }

    async updateStatus(id:number ,data:BookingOrders){
        return await this.bookingordersRepository.query(`UPDATE booking.booking_orders SET boor_status = '${data.boorStatus}' WHERE boor_id = ${id}`)
    }
}
