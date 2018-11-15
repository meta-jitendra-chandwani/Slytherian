import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySkillDevelopmentComponent } from './summary-skill-development.component';

describe('SummarySkillDevelopmentComponent', () => {
  let component: SummarySkillDevelopmentComponent;
  let fixture: ComponentFixture<SummarySkillDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummarySkillDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummarySkillDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
