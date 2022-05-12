import { TestBed } from '@angular/core/testing';

import { TickettwoService } from './tickettwo.service';

describe('TickettwoService', () => {
  let service: TickettwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TickettwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
