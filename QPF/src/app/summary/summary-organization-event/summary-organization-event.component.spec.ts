import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOrganizationEventComponent } from './summary-organization-event.component';

describe('SummaryOrganizationEventComponent', () => {
  let component: SummaryOrganizationEventComponent;
  let fixture: ComponentFixture<SummaryOrganizationEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryOrganizationEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryOrganizationEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
