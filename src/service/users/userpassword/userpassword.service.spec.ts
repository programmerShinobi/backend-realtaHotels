import { Test, TestingModule } from '@nestjs/testing';
import { UserpasswordService } from './userpassword.service';

describe('UserpasswordService', () => {
  let service: UserpasswordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserpasswordService],
    }).compile();

    service = module.get<UserpasswordService>(UserpasswordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
