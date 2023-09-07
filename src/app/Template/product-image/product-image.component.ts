import { Component } from '@angular/core';
import { ProductImage } from 'src/app/Model/ProductImage';
import { ProductImageService } from 'src/app/Service/ProductImageService/product-image-service.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  items : ProductImage[];
  constructor(private ProductImage : ProductImageService){}

  ngOnInit(): void {
    this.ProductImage.getAll().subscribe( 
       (data => {
        this.items = data as ProductImage[];
        console.log(this.items);
              
      }));
      
}
onFileSelected(event: any) {
  const file = event.target.files[0];
  const formData = new FormData();
  formData.append('image', file, file.name);

  this.ProductImage.Upload(formData).subscribe(
    (response) => {
      // Handle the success response from OutSystems API (e.g., display image)
      console.log('Image uploaded successfully:', response);
    },
    (error) => {
      // Handle the error response (if any)
      console.error('Image upload failed:', error);
    }
  );
}
addItem(Productimage: any) {
  this.ProductImage.add(Productimage)
    .subscribe(
      (addedProduct: any) => {
        this.items.push(addedProduct);
        this.ngOnInit();

      },
      (error: any) => {
        // Handle error if needed
        console.error(error);
      }
    );
    

}
}
