import { TestBed } from '@angular/core/testing';

import { ElectronicsGadgetsService } from './electronics-gadgets.service';

describe('ElectronicsGadgetsService', () => {
  let service: ElectronicsGadgetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectronicsGadgetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
