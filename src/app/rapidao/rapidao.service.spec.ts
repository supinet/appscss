import { TestBed, inject } from '@angular/core/testing';

import { RapidaoService } from './rapidao.service';

describe('RapidaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RapidaoService]
    });
  });

  it('should be created', inject([RapidaoService], (service: RapidaoService) => {
    expect(service).toBeTruthy();
  }));
});
