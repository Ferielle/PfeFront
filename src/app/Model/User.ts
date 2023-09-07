export class User{
    id:number;
    username:string;
    password:string;
    firstname:string;
    lastname:string;
  
  
  }
  export class addUser{
  
    cin:string;
    plainpassword:string;
    adress:string;
    email: string;
      firstname: string;
    lastname: string;
    birthday: Date;
  
  }
  
  export class UserById{
    id:number;
    cin:string;
    password:string;
    roles:string[];
    lastname:string;
    firstname:string;
    birthday:Date;
    adress:string;
    email:string;
  
  }