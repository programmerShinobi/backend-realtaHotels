import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePayHistoryController } from './employee_pay_history.controller';

describe('EmployeePayHistoryController', () => {
  let controller: EmployeePayHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeePayHistoryController],
    }).compile();

    controller = module.get<EmployeePayHistoryController>(EmployeePayHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
