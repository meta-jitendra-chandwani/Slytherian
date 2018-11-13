import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDevelopmentComponent } from './organization-development.component';

describe('OrganizationDevelopmentComponent', () => {
  let component: OrganizationDevelopmentComponent;
  let fixture: ComponentFixture<OrganizationDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
