import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryAccomplishmentComponent } from './summary-accomplishment.component';

describe('SummaryAccomplishmentComponent', () => {
  let component: SummaryAccomplishmentComponent;
  let fixture: ComponentFixture<SummaryAccomplishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryAccomplishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryAccomplishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
