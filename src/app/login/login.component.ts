import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {RequestService} from "../servis/request.service";

  interface Token {
  token?: string;
  error?: string;
}

interface Login {
  email: string;
  password: string;
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup ({});

  constructor(
    public fb: FormBuilder,
    private request: RequestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [ '',[ Validators.pattern(/^[0-9a-zA-Z\-_\.]{1,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{2,4}$/),
        Validators.required, Validators.email,],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  isLogined() {
    if (this.request.isLogined()) {
      this.router.navigate(['admin']);
    }
  }

  submit() {
    this.request.login<Token>('https://reqres.in/api/login', this.loginForm.value).subscribe((items: Token) =>{
      if ('token' in items && items.token !== undefined){
        this.request.setToken(items.token);
        this.router.navigate(['admin']);
      }
    }, (error) => {
      alert(error)
    })
  }

}
