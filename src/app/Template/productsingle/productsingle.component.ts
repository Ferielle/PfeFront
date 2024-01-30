import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  productId: number|null;
  @Input() product:Products;

  ngOnInit() {
    
  }


constructor(){
  
  }
  
  
}