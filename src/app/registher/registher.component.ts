import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {UserModel} from "../user-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registher',
  templateUrl: './registher.component.html',
  styleUrls: ['./registher.component.css']
})
export class RegistherComponent {

  msg:string="";
  registerfomref=new FormGroup({
    firstname:new FormControl("",[Validators.required]),
    lastname:new FormControl("",[Validators.required]),
    username:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required,Validators.minLength(8)])
  })

  constructor(public userservice:UserService,public router:Router) {
  }

  registeruser(){

    let registerdata=this.registerfomref.value;
    let user=new UserModel(registerdata.firstname+"",registerdata.lastname+"",registerdata.username+"",registerdata.password+"");
     if(this.userservice.addUser(user)==true)
     {
       this.router.navigate(["login"])
     }
     else
     {
       this.msg="user Already Exit";
     }

  }


}
