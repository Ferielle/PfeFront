import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  

    constructor(private http:HttpClient) { }
    url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/BrandsApi"
   
    getBrandById(id):Observable<any>{
      return this.http.get(this.url+"/GetBrandById?Id="+id);
    }
    addBrand(Brand){
      return this.http.post(this.url+"/CreateBrand",Brand);
    }
  
    getAll() {
      return this.http.get(`${this.url}/GetAllBrands`);
    }
    delete(id) {
      return this.http.delete(this.url+"/DeletBrandById?Id="+id);
    }
  
    update(id: any) {
      return this.http.put(`${this.url}/UpdateBrand/`, id);
    }}