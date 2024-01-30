import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Discount } from 'src/app/Model/Discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/DiscountApi"
 
  getDiscountById(id):Observable<number[]>{
    return this.http.get<number[]>(this.url+"/GetDiscountById?Id="+id);
  }
  add(Discount){
    return this.http.post(this.url+"/CreateDiscount",Discount);
  }

  getAll() :Observable<Discount[]>{
    return this.http.get<Discount[]>(`${this.url}/GetAllDiscounts`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeletDiscountById?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateDiscount/`, id);
  }
 
}
