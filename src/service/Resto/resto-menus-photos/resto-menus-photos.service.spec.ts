import { Test, TestingModule } from '@nestjs/testing';
import { RestoMenusPhotosService } from './resto-menus-photos.service';

describe('RestoMenusPhotosService', () => {
  let service: RestoMenusPhotosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestoMenusPhotosService],
    }).compile();

    service = module.get<RestoMenusPhotosService>(RestoMenusPhotosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
