import { Test, TestingModule } from '@nestjs/testing';
import { StockDetailController } from './stock-detail.controller';

describe('StockDetailController', () => {
  let controller: StockDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockDetailController],
    }).compile();

    controller = module.get<StockDetailController>(StockDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
