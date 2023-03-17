import { TestBed } from '@angular/core/testing';

import { AutorGuard } from './autor.guard';

describe('AutorGuard', () => {
  let guard: AutorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
