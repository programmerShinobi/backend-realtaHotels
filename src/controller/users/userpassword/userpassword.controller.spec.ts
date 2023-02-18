import { Test, TestingModule } from '@nestjs/testing';
import { UserpasswordController } from './userpassword.controller';

describe('UserpasswordController', () => {
  let controller: UserpasswordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserpasswordController],
    }).compile();

    controller = module.get<UserpasswordController>(UserpasswordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
