import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Model/Products';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  product: Products
  constructor(private productService: ProductsService,
    private sanitizer: DomSanitizer) {
    }

  ngOnInit(): void {
    this.loadProducts();

  }
  ngDoCheck() {

  }
  
  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).style.display = 'none';
  }
  
  textInput: string = '';
  imageData: string | undefined;

  convertTextToImage() {
    const imageContainer = document.querySelector('.image-container') as HTMLElement;

    if (imageContainer) {
      html2canvas(imageContainer).then(canvas => {
        this.imageData = canvas.toDataURL();
      });
    } else {
      console.error("Image container not found.");
    }
  }
  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Products[]) => {
        this.products = products;
        console.log(products)
        this.products.forEach(p => {
        })
      },
      error => {
        console.error('Error fetching products:', error);
        // Handle the error, show a message to the user, etc.
      }
    )
  }
  /*






implements OnInit  {
  items : Products[]=[];
  ProductInput: Products = {} as Products;
  constructor(private Productsservice : ProductsService,private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    
    this.Productsservice.getAll().subscribe
    (data => {
     this.items = data as Products[];
   });
}
fetchItems(){
this.Productsservice.getAll().subscribe
  (data => {
   this.items = data as Products[];
 });
 
}

addItem(Products: Products) {
  this.Productsservice.add(Products)
    .subscribe(
      (addedProduct: any) => {
        this.items.push(addedProduct);
        this.fetchItems();

      },
      (error: any) => {
        // Handle error if needed
        console.error(error);
      }
    );
    

}

deleteFunction(id: any): void {
  this.Productsservice.delete(id)

    .subscribe(
      () => {
        this.fetchItems();
console.log("success")        
},
      (error) => {
console.log("error")        
}
    );

}

}
*/
}