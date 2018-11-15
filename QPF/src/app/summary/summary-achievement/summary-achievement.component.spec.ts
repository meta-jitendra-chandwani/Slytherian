import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAchievementComponent } from './summary-achievement.component';

describe('SummaryAchievementComponent', () => {
  let component: SummaryAchievementComponent;
  let fixture: ComponentFixture<SummaryAchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
