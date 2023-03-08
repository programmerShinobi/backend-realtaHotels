import { Repository } from 'typeorm';
import { BookingOrderDetailExtra } from 'entities/BookingOrderDetailExtra';
export declare class BookingOrderDetailExtraService {
    private bookingorderdetailextraRepository;
    constructor(bookingorderdetailextraRepository: Repository<BookingOrderDetailExtra>);
    findAllBookingOrderDetailExtra(): Promise<any>;
    findOneBookingOrderDetailExtra(boex_id: number): Promise<any>;
    createBookingOrderDetailExtra(data: BookingOrderDetailExtra): Promise<any>;
    updateBookingOrderExtra(boex_id: number, data: BookingOrderDetailExtra): Promise<any>;
    deleteBookingOrderDetailExtra(boex_id: number): Promise<any>;
}
