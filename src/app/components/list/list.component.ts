import {Component, Input} from '@angular/core';
import {ListUsers} from "../../Model/model";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() elements: ListUsers[] = [];
}
