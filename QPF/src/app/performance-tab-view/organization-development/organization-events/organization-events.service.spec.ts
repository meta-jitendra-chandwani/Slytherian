import { TestBed } from '@angular/core/testing';

import { OrganizationEventsService } from './organization-events.service';

describe('OrganizationEventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationEventsService = TestBed.get(OrganizationEventsService);
    expect(service).toBeTruthy();
  });
});
