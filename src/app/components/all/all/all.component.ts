import {Component, Input} from '@angular/core';
import {AllUsers} from "../../../Model/model";


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  @Input() elements: AllUsers[] = [];
}
