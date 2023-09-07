import { TestBed } from '@angular/core/testing';
import { ProductImageService } from './product-image-service.service';


describe('ProductImageServiceService', () => {
  let service: ProductImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
