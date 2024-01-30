import { TestBed } from '@angular/core/testing';
import { SubCategoryService } from './sub-category-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('SubCategoryService', () => {
  let service: SubCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({    imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SubCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
