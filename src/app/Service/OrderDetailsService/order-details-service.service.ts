import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsDetailsServiceService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/OrderDetailsApi"
 
  getOrderDetailsById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  addUser(OrderDetails){
    return this.http.post(this.url+"/Create",OrderDetails);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeleteId?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/Update/`, id);
  }
 
}
