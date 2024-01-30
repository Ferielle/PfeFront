import { TestBed } from '@angular/core/testing';

import { RandomGuard } from './random.guard';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RandomGuard', () => {
  let guard: RandomGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    guard = TestBed.inject(RandomGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
