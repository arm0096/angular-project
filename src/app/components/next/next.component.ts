import {Component, Input} from '@angular/core';
import {NextUsers} from "../../Model/model";

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent {
  @Input() elements: NextUsers[] = [];
}
