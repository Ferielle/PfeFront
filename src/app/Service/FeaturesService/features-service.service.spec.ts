import { TestBed } from '@angular/core/testing';

import { FeatureService } from './features-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeatureService', () => {
  let service: FeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
