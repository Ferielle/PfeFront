import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/CategoryApi"
 
  getCategoryById(id):Observable<any>{
    return this.http.get(this.url+"/GetCategoryById?Id="+id);
  }
  add(category){
    return this.http.post(this.url+"/CreateCategory",category);
  }

  getAll() {
    return this.http.get(`${this.url}/GetAllCategories`);
  }
  delete(id) {
    return this.http.delete(this.url+"/DeletCategoryById?Id="+id);
  }

  update(id: any) {
    return this.http.put(`${this.url}/UpdateCatgegory/`, id);
  }
 
}
