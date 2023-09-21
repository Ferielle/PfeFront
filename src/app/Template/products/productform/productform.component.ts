import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from 'src/app/Model/Brand';
import { Discount } from 'src/app/Model/Discount';
import { Products } from 'src/app/Model/Products';
import { SubCategory } from 'src/app/Model/Subcategory';
import { BrandService } from 'src/app/Service/BrandService/brand.service';
import { DiscountServiceService } from 'src/app/Service/DiscountService/discount-service.service';
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
  selectedProductId: number | null = null;

   brands:Brand[];
   Label:String[] = [];


   SubCategories:SubCategory[];
   LabelSubCategory:String[]=[];
  constructor(
    private fb: FormBuilder,
    private productervice: ProductsService,
    private DiscountService :DiscountServiceService,
    private Brandservice:BrandService,
    private SubCategoryservice:SubCategoryService,

  ) {// Utilisez le service pour obtenir le discountPourcentage en fonction de l'Id
    
  
  }
  onProductSelected(productId: number) {
    this.selectedProductId = productId;
  }
  
disocountId:number;
  ngOnInit() {
    this.productForm = this.fb.group({
      Label: [''], // Ajoutez d'autres champs ici
      PriceOOt: [null],
      Quantity: [null],
      FileName: [''],
      Picture: [''],
      DefaultImage:[''],
      DiscountPourcentage: [null],    
      Brandid: [null],
      SubCategoryid: [null],
      ShopFeatureid: [null],
      VatId: [null]
    });
    this.DiscountService.getAll().subscribe((discounts: Discount[]) => {
      // Si discounts contient un tableau de rabais, vous pouvez extraire les pourcentages de réduction
      this.discountPourcentage = discounts.map(discount => discount.Pourcentage);
    });
    this.Brandservice.getAll().subscribe((brand: Brand[]) => {
      // Si discounts contient un tableau de rabais, vous pouvez extraire les pourcentages de réduction
      this.Label = brand.map(discount => discount.Label);
    });
       //el getall yezm trodha tekhu observable de type subcategory bech te9blou parametre f getallz
    this.SubCategoryservice.getAll().subscribe((SubCategories: SubCategory[]) => {
      // Si discounts contient un tableau de rabais, vous pouvez extraire les pourcentages de réduction
      this.LabelSubCategory = SubCategories.map(discount => discount.Label);
    });
  }

  
  
  

  onImageChange($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      const imageFile = inputElement.files[0];
      this.encodeImageFileAsBase64(imageFile);
    }
  }

  encodeImageFileAsBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.productForm.get('Picture')?.setValue(reader.result as string);
    };
    reader.readAsDataURL(file);
  }


  onSubmit() {
    const productData = this.productForm.value;

    this.productervice.add(productData).subscribe(
      (response: any) => {
        console.log('Réponse de l\'API du produit :', response);
        console.log('API Response:', );

        // Assuming the API response contains the ID, update the UI or perform actions based on it
        this.productForm.reset();
      },
      (error) => {
        console.error('Erreur lors de la soumission du formulaire du produit :', error);
      }
    );
    console.log('API Response:', );
  }
 
  }

  
  
  
  
  
