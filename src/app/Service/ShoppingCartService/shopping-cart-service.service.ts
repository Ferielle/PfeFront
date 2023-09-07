import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/ShoppingCartApi"
 
  getShoppingCartById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  add(ShoppingCart){
    return this.http.post(this.url+"/Create",ShoppingCart);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeleteId?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateShoppingCart/`, id);
  }
 
}
