import { TestBed } from '@angular/core/testing';

import { DietaryChoicesService } from './dietary-choices.service';

describe('DietaryChoicesService', () => {
  let service: DietaryChoicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietaryChoicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
