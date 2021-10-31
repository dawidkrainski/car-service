import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

const cars_routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'cars'},
  { path: 'cars', component: CarsListComponent}
];


//www.carsservice.com/
// www.carsservice.com/cars
@NgModule({
  imports: [RouterModule.forRoot(cars_routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
