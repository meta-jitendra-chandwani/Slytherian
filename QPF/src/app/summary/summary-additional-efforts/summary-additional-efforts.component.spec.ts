import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAdditionalEffortsComponent } from './summary-additional-efforts.component';

describe('SummaryAdditionalEffortsComponent', () => {
  let component: SummaryAdditionalEffortsComponent;
  let fixture: ComponentFixture<SummaryAdditionalEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAdditionalEffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAdditionalEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
