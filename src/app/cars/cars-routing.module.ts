import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarResolve } from './car-resolve.service';


const routes: Routes = [
  { path: 'cars/:id',
   component: CarDetailsComponent as any,
    resolve: { car: CarResolve }

  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
