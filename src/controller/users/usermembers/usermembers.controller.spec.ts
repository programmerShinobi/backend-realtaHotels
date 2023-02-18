import { Test, TestingModule } from '@nestjs/testing';
import { UsermembersController } from './usermembers.controller';

describe('UsermembersController', () => {
  let controller: UsermembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsermembersController],
    }).compile();

    controller = module.get<UsermembersController>(UsermembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
