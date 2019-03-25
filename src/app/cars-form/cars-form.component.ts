import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
// import * as moment from 'moment'
import { AppState } from '../redux/app.state'
import { Car } from '../car.model'
import { AddCar } from '../redux/cars.action'

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent {

  carName: string =''
  carModel: string =''

  constructor(private store: Store<AppState>) {
   }

  onAdd(){
    if (this.carName ==='' || this.carModel ==='') return
    const car = new Car(
      this.carName,
      this.carModel,
      false,
    )

  this.store.dispatch(new AddCar(car))

    this.carName=''
    this.carModel=''
  }

}
