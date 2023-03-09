import { Test, TestingModule } from '@nestjs/testing';
import { StockPhotoController } from './stock-photo.controller';

describe('StockPhotoController', () => {
  let controller: StockPhotoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockPhotoController],
    }).compile();

    controller = module.get<StockPhotoController>(StockPhotoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
