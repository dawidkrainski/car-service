import { Injectable } from '@angular/core';
import {Car} from "./models/car";
import { Observable } from 'rxjs/';
import { HttpClient} from '@angular/common/http';


@Injectable()
export class CarsService {
  private apiUrl = "http://localhost:3000/api/cars";
  constructor(private http : HttpClient) { }

getCars() : Observable<Car[]> {

  return this.http.get<Car[]>(this.apiUrl)

  }

getCar(id : number) : Observable<Car> {

  return this.http.get<Car>(this.apiUrl + `/${id}`)

  }

addCar(data: any) : Observable<Car> {
   return this.http.post<Car>(this.apiUrl , data)
}

updateCar(id : number, data: any) : Observable<Car> {

  return this.http.put<Car>(this.apiUrl + `/${id}`, data)

  }

removeCar(id : number) : Observable<Car> {

  return this.http.delete<Car>(this.apiUrl + `/${id}`)

  }
}
