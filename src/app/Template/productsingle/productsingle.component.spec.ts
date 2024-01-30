import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsingleComponent } from './productsingle.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

describe('ProductsingleComponent', () => {
  let component: ProductsingleComponent;
  let fixture: ComponentFixture<ProductsingleComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ProductsingleComponent],
      
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: convertToParamMap({ id: '1' }) } },
        },[HttpClient,HttpHandler]
      ]
    });
    fixture = TestBed.createComponent(ProductsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
