import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <p>
      login works!
      <button (click)="login()">normal user log in</button>
      <button (click)="loginAdmin()">admin user log in</button>
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this._authService.login();
  }

  loginAdmin() {
    this._authService.loginAdmin();
  }
}
