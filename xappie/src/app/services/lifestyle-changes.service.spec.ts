import { TestBed } from '@angular/core/testing';

import { LifestyleChangesService } from './lifestyle-changes.service';

describe('LifestyleChangesService', () => {
  let service: LifestyleChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LifestyleChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
