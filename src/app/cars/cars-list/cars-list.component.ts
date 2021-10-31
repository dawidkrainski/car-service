import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from "../cars.service";
import {Car} from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
@Component({
  selector: 'cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {
  @ViewChild("totalCostRef") totalCostRef! : TotalCostComponent;
  totalCost! : number;
  grossCost! : number;
  cars!: Car[] ;
  carForm!: FormGroup;


  constructor(private carsService : CarsService,
              private router : Router,
              private formBuilder : FormBuilder ) { }

  ngOnInit(){
    this.loadCars();
    this.carForm = this.buildCarForm();
  }

  buildCarForm() {
    return this.formBuilder.group({

        model: ['', [Validators.required]],
        type: '',
        plate: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(7)]],
        deliveryDate: '',
        deadline: '',
        color: '',
        power: '',
        clientFirstName: '',
        clientSurname: '',
        cost: '',
        isFullyDamaged: '',
        year: ''

    });
  }

  loadCars() : void {
    this.carsService.getCars().subscribe((cars) =>{
      this.cars = cars;
      this.countTotalCost();
    })
  }

  addCar(){
    this.carsService.addCar(this.carForm.value).subscribe(()=> {
      this.loadCars();
    });
  }

  goToCarDetails(car : Car){
    this.router.navigate(['/cars', car.id]);
  }

  removeCar(car : Car, event: any){
    event.stopPropagation();
    this.carsService.removeCar(car.id).subscribe(()=> {
      this.loadCars();
    });
  }

  ngAfterViewInit() {
    this.totalCostRef.showGross();

  }

  showGross() : void {
    this.totalCostRef.showGross();
  }

  countTotalCost() : void {
    this.totalCost = this.cars
    .map ((car) => car.cost) // 300,400,500
    .reduce((prev, next) => prev + next);
  }

  onShownGross(grossCost : number) : void {
    this.grossCost = grossCost;
  }


}