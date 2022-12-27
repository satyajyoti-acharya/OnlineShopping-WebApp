import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminData } from './admindata.model';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginModel: AdminData = new AdminData();
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    this._auth.loginAdmin(this.adminLoginModel).subscribe(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('usertype', 'admin');
      this._router.navigate(['/admin']);
    }, res => console.log(res));
  }

}
