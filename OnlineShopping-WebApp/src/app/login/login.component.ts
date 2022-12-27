import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AdminData } from './admindata.model';
import { UserData } from './userdata.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: UserData = new UserData();
  adminLoginModel: AdminData = new AdminData();
  userType:string = "Customer";
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  Login() {
    if(this.userType=="Customer"){
      this._auth.loginUser(this.loginModel).subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('loginId', this.loginModel.loginId);
        localStorage.setItem('usertype', this.userType);
        this._router.navigate(['/dashboard']);
      }, res => console.log(res));
    }

    if(this.userType=="Admin"){
      this.adminLoginModel.adminId=this.loginModel.loginId;
      this.adminLoginModel.password=this.loginModel.password;
      this._auth.loginAdmin(this.adminLoginModel).subscribe(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('adminId', this.adminLoginModel.adminId);
        localStorage.setItem('usertype', this.userType);
        this._router.navigate(['/admin']);
      }, res => console.log(res));
    }
    
  }

}
