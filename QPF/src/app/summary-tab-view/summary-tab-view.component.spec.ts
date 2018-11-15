import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTabViewComponent } from './summary-tab-view.component';

describe('SummaryTabViewComponent', () => {
  let component: SummaryTabViewComponent;
  let fixture: ComponentFixture<SummaryTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
