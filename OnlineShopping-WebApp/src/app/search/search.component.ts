import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FlightSearchService } from '../services/flight-search.service';
import { SearchResponse } from './search-response.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchRequest: any;
  searchResult: any;
  searchResponse: SearchResponse[]=[];
  IsRoundTrip: boolean = false;
  minDate: Date = new Date();
  isSearchClicked: boolean = false;
  private _searchUrl="https://localhost:44380/api/FlightSearch/SearchFlight";

  constructor(private flightSearchService: FlightSearchService,private http:HttpClient,private _router:Router, private _auth: AuthService) { }

  ngOnInit(): void {
  }

  toggleRoundTrip(input: boolean): void {
    this.IsRoundTrip = input;
    this.searchRequest.isRoundTrip = input;
  }


  onSearchClick() {
    console.log(this.searchRequest);
    var searchReq: any;
    if(this.IsRoundTrip){
      searchReq = {
        departure : this.searchRequest.fromCity,
        destination : this.searchRequest.toCity,
        departureDateTime : this.searchRequest.departureDate,
        returnDateTime : this.searchRequest.returnDate,
        isRoundTrip :  this.searchRequest.isRoundTrip
      }

    }
    else{
      searchReq = {
        departure : this.searchRequest.fromCity,
        destination : this.searchRequest.toCity,
        departureDateTime : this.searchRequest.departureDate,
        isRoundTrip :  this.searchRequest.isRoundTrip
      }
    }
    console.log(searchReq);
    return this.http.post<any>(this._searchUrl,searchReq).subscribe(res=>this.mapSearchResult(res));
    //this.searchResult = this.flightSearchService.searchFlight(searchReq);
    console.log(this.searchResult);
    this.isSearchClicked = true;
  }

  mapSearchResult(res: any){
    this.searchResponse = res;
    console.log(this.searchResponse);
  }

  hasError(typeofvalidator:string,controlname:string):Boolean{
    return this.searchRequest.formSearchGroup.controls[controlname].hasError(typeofvalidator);
  }

  onBookClick(resp: SearchResponse) {
    var isLoggedIn = this._auth.loggedIn();
    if(isLoggedIn){
      this._router.navigate(['/book-flight/']);
    }
    else{
      this._router.navigate(['/login']);
    }
    
  }


}
