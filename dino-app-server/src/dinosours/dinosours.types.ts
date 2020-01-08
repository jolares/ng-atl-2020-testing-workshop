import { Test, TestingModule } from '@nestjs/testing';
import { DinosoursController } from './dinosours.controller';

describe('Dinosours Controller', () => {
  let controller: DinosoursController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DinosoursController],
    }).compile();

    controller = module.get<DinosoursController>(DinosoursController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
