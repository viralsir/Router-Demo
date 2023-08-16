import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  username:string="";
  constructor(public activeroute:ActivatedRoute) {
      this.activeroute.params.subscribe(data=>this.username=data["uname"])
  }



}
