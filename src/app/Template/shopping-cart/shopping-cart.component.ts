import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { Products } from 'src/app/Model/Products';
import { ShoppingCart } from 'src/app/Model/ShoppingCart';
import { ShoppingCartService } from 'src/app/Service/ShoppingCartService/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cart: ShoppingCart[] = []; // Panier

  constructor(private Service: ShoppingCartService) {} // Injection du service de panier
 
  ngOnInit(){
    // Use the shopping cart service to get the content of the cart
    this.Service.getAll().subscribe(
      (cart: ShoppingCart[]) => {
        this.cart = cart;
      },
      (error) => {
        console.error('Error fetching products:', error);
        // Consider adding user-friendly error handling/notification here
      }
    
    );
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
//doubt !!! 
  addToCart(cart: ShoppingCart) {
    this.cart.push(cart);
  }

  getCart(): ShoppingCart[] {
    console.log(this.cart)
    return this.cart;

  }
  
}
