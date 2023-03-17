import {Component, OnInit} from '@angular/core';

import {environment} from "../../../envaironment/environments";
import {RequestService} from "../../servis/request.service";
import {AllUsers, ChooseUsers} from "../../Model/model";



@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  allUsers: AllUsers[] = [];
  chooseUsers:ChooseUsers[] = [] ;

  ngOnInit(): void {
    this.setAllUsers()
    this.setChooseUsers()
  }


  constructor(private request: RequestService) {}

  setAllUsers(){
    this.request.getData<AllUsers[]>(environment.allUsers.get +'?_start=0&_end=5').subscribe((item) =>{
      this.allUsers=item;
    })
  }
  setChooseUsers(){
    this.request.getData<ChooseUsers[]>(environment.chooseUsers.get).subscribe((item) =>{
      this.chooseUsers=item;
    })
  }
}
