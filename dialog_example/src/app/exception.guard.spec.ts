import { TestBed } from '@angular/core/testing';

import { ExceptionGuard } from './exception.guard';

describe('ExceptionGuard', () => {
  let guard: ExceptionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ExceptionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
