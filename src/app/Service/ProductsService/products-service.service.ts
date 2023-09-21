import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/Model/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/ProductsApi"


 
 
  getProductsById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  add(Products){
    return this.http.post(this.url+"/Create",Products);
  }

  getProducts(): Observable<Products[]> {
    return this.http.get<Products[]>(this.url+"/GetAll");
  }
  delete(id) {
    return this.http.delete(this.url+"/Delete?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/Update/`, id);
  }
  getDefaultImage(): Observable<string> {
    return new Observable<string>(observer => {
      const defaultImageUrl = this.url+"/GetApidefaultimage"; // Replace with the actual default image URL
      observer.next(defaultImageUrl);
      observer.complete();
    });
  }


  uploadImageAndGetBinaryData(imageData: string): Observable<HttpResponse<Products>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      imageString: imageData // Replace with the field name expected by the backend
    };

    return this.http.post<Products>('https://fby.outsystemscloud.com/OnlineStore_BL/rest/Products/Create', body, {
      headers: headers,
      responseType: 'json',
      observe: 'response' // Observe the full response including headers
    });
  }

}
