import {Component, Input} from '@angular/core';
import { PostsUsers} from "../../Model/model";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  @Input() elements: PostsUsers[] = [];
}
