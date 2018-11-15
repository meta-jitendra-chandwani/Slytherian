import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationBrandBuildingComponent } from './organization-brand-building.component';

describe('OrganizationBrandBuildingComponent', () => {
  let component: OrganizationBrandBuildingComponent;
  let fixture: ComponentFixture<OrganizationBrandBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationBrandBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationBrandBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
