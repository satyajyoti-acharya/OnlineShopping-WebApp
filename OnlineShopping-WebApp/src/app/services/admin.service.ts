import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _addProductUrl = "https://localhost:44360/api/v1.0/shopping/addproduct";
  private _updateProductStatusUrl = "https://localhost:44360/api/v1.0/shopping/update/";
  private _getProductsUrl = "https://localhost:44360/api/v1.0/shopping/all";
  private _deleteProductUrl="https://localhost:44360/api/v1.0/shopping/delete/";
  private _productSearchUrl="https://localhost:44360/api/v1.0/shopping/product/search/";
  constructor(private http:HttpClient,private _router:Router) { }

  AddProduct(addProductRequest: any){

    return this.http.post<any>(this._addProductUrl,addProductRequest);

  }

  UpdateProductStatus(productId: any, productName: any){

    return this.http.patch(this._updateProductStatusUrl+productId+'/'+productName,'');

  }

  GetProducts()
  {
    return this.http.get(this._getProductsUrl);
  }

  DeleteProduct(productId: any, productName: any){

    return this.http.delete(this._deleteProductUrl+productId+'/'+productName);

  }

  ProductSearch(prodName: string){
    return this.http.get(this._productSearchUrl+prodName);
  }
}
