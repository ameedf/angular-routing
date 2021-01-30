import { ChatComponent } from './components/chat/chat.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //    /cars 
  { path: "cars", component: CarsListComponent },

  //     /cars/xyz
  { path: "cars/:carName", component: CarDetailsComponent },
  {
    path: "customers",
    component: CustomersListComponent,
    children: [
      // /customers/add --> AddCustomerComponent
      { path: "add", component: AddCustomerComponent },

      // /customers/chat --> ChatComponent
      { path: "chat", component: ChatComponent },
    ]
  },
  { path: "my-cars", redirectTo: "/cars", pathMatch: 'full' },
  { path: "error", component: ErrorPageComponent },

  // localhost:4200
  { path: "", redirectTo: "/cars", pathMatch: 'full' },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
