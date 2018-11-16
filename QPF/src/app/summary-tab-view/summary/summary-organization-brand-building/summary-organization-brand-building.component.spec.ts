import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryOrganizationBrandBuildingComponent } from './summary-organization-brand-building.component';

describe('SummaryOrganizationBrandBuildingComponent', () => {
  let component: SummaryOrganizationBrandBuildingComponent;
  let fixture: ComponentFixture<SummaryOrganizationBrandBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryOrganizationBrandBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryOrganizationBrandBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
