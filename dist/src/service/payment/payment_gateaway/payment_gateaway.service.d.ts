import { PaymentGateaway } from 'entities/PaymentGateaway';
import { Repository } from 'typeorm';
export declare class PaymentGateawayService {
    private PaymentGateawayRepository;
    constructor(PaymentGateawayRepository: Repository<PaymentGateaway>);
    find(id?: number): Promise<any>;
}
