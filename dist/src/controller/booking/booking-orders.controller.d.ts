import { BookingOrdersService } from 'src/service/booking/booking-orders.service';
export declare class BookingOrdersController {
    private bokingorderService;
    constructor(bokingorderService: BookingOrdersService);
    findall(): Promise<any>;
    findbyid(id: number): Promise<any>;
    create(body: any): Promise<any>;
    update(params: any, body: any): Promise<any>;
    remove(params: any): Promise<any>;
    bokingOrder(body: any): Promise<any>;
    getInvoice(): Promise<any>;
}
