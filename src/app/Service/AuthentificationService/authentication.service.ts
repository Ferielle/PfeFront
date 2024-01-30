import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { UserService } from './user.service';
import { User } from 'src/app/Model/User';
import { Token } from 'src/app/Model/Token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  loginUrl="https://fby.outsystemscloud.com/OnlineStore_BL/rest/UsersApi/Login";

  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  public loggedUser;


  constructor(private http: HttpClient,private userservice: UserService) {}

  loggedInUser(){
    return this.loggedUser;
  }
  loggedInUserId(): number | null {
    return this.loggedUser ? this.loggedUser.id : null;
  }

  // getLoggedInUser(){

  //   return localStorage.getItem("user");
  // }

  login(user:User): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, user)
      .pipe(
        tap(tokens => this.doLoginUser(user.Emailaddress, tokens)),
        mapTo(true),
        catchError(error => {
          alert(error.message);
          return of(false);
        }));
  }

  logout() {
    this.doLogoutUser();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
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
      this.loggedUser.address=data[0].address;
      this.loggedUser.FirstName=data[0].FirstName;
      this.loggedUser.LastName=data[0].LastName;
      this.loggedUser.Emailaddress=data[0].Emailaddress;
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
    localStorage.setItem(this.JWT_TOKEN, tokens.EncodedToken);
    //localStorage.setItem(this.REFRESH_TOKEN, tokens.refresh_token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    //localStorage.removeItem(this.REFRESH_TOKEN);
  }


}
