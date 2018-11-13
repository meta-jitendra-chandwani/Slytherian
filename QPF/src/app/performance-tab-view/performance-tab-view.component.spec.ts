import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceTabViewComponent } from './performance-tab-view.component';

describe('PerformanceTabViewComponent', () => {
  let component: PerformanceTabViewComponent;
  let fixture: ComponentFixture<PerformanceTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
