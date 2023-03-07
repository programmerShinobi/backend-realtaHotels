import { Test, TestingModule } from '@nestjs/testing';
import { PaymentGateawayController } from './payment_gateaway.controller';

describe('PaymentGateawayController', () => {
  let controller: PaymentGateawayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentGateawayController],
    }).compile();

    controller = module.get<PaymentGateawayController>(
      PaymentGateawayController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
