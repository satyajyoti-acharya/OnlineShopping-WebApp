import { Component, OnInit } from '@angular/core';
import { FlightBookRequest } from './flightBook-request.model';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {

  flightInventoryId: number = 0;
  flightBookRequest: FlightBookRequest = new FlightBookRequest();
  constructor() { }

  ngOnInit(): void {
  }

}
