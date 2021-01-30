import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './components/cars-list/cars-list.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { ChatComponent } from './components/chat/chat.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CustomersListComponent,
    ErrorPageComponent,
    CarDetailsComponent,
    ChatComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
