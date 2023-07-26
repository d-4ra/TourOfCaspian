import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishesComponent } from './dishes/dishes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { DishSearchComponent } from './dish-search/dish-search.component';
import { AddDishComponent } from './add-dish/add-dish.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    DishesComponent,
    DishDetailComponent,
    MessagesComponent,
    DishSearchComponent,
    AddDishComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }