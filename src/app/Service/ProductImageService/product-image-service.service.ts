import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/ProductImageApi"
 
  getProductImageById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  Upload(imageData: FormData){
    const headers = new HttpHeaders();
    // Set the 'Content-Type' to 'multipart/form-data'
    headers.set('Content-Type', 'multipart/form-data');
    // Make the POST request with the specified headers
  
    return this.http.post(this.url+"/Create",imageData, { headers: headers });
  }
  add(ProductImage){
    return this.http.post(this.url+"/Create",ProductImage);
  }
  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  delete(id) {
    return this.http.delete(this.url+"/Delete?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateProductImage/`, id);
  }
 
}
