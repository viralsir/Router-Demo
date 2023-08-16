import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  msg:string="";
  loginformRef=new FormGroup({
    username : new FormControl(),
    password : new FormControl()

  })
  constructor(public router:Router) {
  }
  checkLogin(){
      let logindata=this.loginformRef.value;
      if(logindata.username=="vimal" && logindata.password=="123")
      {
        //this.msg="login successfull";
        this.router.navigate(['home',logindata.username])

      }
      else{
        this.msg="username or password is wrong";
      }
      this.loginformRef.reset();
  }

}
