import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from '../models/products';
import { AdminService } from '../services/admin.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  activeTab: string ="AddProduct";
  getData: Array<Products> = new Array<Products>();
  addProductRequest: Products = new Products();
  constructor(private adminService: AdminService,private http:HttpClient,private _router:Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  onViewProductTabClick(){
    this.activeTab = "ViewProduct";
    this.GetProducts();
  }

  onAddProductTabClick(){
    this.activeTab ="AddProduct";
  }

  GetProducts(){
    this.adminService.GetProducts().subscribe(res => this.GetFromServer(res), res=>console.log(res));
  }

  AddProducts(prodRequest: Products){
    prodRequest.status="Available";
    this.adminService.AddProduct(prodRequest).subscribe(res=> console.log(res),res=>console.log(res));
    window.alert("Product added successfully");
    this.addProductRequest=new Products();
  }

  updateProdStatus(prod: Products){
    this.adminService.UpdateProductStatus(prod.id,prod.productName).subscribe(res=> console.log(res),res=>console.log(res));
    window.alert("Product Status updated successfully");
    this.GetProducts();
  }

  deleteProd(prod: Products){
    this.adminService.DeleteProduct(prod.id,prod.productName).subscribe(res=> console.log(res),res=>console.log(res));
    window.alert("Product Deleted successfully");
    this.GetProducts();
  }

  GetFromServer(res:any)
  {
    console.log(res);
    this.getData=res;
  }

}
