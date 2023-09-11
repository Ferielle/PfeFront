import { Component } from '@angular/core';
import { ProductImage } from 'src/app/Model/ProductImage';
import { ProductImageService } from 'src/app/Service/ProductImageService/product-image-service.service';

@Component({
  selector: 'app-listproduitiage',
  templateUrl: './listproduitiage.component.html',
  styleUrls: ['./listproduitiage.component.css']
})
export class ListproduitiageComponent {
  prodimages: ProductImage[]= [];
  productsimage: { productImages: ProductImage[] } = { productImages: [] };

  constructor(private productimageservice: ProductImageService) {
   
  }
  loadProducts(): void {
    this.productimageservice.getProductimages().subscribe(
      (prodimages: ProductImage[]) => {
        console.log('Received prodimages:', prodimages); // Check the received data
        this.prodimages = prodimages;
        console.log('Assigned prodimages:', this.prodimages); // Check the assignment
        
        this.prodimages.forEach(p => {
        });
      },
      error => {
        console.error('Error fetching prodimages:', error);
      }
    );
  }
}
