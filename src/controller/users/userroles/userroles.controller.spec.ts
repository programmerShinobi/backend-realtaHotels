import { Test, TestingModule } from '@nestjs/testing';
import { UserrolesController } from './userroles.controller';

describe('UserrolesController', () => {
  let controller: UserrolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserrolesController],
    }).compile();

    controller = module.get<UserrolesController>(UserrolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
