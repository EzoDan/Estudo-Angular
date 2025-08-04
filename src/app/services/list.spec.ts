import { TestBed } from '@angular/core/testing';

import { List } from './list-service';

describe('List', () => {
  let service: List;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(List);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
