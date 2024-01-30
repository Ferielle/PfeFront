import { TestBed } from '@angular/core/testing';

import { DefaultimageService } from './defaultimage.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DefaultimageService', () => {
  let service: DefaultimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DefaultimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
