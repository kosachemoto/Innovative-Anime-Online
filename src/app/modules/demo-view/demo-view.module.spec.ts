import { DemoViewModule } from './demo-view.module';

describe('DemoViewModule', () => {
  let demoViewModule: DemoViewModule;

  beforeEach(() => {
    demoViewModule = new DemoViewModule();
  });

  it('should create an instance', () => {
    expect(demoViewModule).toBeTruthy();
  });
});
