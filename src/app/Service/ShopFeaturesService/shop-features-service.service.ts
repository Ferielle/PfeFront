import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopFeaturesService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/ShopFeaturesApi"
 
  getShopFeaturesById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  add(ShopFeatures){
    return this.http.post(this.url+"/Create",ShopFeatures);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeleteId?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateShopFeatures/`, id);
  }
 
}
