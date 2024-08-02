import { TestBed } from '@angular/core/testing';

import { ClothingTextilesService } from './clothing-textiles.service';

describe('ClothingTextilesService', () => {
  let service: ClothingTextilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingTextilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
