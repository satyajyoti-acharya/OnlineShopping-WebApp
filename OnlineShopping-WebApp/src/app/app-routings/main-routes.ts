import { UserDashboardComponent } from "../user-dashboard/user-dashboard.component";
import { HomeComponent } from "../home/home.component";
import { LoginComponent } from "../login/login.component";
import { AdminDashboardComponent } from "../admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "../admin-login/admin-login.component";
import { SearchComponent } from "../search/search.component";
import { SignupComponent } from "../signup/signup.component";
import { BookFlightComponent } from "../book-flight/book-flight.component";
import { ManageBookingComponent } from "../manage-booking/manage-booking.component";
import { BookingHistoryComponent } from "../booking-history/booking-history.component";
//import { RegisterComponent } from "../register/register.component";

export const Mainroutes = [
  { path: '', component: HomeComponent },
  {path:'login',component: LoginComponent},
  {path:'register',component: SignupComponent},
  {path:'adminLogin',component: AdminLoginComponent},
  {path:'dashboard',component: UserDashboardComponent},
  {path:'admin',component: AdminDashboardComponent},
  { path: 'Home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'book-flight', component: BookFlightComponent },
  { path: 'manage-bookings', component: ManageBookingComponent },
  { path: 'booking-history', component: BookingHistoryComponent }
  // { path: 'Customer', loadChildren:()=>import('../customer/customer.module').then(m=>m.CustomerModule) },
  // { path: 'Supplier', loadChildren:()=>import('../supplier/supplier.module').then(m=>m.SupplierModule) }
];


