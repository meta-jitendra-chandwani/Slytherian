import { TestBed } from '@angular/core/testing';

import { SelfDevelopmentService } from './self-development.service';

describe('SelfDevelopmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfDevelopmentService = TestBed.get(SelfDevelopmentService);
    expect(service).toBeTruthy();
  });
});
