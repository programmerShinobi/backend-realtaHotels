import { Repository } from 'typeorm';
import { BookingOrders } from 'entities/BookingOrders';
interface dataBokingOrder {
    boor_user_id: any;
    boor_hotel_id: any;
    boor_order_number: any;
    boor_order_date: any;
    boor_arrival_date: any;
    boor_total_room: any;
    boor_total_guest: any;
    boor_discount: any;
    boor_total_tax: any;
    boor_total_amount: any;
    boor_down_payment: any;
    boor_pay_type: any;
    boor_is_paid: any;
    boor_type: any;
    boor_cardnumber: any;
    boor_member_type: any;
    boor_status: any;
    borde_checkin: any;
    borde_Checkout: any;
    borde_adults: any;
    borde_kids: any;
    borde_price: any;
    borde_extra: any;
    borde_discount: any;
    borde_tax: any;
    borde_subtotal: any;
    borde_faci_id: any;
    soco_spof_id: any;
}
export declare class BookingOrdersService {
    private bookingordersRepository;
    constructor(bookingordersRepository: Repository<BookingOrders>);
    findAllBookingOrders(): Promise<any>;
    findOneBookingOrders(boorUserId: number): Promise<any>;
    createBookingOrders(data: BookingOrders): Promise<any>;
    updateBokingOrders(boor_id: number, data: BookingOrders): Promise<any>;
    deleteBookinfOrders(boor_id: number): Promise<any>;
    createBokingOrder(data: dataBokingOrder): Promise<any>;
    getInvoice(): Promise<any>;
}
export {};
