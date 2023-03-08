import { BookingOrderDetailExtraService } from 'src/service/booking/booking-order-detail-extra.service';
export declare class BookingOrderDetailExtraController {
    private bookingorderdetailextraService;
    constructor(bookingorderdetailextraService: BookingOrderDetailExtraService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: any): Promise<any>;
    update(params: any, body: any): Promise<any>;
    remove(params: any): Promise<any>;
}
