export class FlightBookRequest {
        emailId: string = '';
        name: string = '';
        noOfSeats: number = 0;
        bookedBy: string ='';
        bookedOn: string = '';
        inventoryId: number =0;
        discountUsed: string = '';
        userId: number = 0;
        seatType: string = '';
        passengerDetailList: PassengerDetails[]=[];
}
export class PassengerDetails {
    bookingHistoryId: number = 0;
    firstName: string = '';
    lastName: string = '';
    gender: string = '';
    age: number = 0;
    meal: string = '';
    seatNumber: string = '';
}