import { Component } from '@angular/core';
import {AllUsers, ListUsers} from "../../Model/model";
import {RequestService} from "../../servis/request.service";
import {environment} from "../../../envaironment/environments";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
ListUsers:ListUsers[]= [];


ngOnInit(): void {
  this.setListUsers ()
}

constructor(private request: RequestService) {}

setListUsers(){
  this.request.getData<ListUsers[]>(environment.listUsers.get).subscribe((item) =>{
    this.ListUsers =item;
  })
}
}
