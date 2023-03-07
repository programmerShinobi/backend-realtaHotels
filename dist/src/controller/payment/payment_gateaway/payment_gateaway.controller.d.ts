import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';
export declare class PaymentGateawayController {
    private paymentGateawayService;
    constructor(paymentGateawayService: PaymentGateawayService);
    findAllPaymentGateaway(): Promise<any>;
    findPaymentGateawayById(id: number): Promise<any>;
}
