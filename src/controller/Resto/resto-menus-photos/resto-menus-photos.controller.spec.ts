import { Test, TestingModule } from '@nestjs/testing';
import { RestoMenusPhotosController } from './resto-menus-photos.controller';

describe('RestoMenusPhotosController', () => {
  let controller: RestoMenusPhotosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestoMenusPhotosController],
    }).compile();

    controller = module.get<RestoMenusPhotosController>(RestoMenusPhotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
