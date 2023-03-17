import {Component, OnInit} from '@angular/core';
import {AllUsers} from "../../Model/model";
import {RequestService} from "../../servis/request.service";
import {environment} from "../../../envaironment/environments";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  allUsers: AllUsers[] = [];


  ngOnInit(): void {
    this.setAllUsers()
  }
  constructor(private request: RequestService) {}

  setAllUsers() {
    this.request.getData<AllUsers[]>(environment.allUsers.get + '?_start=5&_end=9').subscribe((item) => {
      this.allUsers = item;
    })
  }

}
