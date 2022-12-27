import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  searchText: string ="";
  getData: Array<Products> = new Array<Products>();
  constructor(private adminService: AdminService,private http:HttpClient,private _router:Router, private _auth: AuthService) { }

  ngOnInit(): void {
    this.GetProducts();
  }

  GetProducts(){
    this.adminService.GetProducts().subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }

  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }

  ProductSearch(searchText: string){
    if(searchText!=""){
      this.adminService.ProductSearch(searchText).subscribe(res => this.GetFromServer(res), res=>console.log(res));
    }
    else{
      this.GetProducts();
    }
  }

}
