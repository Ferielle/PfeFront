import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShoppingCart } from 'src/app/Model/ShoppingCart';
import { CartService } from '../CartService/cart.service';
import { Products } from 'src/app/Model/Products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private shoppingCart: ShoppingCart[] = [];
  constructor(private http: HttpClient) {}

  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/ShoppingCartApi"

  

  getAll() : Observable<ShoppingCart[]>{
    return this.http.get<ShoppingCart[]>(this.url+"/GetAll");
  }
  /*calculateTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.Quantity * item.ProductId, 0);
  }*/

  getshoppingCartById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?id="+id);
  }
  delete(id) {
    return this.http.delete(this.url+"/Delet?Id="+id);
  }
 

}
