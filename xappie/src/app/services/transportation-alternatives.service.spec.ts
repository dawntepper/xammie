import { TestBed } from '@angular/core/testing';

import { TransportationAlternativesService } from './transportation-alternatives.service';

describe('TransportationAlternativesService', () => {
  let service: TransportationAlternativesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportationAlternativesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
