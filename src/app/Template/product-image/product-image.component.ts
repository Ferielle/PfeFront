import { HttpResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { ProductImage } from 'src/app/Model/ProductImage';
import { Products } from 'src/app/Model/Products';
import { ProductImageService } from 'src/app/Service/ProductImageService/product-image-service.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() produit: Products; // Propriété d'entrée pour le produit
  @Input() images: ProductImage[]; // Propriété d'entrée pour les images

  @Input() FileName: string;
  @Input() Binarydata: string;
  @Input() URL: string;
  @Input() Picture: string;

  angForm: FormGroup;
  formData = {
    FileName: '',
    Binarydata: '',
    URL: '',
    Picture: '' ,
    defaultImageUrl$:''// Will be initialized with the default image URL
  };
  defaultImageUrl$: Observable<string>; // Observable to hold the default image URL
  prodimages: ProductImage[]= [];
  productsimage: { productImages: ProductImage[] } = { productImages: [] };

  constructor(private productimageservice: ProductImageService) {
    this.productimageservice.getDefaultImage().subscribe(
      (defaultImage: string) => {
        this.formData.Picture = defaultImage;
      },
      error => {
        console.error('Error fetching default image:', error);
        // Handle the error, set a default value, or show a message to the user
      }
    );
  }
  onImageChange($event: Event) {
    const inputElement = $event.target as HTMLInputElement;
  
    if (inputElement.files && inputElement.files[0]) {
      // Access the selected file
      const imageFile = inputElement.files[0];
  
      // You can perform actions with the selected image file here.
      // For example, you can encode it as a base64 string.
      this.encodeImageFileAsBase64(imageFile);
    }
  }
  
  generatedImage: string;

  generateImage() {
    // Assuming you have generated the SVG content as a string
    this.generatedImage = '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="50"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml">Hello, Angular!</div></foreignObject></svg>';
  }
  ngOnInit() {
    this.loadProducts();
    this.defaultImageUrl$ = this.productimageservice.getDefaultImage();
  }

  encodeImageFileAsBase64(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      this.formData.Picture = reader.result as string;
    };
    reader.readAsDataURL(file);
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
  

  onSubmit() {
    console.log('Form submitted:', this.formData);
    
    // Call your service's method to send the form data to the API
    this.productimageservice.add(this.formData).subscribe(
      (response: any) => {
        
        // Handle the response from the API if needed
        console.log('API Response:', response);
        // Additional processing if needed
      },
      error => {
        console.error('Error submitting form:', error);
        // Handle the error, show a message to the user, etc.
      }
    );
  }
}
