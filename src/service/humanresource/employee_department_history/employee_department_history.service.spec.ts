import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDepartmentHistoryService } from './employee_department_history.service';

describe('EmployeeDepartmentHistoryService', () => {
  let service: EmployeeDepartmentHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeDepartmentHistoryService],
    }).compile();

    service = module.get<EmployeeDepartmentHistoryService>(EmployeeDepartmentHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
