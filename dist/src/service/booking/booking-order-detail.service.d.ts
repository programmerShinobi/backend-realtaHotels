import { Repository } from 'typeorm';
import { BookingOrderDetail } from 'entities/BookingOrderDetail';
export declare class BookingOrderDetailService {
    private bookingorderdeatailRepository;
    constructor(bookingorderdeatailRepository: Repository<BookingOrderDetail>);
    findAllBookingOrderDetail(): Promise<any>;
    findOneBookinfOrderDetail(boder_id: any): Promise<BookingOrderDetail>;
    createBookingOrderDetail(data: BookingOrderDetail): Promise<any>;
    updateBokingOrderDetail(borde_id: number, data: BookingOrderDetail): Promise<any>;
    deleteBookingOrdeDetail(boder_id: number): Promise<any>;
}
