import { Test, TestingModule } from '@nestjs/testing';
import { UserprofilesController } from './userprofiles.controller';

describe('UserprofilesController', () => {
  let controller: UserprofilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserprofilesController],
    }).compile();

    controller = module.get<UserprofilesController>(UserprofilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
