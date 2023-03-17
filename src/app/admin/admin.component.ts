import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {RequestService} from "../servis/request.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private request: RequestService) {
  }

  logout() {
    if (confirm('Do you want to log out is admin page?')) {
      this.request.logout();
    }
  }
}
