import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseCar } from '../base-car';
import { Colors } from '../colors';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private http:HttpClient){}

  ngOnInit(){
    this.getCar;
  }

  color: Colors = {name: '', details: '', price:0};
  car: BaseCar = {id:'', details:'', colors:[this.color]};

  getBaseCar():Observable<BaseCar>{
    return this.http.get<BaseCar>('/models');
  }

  getCar(): void {
    this.getBaseCar()
    .subscribe(data => this.car = {
      id: data.id,
      details: data.details,
      colors: data.colors
    })
  }

}
