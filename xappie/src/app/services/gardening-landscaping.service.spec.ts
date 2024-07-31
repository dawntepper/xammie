import { TestBed } from '@angular/core/testing';

import { GardeningLandscapingService } from './gardening-landscaping.service';

describe('GardeningLandscapingService', () => {
  let service: GardeningLandscapingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GardeningLandscapingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
