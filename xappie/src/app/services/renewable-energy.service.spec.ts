import { TestBed } from '@angular/core/testing';

import { RenewableEnergyService } from './renewable-energy.service';

describe('RenewableEnergyService', () => {
  let service: RenewableEnergyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RenewableEnergyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
