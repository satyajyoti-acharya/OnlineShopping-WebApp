import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SignUp } from './signup.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  singnupModel: SignUp = new SignUp();
  showSpinner: boolean = false;
  modalText:string="";
  modalHeader:string="";
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  Register() {
    if (this.singnupModel.userName == '' || this.singnupModel.emailId == '' || this.singnupModel.password == '') {
      window.alert("Please enter the username, emailId and password.")
      return;
    }
    let singnUpRequest = {
      userName: this.singnupModel.userName,
      emailId:this.singnupModel.emailId,
      password:this.singnupModel.password
    };
    this._auth.RegisterUser(singnUpRequest).subscribe(res => {window.alert("User registered successfully, please login to access your account"), this._router.navigate(['Login'])},
    err => {console.log(err)});

    this.singnupModel = new SignUp();
  }

  

  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.singnupModel.formRegisterGroup.controls[controlname].hasError(typeofvalidator);
  }

}
