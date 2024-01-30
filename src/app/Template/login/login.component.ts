import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { AuthenticationService } from 'src/app/Service/AuthentificationService/authentication.service';
import { UserService } from 'src/app/Service/AuthentificationService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user : User;
  constructor(private auth:AuthenticationService,private router:Router,private http:HttpClient,private userservice:UserService) { }

  ngOnInit(): void {
  }

  login(form){
    this.auth.login(
form
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
        this.reloadPage();
      }
    });
    
  }
  

    reloadPage() {
      setTimeout(()=>{
        window.location.reload();
      }, 100);
    }



}
