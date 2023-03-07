import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeDepartmentHistoryController } from './employee_department_history.controller';

describe('EmployeeDepartmentHistoryController', () => {
  let controller: EmployeeDepartmentHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeeDepartmentHistoryController],
    }).compile();

    controller = module.get<EmployeeDepartmentHistoryController>(EmployeeDepartmentHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
