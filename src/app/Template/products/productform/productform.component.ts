import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/Model/Brand';
import { Discount } from 'src/app/Model/Discount';
import { Products } from 'src/app/Model/Products';
import { SubCategory } from 'src/app/Model/Subcategory';
import { BrandService } from 'src/app/Service/BrandService/brand.service';
import { DiscountService } from 'src/app/Service/DiscountService/discount-service.service';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';
import { SubCategoryService } from 'src/app/Service/SubCategoryService/sub-category-service.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  productForm: FormGroup;
  defaultImageUrl$: Observable<string>; // Observable to hold the default image URL
  product: Products ;
  
  discount: Discount[];
  discountPourcentage: number[] = []; // Initialize the variable
  selectedProductId: number;

   brands:Brand[] = [];
   Label:String[] = [];
   SubCategorie:SubCategory[];
   LabelSubCategory:String[]=[];
  constructor(
    private fb: FormBuilder,
    private productervice: ProductsService,
    private DiscountService :DiscountService,
    private Brandservice:BrandService,
    private SubCategoryservice:SubCategoryService,

  ) {// Utilisez le service pour obtenir le discountPourcentage en fonction de l'Id
    
  
  }
  onProductSelected(productId: number) {
    this.selectedProductId = productId;
  }
  
disocountId:number;
  ngOnInit() {
    this.Brandservice.getAll().subscribe((brand: Brand[]) => {
      console.log('Brands:', brand);
      this.Label = brand.map(brand => brand.Label);
    });
    this.productForm = this.fb.group({
      Label: [''], // Ajoutez d'autres champs ici
      PriceOOt: [null],
      FileName: [''],
      Picture: [null],
      defaultimage:[null],
      DiscountId: [null],    
      BrandId: [null],
      SubCategoryId: [null],
      VatId: [null]
    });
    this.DiscountService.getAll().subscribe((discounts: Discount[]) => {
      this.discount=discounts;
    });
    this.Brandservice.getAll().subscribe((brand: Brand[]) => {
      this.brands = brand;
      console.log(this.brands);
    });
       //el getall yezm trodha tekhu observable de type subcategory bech te9blou parametre f getallz
    this.SubCategoryservice.getAll().subscribe((SubCategories: SubCategory[]) => {
      this.SubCategorie=SubCategories;
    });
  }

  
  
  

  onImageChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files[0]) {
      const imageFile = inputElement.files[0];
      this.encodeImageFileAsBase64(imageFile);
    }
  }
  

  encodeImageFileAsBase64(file: File) {
    const reader = new FileReader();
  
    reader.onloadend = () => {
      // Update the 'Picture' form control value with the base64-encoded image data
      this.productForm.get('Picture')?.setValue(reader.result);
    };
  
    reader.readAsDataURL(file);
  }


  onSubmit() {
    const productData = this.productForm.value;
    
    this.productervice.add(productData).subscribe(

      (response: any) => {
        console.log('Réponse de l\'API du produit :', response);
        console.log('API Response:', );
        console.log(productData);

        // Assuming the API response contains the ID, update the UI or perform actions based on it
        this.productForm.reset();
      },
      (error) => {
        console.log(productData);
        console.error('Erreur lors de la soumission du formulaire du produit :', error);
      }
    );
    console.log('API Response:', );
  }



  }

  
  
  
  
  
