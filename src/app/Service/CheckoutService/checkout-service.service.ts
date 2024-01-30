import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Checkout } from 'src/app/Model/Checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/CheckApi";

  getCheckoutById(id: number): Observable<Checkout[]> {
  // Vérifie si l'ID est défini avant de le convertir en chaîne
  const idString = id !== undefined ? id.toString() : '';

  return this.http.get<Checkout[]>(`${this.url}/GetCheckById`, { params: { id: idString } });
}


  
  add(Check){
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(this.url+"/CreateCheck",Check,{
      headers: headers,
      responseType: 'json',
      observe: 'response' // Observe the full response including headers
    });
  }

  getAll() {
    return this.http.get(`${this.url}/GetAllChecks`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeletCheckById?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateCheckout/`, id);
  }
 
}
