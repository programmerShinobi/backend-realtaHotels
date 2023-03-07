import { Test, TestingModule } from '@nestjs/testing';
import { UserAccountAuthService } from './auth.service';

describe('UserAccountAuthService', () => {
  let service: UserAccountAuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAccountAuthService],
    }).compile();

    service = module.get<UserAccountAuthService>(UserAccountAuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
