import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountAuthController } from './auth.controller';

describe('UserAccountAuthController', () => {
  let controller: UserAccountAuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAccountAuthController],
    }).compile();

    controller = module.get<UserAccountAuthController>(UserAccountAuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
