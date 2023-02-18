import { Test, TestingModule } from '@nestjs/testing';
import { UserbonuspointsService } from './userbonuspoints.service';

describe('UserbonuspointsService', () => {
  let service: UserbonuspointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserbonuspointsService],
    }).compile();

    service = module.get<UserbonuspointsService>(UserbonuspointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
