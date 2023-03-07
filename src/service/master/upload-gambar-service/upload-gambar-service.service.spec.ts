import { Test, TestingModule } from '@nestjs/testing';
import { UploadGambarServiceService } from './upload-gambar-service.service';

describe('UploadGambarServiceService', () => {
  let service: UploadGambarServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadGambarServiceService],
    }).compile();

    service = module.get<UploadGambarServiceService>(UploadGambarServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
