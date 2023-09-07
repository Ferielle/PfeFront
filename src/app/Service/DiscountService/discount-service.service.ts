import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscountServiceService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/DiscountApi"
 
  getDiscountById(id):Observable<any>{
    return this.http.get(this.url+"/GetDiscountById?Id="+id);
  }
  add(Discount){
    return this.http.post(this.url+"/CreateDiscount",Discount);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAllDiscount`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeletDiscountById?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateDiscount/`, id);
  }
 
}
