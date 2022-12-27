import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html'
})
export class MasterComponent implements OnInit {
  title = 'OnlineShopping-WebApp';

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    this._auth.logoutUser();
    this._router.navigate(['']);
  }

  LogggedIn(Input:boolean):boolean{
    if(Input){
      return this._auth.loggedIn();
    }
    else{
      return !this._auth.loggedIn();
    }
  }

  AdminLoggedIn(Input:boolean):boolean{
    if(Input){
      return this._auth.adminLoggedIn();
    }
    else{
      return !this._auth.adminLoggedIn();
    }
  }
}
