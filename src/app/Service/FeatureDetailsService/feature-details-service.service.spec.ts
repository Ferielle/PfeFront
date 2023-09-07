import { TestBed } from '@angular/core/testing';

import { FeatureDetailsServiceService } from './feature-details-service.service';

describe('FeatureDetailsServiceService', () => {
  let service: FeatureDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
