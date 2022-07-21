import { Test, TestingModule } from '@nestjs/testing';

import { HealthController } from './health.controller';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [],
    }).compile();
  });

  describe('check health', () => {
    it('should return ok', () => {
      const appController = app.get<HealthController>(HealthController);
      expect(appController.getData()).toEqual({ status: 'ok' });
    });
  });
});
