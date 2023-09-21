import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';

@Component({
  selector: 'app-productsingle',
  templateUrl: './productsingle.component.html',
  styleUrls: ['./productsingle.component.css']
})
export class ProductsingleComponent implements OnInit {
  productId: String|null;
  product:Products | undefined;
  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');    
    if (this.productId) {
      this.productservice.getProductsById(this.productId).subscribe((data: Products) => {
        // Lorsque les données du produit sont disponibles, stockez-les dans la variable product
        this.product = data;
      });
    }
  }


constructor(private route: ActivatedRoute,private  productservice :ProductsService){
  
  }
  
  
}