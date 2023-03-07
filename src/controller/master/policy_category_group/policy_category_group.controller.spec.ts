import { Test, TestingModule } from '@nestjs/testing';
import { PolicyCategoryGroupController } from './policy_category_group.controller';

describe('PolicyCategoryGroupController', () => {
  let controller: PolicyCategoryGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PolicyCategoryGroupController],
    }).compile();

    controller = module.get<PolicyCategoryGroupController>(PolicyCategoryGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
