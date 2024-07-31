import { TestBed } from '@angular/core/testing';

import { WaterUsageService } from './water-usage.service';

describe('WaterUsageService', () => {
  let service: WaterUsageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterUsageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
