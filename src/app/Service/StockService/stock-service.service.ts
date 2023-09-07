import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/StockApi"
 
  getStockById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  add(Stock){
    return this.http.post(this.url+"/Create",Stock);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeleteById?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateStock/`, id);
  }
 
}
