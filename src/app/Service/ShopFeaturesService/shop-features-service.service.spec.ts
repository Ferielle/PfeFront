import { TestBed } from '@angular/core/testing';

import { ShopFeaturesServiceService } from './shop-features-service.service';

describe('ShopFeaturesServiceService', () => {
  let service: ShopFeaturesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopFeaturesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
