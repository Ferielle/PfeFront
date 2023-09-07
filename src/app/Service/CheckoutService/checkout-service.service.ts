import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutServiceService {
  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/CheckApi"
 
  getCheckoutById(id):Observable<any>{
    return this.http.get(this.url+"/GetCheckById?Id="+id);
  }
  add(Checkout){
    return this.http.post(this.url+"/CreateCheck",Checkout);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAllCheck`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeletCheckById?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateCheckout/`, id);
  }
 
}
