import { Test, TestingModule } from '@nestjs/testing';
import { JobRoleController } from './job_role.controller';

describe('JobRoleController', () => {
  let controller: JobRoleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobRoleController],
    }).compile();

    controller = module.get<JobRoleController>(JobRoleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
