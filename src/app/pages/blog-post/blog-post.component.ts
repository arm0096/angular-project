import {Component, OnInit} from '@angular/core';
import {NextUsers} from "../../Model/model";
import {RequestService} from "../../servis/request.service";
import {environment} from "../../../envaironment/environments";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
nextUsers:NextUsers[] = [];

  constructor(private request:RequestService) {
  }

  ngOnInit(): void{
    this.setNextUsers()
  }

  setNextUsers(){
    this.request.getData<NextUsers[]>(environment.nextUsers.get).subscribe((item) =>{
      this.nextUsers =item;
    })
  }
}

