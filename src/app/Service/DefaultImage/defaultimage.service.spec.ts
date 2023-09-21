import { TestBed } from '@angular/core/testing';

import { DefaultimageService } from './defaultimage.service';

describe('DefaultimageService', () => {
  let service: DefaultimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefaultimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
