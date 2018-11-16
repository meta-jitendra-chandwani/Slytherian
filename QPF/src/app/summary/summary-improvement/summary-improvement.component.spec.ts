import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryImprovementComponent } from './summary-improvement.component';

describe('SummaryImprovementComponent', () => {
  let component: SummaryImprovementComponent;
  let fixture: ComponentFixture<SummaryImprovementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryImprovementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryImprovementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
