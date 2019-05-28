import { Test, TestingModule } from '@nestjs/testing';
import { EventGroupController } from './event-group.controller';

describe('EventGroup Controller', () => {
  let controller: EventGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventGroupController],
    }).compile();

    controller = module.get<EventGroupController>(EventGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
