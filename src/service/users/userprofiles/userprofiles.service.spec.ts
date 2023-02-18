import { Test, TestingModule } from '@nestjs/testing';
import { UserprofilesService } from './userprofiles.service';

describe('UserprofilesService', () => {
  let service: UserprofilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserprofilesService],
    }).compile();

    service = module.get<UserprofilesService>(UserprofilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
