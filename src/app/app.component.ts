import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Cars } from './car.model';
import { AppState } from './redux/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>){}

  ngOnInit() {
    this.store.select('carPage').subscribe( ({cars}) => {
      this.cars = cars
    })
  }
}
