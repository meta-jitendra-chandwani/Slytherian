import { TestBed } from '@angular/core/testing';

import { OrganizationBrandBuildingService } from './organization-brand-building.service';

describe('OrganizationBrandBuildingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationBrandBuildingService = TestBed.get(OrganizationBrandBuildingService);
    expect(service).toBeTruthy();
  });
});
