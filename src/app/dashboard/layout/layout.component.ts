import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  template: `
    <p>
      <a routerLink="home">home </a>
      <a routerLink="admin">admin</a>
      <button (click)="logout()">logout</button>
      <router-outlet></router-outlet>
    </p>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  logout() {
    this._authService.logout();
  }

}
