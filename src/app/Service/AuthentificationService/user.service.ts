import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  url="https://fby.outsystemscloud.com/OnlineStore_BL/rest/UsersApi/"


  getUserByUsername(Emailaddress){
  return  this.http.get(this.url+"?Emailaddress="+Emailaddress)
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
