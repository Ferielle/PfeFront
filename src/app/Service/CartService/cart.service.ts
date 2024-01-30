import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Cart } from 'src/app/Model/Cart';
import { ShoppingCart } from 'src/app/Model/ShoppingCart';
import { MultipleCarts } from 'src/app/Model/MultipleCarts';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart[] = [];
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/CartApi"
  constructor(private http: HttpClient) {}

  addToCart(cart: Cart): Observable<any> {
    console.log("I'm being called where the service is created!!");
    return this.http.post(this.url + "/CreateCart", cart).pipe(
      catchError(error => {
        console.error('Error adding to cart:', error);
        throw error;
      })
    );
  }
  clearCart(): Observable<any> {
    console.log("Clearing the cart!!");
    return this.http.delete(this.url + "/ClearCarts").pipe(
      catchError(error => {
        console.error('Error clearing the cart:', error);
        throw error;
      })
    );
  }
  
  
  getMultipleCarts(shoppingid): Observable<any[]> {
    return this.http.get<MultipleCarts[]>(this.url + "/MultipleCartsApi?shoppingid=" + shoppingid);
  }
  

  getCartById(id):Observable<any>{
    return this.http.get(this.url+"/GetCartById?id="+id);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeleteCarts?id="+id);
  }
  
}
