import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {

  private _searchUrl="https://localhost:44380/api/FlightSearch/SearchFlight";
  //private _searchUrl="https://localhost:44341/api/v1.0/flight/search";
  
  

  constructor(private http:HttpClient,private _router:Router) { }

  searchFlight(searchRequest:any): any
  {
    return this.http.post<any>(this._searchUrl,searchRequest);
  }
}
