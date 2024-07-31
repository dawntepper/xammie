import { TestBed } from '@angular/core/testing';

import { PurchasingDecisionsService } from './purchasing-decisions.service';

describe('PurchasingDecisionsService', () => {
  let service: PurchasingDecisionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasingDecisionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
