import { Test, TestingModule } from '@nestjs/testing';
import { UserbonuspointsController } from './userbonuspoints.controller';

describe('UserbonuspointsController', () => {
  let controller: UserbonuspointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserbonuspointsController],
    }).compile();

    controller = module.get<UserbonuspointsController>(UserbonuspointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
