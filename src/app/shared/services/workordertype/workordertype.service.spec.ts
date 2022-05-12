import { TestBed } from '@angular/core/testing';

import { WorkordertypeService } from './workordertype.service';

describe('WorkordertypeService', () => {
  let service: WorkordertypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkordertypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
