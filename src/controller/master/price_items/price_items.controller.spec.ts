import { Test, TestingModule } from '@nestjs/testing';
import { PriceItemsController } from './price_items.controller';

describe('PriceItemsController', () => {
  let controller: PriceItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceItemsController],
    }).compile();

    controller = module.get<PriceItemsController>(PriceItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
