// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/Model/Cart';
import { MultipleCarts } from 'src/app/Model/MultipleCarts';
import { Products } from 'src/app/Model/Products';
import { ShoppingCart } from 'src/app/Model/ShoppingCart';
import { CartService } from 'src/app/Service/CartService/cart.service';
import { ProductsService } from 'src/app/Service/ProductsService/products-service.service';
import { CheckoutService } from '../../Service/CheckoutService/checkout-service.service';
import { Checkout } from '../../Model/Checkout';
import { ShoppingCartService } from 'src/app/Service/ShoppingCartService/shopping-cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:Cart;
  cartItems: MultipleCarts[] = [];
  ShoppingCartid: number;
  product:Products[];
  constructor(private shoppingcartservice: ShoppingCartService, private cartService: CartService,private productservice : ProductsService,private router:Router,private CheckoutService:CheckoutService) {
    
  }
  continueShopping() {
    this.router.navigate(['/home']);
  }
  /*continuetocheckout(Checkout:Checkout){
this.CheckoutService.add(Checkout).subscribe(data => {
  console.log(data);
});
this.router.navigate(['/checkout']);
  }*/
  ngOnInit(): void {
    this.loadCartItems();
  }
  getShoppingCartId(ShoppingCartid): void {    
    this.router.navigate(['/checkout'], { queryParams: { id: ShoppingCartid } });
  }

  loadCartItems(): void {
   
    this.cartService.getMultipleCarts(this.ShoppingCartid).subscribe(
      (items: MultipleCarts[]) => {
        this.cartItems = items;
      },
      (error) => {
        console.error('Error loading cart items:', error);
      }
    );}

  removeFromCart(id: number): void {
    // Assuming you have a method in CartService to remove an item from the cart
    this.cartService.delete(id).subscribe(
      () => {
        // Update the cart items after successful removal
        this.loadCartItems();
      },
      (error) => {
        console.error('Error removing item from cart:', error);
      }
    );
  }


  clearCart() {
    // Clear the cart content from localStorage
    localStorage.removeItem("cart");
  
    // Optionally, you can also update the cart content in your service if necessary
    this.cartService.clearCart().subscribe(data => {
      console.log(data);
    });
  }
  getimage(productId:number){
    this.productservice.getProductsById(productId).subscribe(data => {
data.Picture;
    });}
  


    
}
