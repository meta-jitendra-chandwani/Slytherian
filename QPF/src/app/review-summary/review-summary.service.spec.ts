import { TestBed } from '@angular/core/testing';

import { ReviewSummaryService } from './review-summary.service';

describe('ReviewSummaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReviewSummaryService = TestBed.get(ReviewSummaryService);
    expect(service).toBeTruthy();
  });
});
