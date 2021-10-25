import { TestBed } from '@angular/core/testing';

import { CheckClientGuard } from './check-client.guard';

describe('CheckClientGuard', () => {
  let guard: CheckClientGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckClientGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
