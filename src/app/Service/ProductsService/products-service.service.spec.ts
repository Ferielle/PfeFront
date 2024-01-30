import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DiscountService } from '../DiscountService/discount-service.service';
import { SubCategoryService } from '../SubCategoryService/sub-category-service.service';
import { BrandService } from '../BrandService/brand.service';
import { HttpClient } from '@angular/common/http';


describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule],providers:[ ProductsService,
     DiscountService,
      BrandService,
      SubCategoryService,HttpClient]
    });
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
