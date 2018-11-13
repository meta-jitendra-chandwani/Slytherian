import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraiseDashboardComponent } from './appraise-dashboard.component';

describe('AppraiseDashboardComponent', () => {
  let component: AppraiseDashboardComponent;
  let fixture: ComponentFixture<AppraiseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppraiseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
