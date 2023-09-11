import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductImage } from 'src/app/Model/ProductImage';
import { Products } from 'src/app/Model/Products';
import { ProductImageService } from 'src/app/Service/ProductImageService/product-image-service.service';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  produit: Products; // Supposons que vous avez une classe Produit
  images: ProductImage[]; // Supposons que vous avez une classe ProdImage
  productForm: FormGroup;
    
  constructor(private productService: ProductsService ,private fb: FormBuilder,
        private productImageService: ProductImageService) {}
        ngOnInit() {
          this.productForm = this.fb.group({
            Label: [''], // Ajoutez d'autres champs ici
            PriceOOt: [null],
            Quantity: [null],
            Discountid: [null],
            Brandid: [null],
            SubCategoryid: [null],
            ShopFeatureid: [null],
            VatId: [null],
          });
        }
      
  onSubmit() {
    const productData = this.productForm.value;

    // Appelez le service ProductService pour gérer les données du produit
    this.productService.add(productData).subscribe(
      (response: any) => {
        // Traitez la réponse de l'API du produit ici si nécessaire
        console.log('Réponse de l\'API du produit :', response);
      },
      (error) => {
        // Gérez les erreurs du service du produit ici
        console.error('Erreur lors de la soumission du formulaire du produit :', error);
      }
    );

    // Si vous avez des données d'image à gérer également, appelez le service ProductImageService
    // et effectuez des opérations similaires pour les images.
   
}}


