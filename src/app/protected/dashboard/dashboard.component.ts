import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
    *{
      margin:15px;
    }
    `
  ]
})
export class DashboardComponent implements OnInit {

  get usuario() {
    return this.authservice.usuario;
  }

  constructor(
    private router: Router,
    private authservice:AuthService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authservice.logOut();
    this.router.navigateByUrl('/auth/login')
  }
}
