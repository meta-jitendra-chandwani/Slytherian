import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryRecruitmentComponent } from './summary-recruitment.component';

describe('SummaryRecruitmentComponent', () => {
  let component: SummaryRecruitmentComponent;
  let fixture: ComponentFixture<SummaryRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
