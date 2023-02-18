import { Test, TestingModule } from '@nestjs/testing';
import { UsermembersService } from './usermembers.service';

describe('UsermembersService', () => {
  let service: UsermembersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsermembersService],
    }).compile();

    service = module.get<UsermembersService>(UsermembersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
