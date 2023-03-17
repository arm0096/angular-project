import {Component, OnInit} from '@angular/core';
import {RequestService} from "../../servis/request.service";
import {environment} from "../../../envaironment/environments"
import {ChooseUsers, ListUsers, PostsUsers} from "../../Model/model";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
chooseUsers: ChooseUsers[] =[];
listUsers: ListUsers [] =[];
  postsUsers:PostsUsers [] =[];
constructor(private request:RequestService) {
}
ngOnInit(): void {
  this.setChooseUsers();
  this.setListUsers();
  this.setPostsUsers()
}
setChooseUsers(){
  this.request.getData<ChooseUsers[]>(environment.chooseUsers.get).subscribe((item) =>{
    this.chooseUsers=item;
  })
}
setListUsers() {
  this.request.getData<ListUsers[]>(environment.listUsers.get + '?_limit=4').subscribe((item) =>{
    this.listUsers=item;
  })
}

 setPostsUsers() {
    this.request.getData<PostsUsers[]>(environment.postsUsers.get).subscribe((item) =>{
      this.postsUsers =item;
    })
  }
}
