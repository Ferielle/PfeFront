import { TestBed } from '@angular/core/testing';

import { ProductDetailsService } from './product-details-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductDetailsService', () => {
  let service: ProductDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
