import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {CoreModule} from './core-module/core.module'
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsModule } from './cars/cars.module';
import { CarsService } from "./cars/cars.service";
import { RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';
import { CarsRoutingModule } from './cars/cars-routing.module';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CarsModule,
    HttpClientModule,
    CoreModule,
    CarsRoutingModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
