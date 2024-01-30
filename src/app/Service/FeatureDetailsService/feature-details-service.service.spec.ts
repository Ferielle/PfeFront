import { TestBed } from '@angular/core/testing';

import { FeatureDetailsService } from './feature-details-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('FeatureDetailsService', () => {
  let service: FeatureDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(FeatureDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
