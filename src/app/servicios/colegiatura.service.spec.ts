import { TestBed } from '@angular/core/testing';

import { ColegiaturaService } from './colegiatura.service';

describe('ColegiaturaService', () => {
  let service: ColegiaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColegiaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
