import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Model/Products';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
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
