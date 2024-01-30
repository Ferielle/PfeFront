import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/Model/Products';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';
import html2canvas from 'html2canvas';
import { ShoppingCartService } from 'src/app/Service/ShoppingCartService/shopping-cart-service.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { Cart } from 'src/app/Model/Cart';
import { AuthenticationService } from 'src/app/Service/AuthentificationService/authentication.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  textInput: string = '';
  imageData: string | undefined;
  quantity: number = 0;
  constructor(
    private productService: ProductsService,
    private cartservice: CartService,
    private router: Router,
    
  ) {



  }
  redirectToCart() {
    // Navigate to the route where you display the cart content
    this.router.navigate(['/cart']); // Update 'cart' with the actual route path
  }
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (products: Products[]) => {
        this.products = products;
      },
      (error) => {
        console.error('Error fetching products:', error);
        // Consider adding user-friendly error handling/notification here
      }
    );
  }
  increment(): void {
    this.quantity++;
  }
  

  GetCartContent(){
    let cart =localStorage.getItem("cart");
    if(cart==null){
      return [];
    }else{
      return JSON.parse(cart);
    }

  }
  addToCart(productid: number) {
    let quantityInput: any | null;
    quantityInput = document.querySelector(`input[name="${productid}Quantity"]`);
    const quantity = parseInt(quantityInput.value, 10);
    let cart = new Cart(0, productid, quantity, 0);
  
    let cartcontent = this.GetCartContent();
    let foundProduct = cartcontent.find(p => p.id == productid);
  
    if (foundProduct !== undefined) {
      foundProduct.quantity++;
    } else {
      // If the product is not found, add it to the cart
      cartcontent.push({
        id: productid,
        quantity: 1,
      });
    }
  
    // Save the updated cart content to localStorage
    localStorage.setItem("cart", JSON.stringify(cartcontent));
  
    // Call the addToCart method from CartService
    this.cartservice.addToCart(cart).subscribe(data => {
      console.log(data);
    });
  }
  

  public handleMissingImage(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  convertTextToImage(): void {
    const imageContainer = document.querySelector('.image-container') as HTMLElement;

    if (imageContainer) {
      html2canvas(imageContainer).then((canvas) => {
        this.imageData = canvas.toDataURL();
      });
    } else {
      console.error('Image container not found.');
    }
  }
}
