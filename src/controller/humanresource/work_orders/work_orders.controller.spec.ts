import { Test, TestingModule } from '@nestjs/testing';
import { WorkOrdersController } from './work_orders.controller';

describe('WorkOrdersController', () => {
  let controller: WorkOrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkOrdersController],
    }).compile();

    controller = module.get<WorkOrdersController>(WorkOrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
