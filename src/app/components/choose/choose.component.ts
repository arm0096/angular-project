import {Component, Input} from '@angular/core';
import {ChooseUsers} from "../../Model/model";

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent {
@Input() elements: ChooseUsers[] = [];
}
