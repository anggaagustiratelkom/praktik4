import { TestBed } from '@angular/core/testing';

import { PraktikService } from './praktik.service';

describe('PraktikService', () => {
  let service: PraktikService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PraktikService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
