import { TestBed } from '@angular/core/testing';

import { MainserviesService } from './mainservies.service';

describe('MainserviesService', () => {
  let service: MainserviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainserviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
