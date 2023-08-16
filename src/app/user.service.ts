import { Injectable } from '@angular/core';
import {UserModel} from "../user-model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  Users:Array<UserModel>=[]
  constructor() { }

  addUser(User:UserModel):boolean{

    if (this.Users.find(element=> element.username=User.username)==undefined)
    {
      this.Users.push(User);
      return true;
    }
    else {
      return false;
    }


  }





}
