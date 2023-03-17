import { Test, TestingModule } from '@nestjs/testing';
import { RestoMenusJoinToAllController } from './resto-menus-join-to-all.controller';

describe('RestoMenusJoinToAllController', () => {
  let controller: RestoMenusJoinToAllController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestoMenusJoinToAllController],
    }).compile();

    controller = module.get<RestoMenusJoinToAllController>(RestoMenusJoinToAllController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
