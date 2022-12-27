import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookingHistory } from './booking-history.model';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  private _bookingHistoryUrl="https://localhost:44306/api/FlightBooking/GetBookingHistory/";
  bookingHistoryResponse: Array<BookingHistory> = new Array<BookingHistory>();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadBookingHistory();
  }

  loadBookingHistory() {
    var emailID = localStorage.getItem('emailId');
    this.http.get(this._bookingHistoryUrl + emailID?.toString()).subscribe(res => this.GetFromServer(res));
  }

  GetFromServer(res: any){
    this.bookingHistoryResponse = res;
    
    console.log(this.bookingHistoryResponse);
  }

}
