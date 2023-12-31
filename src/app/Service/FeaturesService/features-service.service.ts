import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feature } from 'src/app/Model/Feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/FeatureApi"
 
  getById(id):Observable<any>{
    return this.http.get(this.url+"/GetById?Id="+id);
  }
  add(){
    return this.http.post(this.url+"/Create",Feature);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAll`);
  }
  delete(id) {
    return this.http.delete(this.url+"/Delete?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/Update/`, id);
  }
 
}
