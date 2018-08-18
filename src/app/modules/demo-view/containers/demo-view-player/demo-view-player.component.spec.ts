import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoViewPlayerComponent } from './demo-view-player.component';

describe('DemoViewPlayerComponent', () => {
  let component: DemoViewPlayerComponent;
  let fixture: ComponentFixture<DemoViewPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoViewPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoViewPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
