import { TestBed, inject } from '@angular/core/testing';

import { TheService } from './the.service';

describe('TheService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheService]
    });
  });

  it('should be created', inject([TheService], (service: TheService) => {
    expect(service).toBeTruthy();
  }));
});
