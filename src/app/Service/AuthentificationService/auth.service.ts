/*
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token } from '../Model/Token';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { addUser, User } from '../Model/User';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl="http://localhost:8000/api/login"
  refreshUrl="http://127.0.0.1:8000/api/token/refresh";
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public loggedUser;


  constructor(private http: HttpClient,private userservice: UserService) {}

  loggedInUser(){
    return this.loggedUser;
  }

  // getLoggedInUser(){

  //   return localStorage.getItem("user");
  // }

  login(user:User): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.username, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  refreshToken() {
    return this.http.post<any>(this.refreshUrl, {
      'refreshToken': this.getRefreshToken()
    }).pipe(tap((tokens: Token) => {
      this.storeJwtToken(tokens.token);
    }));
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN )|| '{}';
  }

  private doLoginUser(username: string, tokens: Token) {
    this.loggedUser=new User();
    //use JWT() for decode. Not jwt-decode() !!
          // let t: any;
          // t = JWT(tokens);
          // localStorage.setItem('currentUser', JSON.stringify(t.user));
    this.userservice.getUserByUsername(username).subscribe((data)=>{
      localStorage.setItem('id', JSON.stringify(data[0].id));
      this.loggedUser.id=data[0].id;
      this.loggedUser.username=data[0].cin;
      this.loggedUser.firstname=data[0].firstname;
      this.loggedUser.lastname=data[0].lastname;
      this.loggedUser.birthday=data[0].birthday;
      this.loggedUser.email=data[0].email;
      console.log(this.loggedUser.id);

      // this.loggedUser.id=data[0].id;
    });

    console.log(this.loggedUser);
    this.storeTokens(tokens);
  }

  private doLogoutUser() {

    this.loggedUser = null;
    this.removeTokens();
  }

  private getRefreshToken() {
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

  private storeTokens(tokens: Token) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
*/