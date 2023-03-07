import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGateawayService } from './payment_gateaway.service';

describe('PaymentGateawayService', () => {
  let service: PaymentGateawayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentGateawayService],
    }).compile();

    service = module.get<PaymentGateawayService>(PaymentGateawayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
