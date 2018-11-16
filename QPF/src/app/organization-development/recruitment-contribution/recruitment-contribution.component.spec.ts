import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentContributionComponent } from './recruitment-contribution.component';

describe('RecruitmentContributionComponent', () => {
  let component: RecruitmentContributionComponent;
  let fixture: ComponentFixture<RecruitmentContributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitmentContributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
