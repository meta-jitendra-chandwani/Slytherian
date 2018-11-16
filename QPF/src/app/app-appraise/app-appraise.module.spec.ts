import { AppAppraiseModule } from './app-appraise.module';

describe('AppAppraiseModule', () => {
  let appAppraiseModule: AppAppraiseModule;

  beforeEach(() => {
    appAppraiseModule = new AppAppraiseModule();
  });

  it('should create an instance', () => {
    expect(appAppraiseModule).toBeTruthy();
  });
});
