import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { Products } from 'src/app/Model/Products';
import { ShoppingCartServiceService } from 'src/app/Service/ShoppingCartService/shopping-cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cart: Products[] = []; // Panier

  constructor(private Service: ShoppingCartServiceService) {} // Injection du service de panier

  ngOnInit() {
    // Utilisez le service de panier pour obtenir le contenu du panier
    this.cart = this.Service.getCart();
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
  
}
