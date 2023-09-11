import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductImage } from 'src/app/Model/ProductImage';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/ProductImageApi"
 
  getProductImageById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
 
  uploadImageAndGetBinaryData(imageData: string): Observable<HttpResponse<ProductImage>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      imageString: imageData // Replace with the field name expected by the backend
    };

    return this.http.post<ProductImage>('https://fby.outsystemscloud.com/OnlineStore_BL/rest/ProductImageApi/CreateImage', body, {
      headers: headers,
      responseType: 'json',
      observe: 'response' // Observe the full response including headers
    });
  }



  getDefaultImage(): Observable<string> {
    return new Observable<string>(observer => {
      const defaultImageUrl = this.url+"/GetApidefaultimage"; // Replace with the actual default image URL
      observer.next(defaultImageUrl);
      observer.complete();
    });
  }
    

  


  add(ProductImage){
    return this.http.post(this.url+"/Create",ProductImage);
    
  }
  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  getProductimages(): Observable<ProductImage[]> {
    return this.http.get<ProductImage[]>(this.url+"/GetAll");
  }
  delete(id) {
    return this.http.delete(this.url+"/Delete?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateProductImage/`, id);
  }
 
}
