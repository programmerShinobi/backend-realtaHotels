import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
import { PaymentGateawayService } from 'src/service/payment/payment_gateaway/payment_gateaway.service';

@Controller('payment-gateaway')
export class PaymentGateawayController {
  constructor(private paymentGateawayService: PaymentGateawayService) {}

  // Find All
  @Get()
  async findAllPaymentGateaway() {
    return await this.paymentGateawayService.find();
  }

  // Find by ID
  @Get(':id')
  async findPaymentGateawayById(@Param('id') id: number) {
    return await this.paymentGateawayService.find(id);
  }
}
