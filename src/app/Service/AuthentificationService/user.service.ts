/*
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url="http://127.0.0.1:8000/api/users"


  getUserByUsername(username){
  return  this.http.get(this.url+"?cin="+username)
  }

  addUser(user){
    return this.http.post(this.url,user);
  }


  getUserById(id){
    return this.http.get(this.url+"/"+id)
  }

  updateUser(){
    
  }
}
*/