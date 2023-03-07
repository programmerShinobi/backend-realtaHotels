import { Test, TestingModule } from '@nestjs/testing';
import { CategoryGroupController } from './category_group.controller';

describe('CategoryGroupController', () => {
  let controller: CategoryGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryGroupController],
    }).compile();

    controller = module.get<CategoryGroupController>(CategoryGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
