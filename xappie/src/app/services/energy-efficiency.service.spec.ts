import { TestBed } from '@angular/core/testing';

import { EnergyEfficiencyService } from './energy-efficiency.service';

describe('EnergyEfficiencyService', () => {
  let service: EnergyEfficiencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergyEfficiencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
