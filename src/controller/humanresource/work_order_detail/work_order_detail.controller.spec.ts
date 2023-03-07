import { Test, TestingModule } from '@nestjs/testing';
import { WorkOrderDetailController } from './work_order_detail.controller';

describe('WorkOrderDetailController', () => {
  let controller: WorkOrderDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkOrderDetailController],
    }).compile();

    controller = module.get<WorkOrderDetailController>(WorkOrderDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
