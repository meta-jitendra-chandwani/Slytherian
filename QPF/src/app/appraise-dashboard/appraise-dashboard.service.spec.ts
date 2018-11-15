import { TestBed } from '@angular/core/testing';

import { AppraiseDashboardService } from './appraise-dashboard.service';

describe('AppraiseDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppraiseDashboardService = TestBed.get(AppraiseDashboardService);
    expect(service).toBeTruthy();
  });
});
