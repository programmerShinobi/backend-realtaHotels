import { Test, TestingModule } from '@nestjs/testing';
import { RestoMenusJoinToAllService } from './resto-menus-join-to-all.service';

describe('RestoMenusJoinToAllService', () => {
  let service: RestoMenusJoinToAllService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestoMenusJoinToAllService],
    }).compile();

    service = module.get<RestoMenusJoinToAllService>(RestoMenusJoinToAllService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
