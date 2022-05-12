import { TestBed } from '@angular/core/testing';

import { SubservService } from './subserv.service';

describe('SubservService', () => {
  let service: SubservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
